const fs = require("fs");
const compareImages = require("resemblejs/compareImages");
const conf = require("./config.json");

const reportPath = `report_${Date.now()}`;
const reportSrcPath = `src`;

const deltaResult = {
    title: "",
    features: [],
};

const compareReport = (compare, index) => {
    return `
    <div class="row">
        <h4 class="text-center">Paso ${index + 1}</h4>
        <div class="row">
            <div class="col">
                <figure class="figure">
                    <img
                        src="${compare.ref}"
                        class="figure-img img-fluid rounded"
                    />
                    <figcaption class="figure-caption text-center">Anterior</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img
                        src="${compare.target}"
                        class="figure-img img-fluid rounded"
                    />
                    <figcaption class="figure-caption text-center">Nuevo</figcaption>
                </figure>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row">
                    <dt class="col-sm-4">Mismas dimensiones</dt>
                    <dd class="col-sm-8">${
                        compare.isSameDimensions ? "Si" : "No"
                    }</dd>
                </div>
                <div class="row">
                    <dt class="col-sm-4">Diferencias en dimensiones</dt>
                    <dd class="col-sm-8">Ancho: ${
                        compare.dimensionDifference.width
                    } Alto: ${compare.dimensionDifference.height}</dd>
                </div>
                <div class="row">
                    <dt class="col-sm-4">Porcentaje diferencias</dt>
                    <dd class="col-sm-8">${compare.misMatchPercentage}%</dd>
                </div>
                <div class="row">
                    <dt class="col-sm-4">Límites de diferencias</dt>
                    <dd class="col-sm-8">Top: ${
                        compare.diffBounds.top
                    }, Left: ${compare.diffBounds.left}, Bottom: ${
        compare.diffBounds.bottom
    }, Right: ${compare.diffBounds.right}</dd>
                </div>
                <div class="row">
                    <dt class="col-sm-4">Tiempo de análisis</dt>
                    <dd class="col-sm-8">${compare.analysisTime}ms</dd>
                </div>
            </div>
            <div class="col">
                <figure class="figure">
                    <img
                        src="${compare.delta}"
                        class="figure-img img-fluid rounded"
                    />
                    <figcaption class="figure-caption text-center">Comparación</figcaption>
                </figure>
            </div>
        </div>
    </div>
    `;
};

const scenarioReport = (scenario) => {
    return `
    <div class="row">
        <h3>${scenario.name}</h3>
        ${scenario.compares.map((compare, i) => compareReport(compare, i))}
    </div>
    <hr />`;
};

const featureReport = (feature) => {
    return `
    <div class="jumbotron">
        <div class="container">
            <h2>Funcionalidad ${feature.name}</h2>
            ${feature.scenarios.map((scenario) => scenarioReport(scenario))}
        </div>
    </div>`;
};

const createReport = () => {
    fs.writeFileSync(
        `${reportPath}/deltaResult.json`,
        JSON.stringify(deltaResult)
    );
    const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Visual Regression Test</title>
        <link href="style.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <header class="text-center p-2">
            <h1 class="display-5"><span class="display-2">${
                deltaResult.title
            }</span><br/>Pruebas de Regresion Visual</h1>
        </header>
        <main>
            ${deltaResult.features.map((f) => featureReport(f))}
        </main>
    </body>
    </html>`;

    fs.mkdirSync(`${reportPath}/${reportSrcPath}`, { recursive: true });
    fs.writeFileSync(`${reportPath}/report.html`, template, {
        encoding: "utf-8",
    });
    fs.copyFileSync("./source/style.css", `${reportPath}/style.css`);
    fs.copyFileSync(
        "./source/bootstrap.min.css",
        `${reportPath}/bootstrap.min.css`
    );
};

const compare = async (ref, target, filePath) => {
    const delta = await compareImages(
        fs.readFileSync(ref),
        fs.readFileSync(target),
        conf.options
    );

    fs.writeFileSync(filePath, delta.getBuffer());

    return {
        isSameDimensions: delta.isSameDimensions,
        dimensionDifference: delta.dimensionDifference,
        rawMisMatchPercentage: delta.rawMisMatchPercentage,
        misMatchPercentage: delta.misMatchPercentage,
        diffBounds: delta.diffBounds,
        analysisTime: delta.analysisTime,
    };
};

const init = async () => {
    const dirOptions = {
        recursive: true,
    };

    for (const feature of conf.features) {
        let featureResult = { name: feature.name, scenarios: [] };

        for (const scenario of feature.scenarios) {
            let scenarioResult = { name: scenario.description, compares: [] };

            const srcPath = `${reportSrcPath}/${feature.name}/${scenario.name}`;
            fs.mkdirSync(`${reportPath}/${srcPath}`, dirOptions);

            let refPath = `${conf.reference.basepath}/${feature.name}/${scenario.name}`;
            const refImages = fs.readdirSync(refPath, dirOptions);

            let targetPath = `${conf.target.basepath}/${feature.name}/${scenario.name}`;
            const targetImages = fs.readdirSync(targetPath, dirOptions);

            for (const refImg of refImages) {
                if (targetImages.includes(refImg)) {
                    const ref = `${refPath}/${refImg}`;
                    const target = `${targetPath}/${refImg}`;
                    console.log(ref, target);
                    fs.copyFileSync(
                        ref,
                        `${reportPath}/${srcPath}/ref-${refImg}`
                    );
                    fs.copyFileSync(
                        target,
                        `${reportPath}/${srcPath}/target-${refImg}`
                    );

                    const deltaFilePath = `${reportPath}/${srcPath}/delta-${refImg}`;
                    const compareResult = await compare(
                        ref,
                        target,
                        deltaFilePath
                    );

                    scenarioResult.compares.push({
                        ref: `${srcPath}/ref-${refImg}`,
                        target: `${srcPath}/target-${refImg}`,
                        delta: `${srcPath}/delta-${refImg}`,
                        ...compareResult,
                    });
                }
            }

            featureResult.scenarios.push(scenarioResult);
        }

        deltaResult.features.push(featureResult);
    }
};

(async () => {
    console.log("Inicio de comparación de imágenes");
    deltaResult.title = `${conf.application}: v${conf.reference.version} vs v${conf.target.version}`;
    await init();
    createReport();
    console.log("Fin de comparación de imágenes");
})();

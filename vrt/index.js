const path = require("path");
const fs = require("fs");
const compareImages = require("resemblejs/compareImages");
const conf = require("./config.json");

const reportPath = `./report/${Date.now()}/`;
const reportSrcPath = `${reportPath}/src`;

const createReport = (data) => {
    const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Visual Regression Test</title>
        <link href="bootstrap.min.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <header class="text-center p-2">
            <h1 class="display-5"><span class="display-2">Ghost 3.41.1 vs Ghost 4.44.0</span><br/>Pruebas de Regresion Visual</h1>
        </header>
        <main>
        </main>
    </body>
    </html>`;

    fs.mkdirSync(reportPath, { recursive: true });
    fs.writeFileSync(`${reportPath}report.html`, template, {
        encoding: "utf-8",
    });
    fs.copyFileSync(
        "./source/bootstrap.min.css",
        `${reportPath}bootstrap.min.css`
    );
};

const compare = async (a, b) => {};

const init = () => {};

(async () => {
    console.log("Inicio de comparación de imágenes");
    createReport({ title: "Visual Regression Test" });

    console.log(fs.readdirSync(conf.reference.basepath));
    for (const feature of conf.features) {
        console.log(feature);
    }
    console.log("Fin de comparación de imágenes");
})();

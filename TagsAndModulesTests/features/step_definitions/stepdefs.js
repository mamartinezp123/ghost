const assert = require("assert");
const { faker } = require("@faker-js/faker");

const {
    Given,
    When,
    Then,
    After,
    Before,
    setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const PaginaAutenticacion = require("../objects/pagina-autenticacion");
const PaginaSitio = require("../objects/pagina-sitio");
const PaginaUsuario = require("../objects/pagina-usuario");
const PaginaListarElementos = require("../objects/pagina-listar-elementos");
const PaginaCrearModificarEliminarElemento = require("../objects/pagina-crear-modificar-eliminar-elemento");
const PaginaListarEtiquetas = require("../objects/pagina-listar-etiquetas");
const PaginaCrearModificarEliminarEtiqueta = require("../objects/pagina-crear-modificar-eliminar-etiqueta");
const fs = require("fs");
const { parse } = require("path");
const { SlowBuffer } = require("buffer");

setDefaultTimeout(100 * 1000);

const millisecondsToWait = 3000;

let browser;
let driver;
let paginaAutenticacion;
let paginaSitio;
let paginaListarElementos;
let paginaCrearModificarEliminarElemento;
let paginaListarEtiquetas;
let paginaCrearModificarEliminarEtiqueta;
let paginaUsuario;
let nombreEscenario;
let titulode254;
let paso = 1;
let titulode255;
let nombreEtiqueta;

const identificacion = "of.garzon2662@gmail.com";
const contrasena = 'P3~uJc?FwhXq"-2';
const version = "3.41.1";
const baseUrl = "http://localhost:3001/";

const directorioReportes = `reportes/${version}/`;

Before(async function (escenario) {
    browser = await chromium.launch({ headless: false, workers: 1 });
    driver = await browser.newPage();
    await driver.goto(`${baseUrl}ghost/#/site`);
    paginaAutenticacion = new PaginaAutenticacion(driver);
    paginaSitio = new PaginaSitio(driver);
    paginaUsuario = new PaginaUsuario(driver);
    paginaListarElementos = new PaginaListarElementos(driver);
    paginaCrearModificarEliminarElemento =
        new PaginaCrearModificarEliminarElemento(driver);
    paginaListarEtiquetas = new PaginaListarEtiquetas(driver);
    paginaCrearModificarEliminarEtiqueta =
        new PaginaCrearModificarEliminarEtiqueta(driver);
    nombreEscenario = escenario.pickle.name;
    paso = 1;
});

Given("un usuario autenticado", async function () {
    await sleep();
    await paginaAutenticacion.autenticacionValida(identificacion, contrasena);
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en el menu de usuario", async function () {
    await sleep();
    await paginaSitio.mostrarMenuUsuario();
    await sleep();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en la opcion desconectar", async function () {
    await sleep();
    await paginaUsuario.cerrarSesion();
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then("el usuario ya no esta autenticado", async function () {
    await sleep();
    assert.equal(`${baseUrl}ghost/#/signin`, await driver.url());
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en la opcion tu perfil", async function () {
    await sleep();
    await paginaUsuario.perfil();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en el boton regenerar", async function () {
    await sleep();
    await paginaUsuario.regenerar();
    await sleep();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When(
    "hace click en el boton regenerar tu token personal del mensaje de confirmacion",
    async function () {
        await sleep();
        await paginaUsuario.confirmar();
        await sleep();
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

Then("se genera un nuevo token", async function () {
    await sleep();
    if (version == "3.41.1") {
        assert.equal(
            "Personal Token was successfully regenerated",
            (await paginaUsuario.obtenerMensaje()).trim()
        );
    }
    if (version == "4.44.0") {
        assert.equal(
            "Staff access token was successfully regenerated",
            (await paginaUsuario.obtenerMensaje()).trim()
        );
    }
    driver.screenshot().then((image) => saveScreenshot(image));
});

When(
    "diligencia con {string} {string} y {string} el formulario actualizar contrasena",
    async function (
        contrasenaAntigua,
        contrasenaNueva,
        contrasenaVerificacion
    ) {
        await sleep();
        await paginaUsuario.cambiarContrasena(
            contrasena,
            contrasenaAntigua,
            contrasenaNueva,
            contrasenaVerificacion
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

Then("se indica al usuario que la contraseña es incorrecta", async function () {
    await sleep();
    assert.equal(
        "Your password is incorrect. Your password is incorrect.",
        (await paginaUsuario.obtenerError()).trim()
    );
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then(
    "se indica al usuario que la verificacion de la contraseña es incorrecta",
    async function () {
        await sleep();
        assert.equal(
            "Your new passwords do not match",
            (await paginaUsuario.obtenerErrorCampo(2)).trim()
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

Then("se indica al usuario que la contraseña es insegura", async function () {
    await sleep();
    if (version == "3.41.1") {
        assert.equal(
            "Sorry, you cannot use an insecure password",
            (await paginaUsuario.obtenerErrorCampo(1)).trim()
        );
    }
    if (version == "4.44.0") {
        assert.equal(
            "Sorry, you cannot use an insecure password.",
            (await paginaUsuario.obtenerErrorCampo(1)).trim()
        );
    }
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then(
    "se indica al usuario que la contraseña no puede estar vacia",
    async function () {
        await sleep();
        assert.equal(
            "Sorry, passwords can't be blank",
            (await paginaUsuario.obtenerErrorCampo(1)).trim()
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When("hace click en el link paginas", async function () {
    await sleep();
    await paginaSitio.hacerClickEnOpcionPorNombre("Pages");
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en el boton nuevo", async function () {
    await sleep();
    await paginaListarElementos.hacerClickEnNuevoElemento();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When(
    "diligencia con titulo de {string} y cuerpo de {string} y envia el formulario crear - modificar elemento",
    async function (tituloLenght, contenidoLenght) {
        tituloLenght = parseInt(tituloLenght, 10);
        contenidoLenght = parseInt(contenidoLenght, 10);
        await sleep();
        let titulo = faker.string.alpha(tituloLenght);
        let contenido = faker.string.alpha(contenidoLenght);
        await paginaCrearModificarEliminarElemento.crearOModificarElementoConError(
            titulo,
            contenido
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When(
    "diligencia con titulo de 254 y cuerpo de 12 y envia el formulario crear - modificar elemento",
    async function () {
        await sleep();
        titulode254 = faker.string.alpha(254);
        let contenido = faker.string.alpha(12);
        await paginaCrearModificarEliminarElemento.crearOModificarElemento(
            titulode254,
            contenido
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

Then(
    "el elemento con titulo de 254 caracteres esta en la lista y tiene estado publicado",
    async function () {
        await sleep();
        assert.equal(
            "PUBLISHED".toLowerCase(),
            (await paginaListarElementos.obtenerEstadoElementoPorTitulo(titulode254))
                .trim()
                .toLowerCase()
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When(
    "diligencia con titulo de 255 y cuerpo de 12 y envia el formulario crear - modificar elemento",
    async function () {
        await sleep();
        titulode255 = faker.string.alpha(255);
        let contenido = faker.string.alpha(12);
        await paginaCrearModificarEliminarElemento.crearOModificarElemento(
            titulode255,
            contenido
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

Then(
    "el elemento con titulo de 255 caracteres esta en la lista y tiene estado publicado",
    async function () {
        await sleep();
        assert.equal(
            "PUBLISHED".toLowerCase(),
            (await paginaListarElementos.obtenerEstadoElementoPorTitulo(titulode255))
                .trim()
                .toLowerCase()
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When(
    "diligencia con {string} y {string} y envia el formulario crear - modificar elemento",
    async function (titulo, contenido) {
        await sleep();
        await paginaCrearModificarEliminarElemento.crearOModificarElemento(
            titulo,
            contenido
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When("va a la pagina de paginas", async function () {
    await sleep();
    await paginaCrearModificarEliminarElemento.listarElementos();
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then(
    "el elemento {string} esta en la lista y tiene estado publicado",
    async function (titulo) {
        await sleep();
        assert.equal(
            "PUBLISHED".toLowerCase(),
            (await paginaListarElementos.obtenerEstadoElementoPorTitulo(titulo))
                .trim()
                .toLowerCase()
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When("hace click en el elemento {string}", async function (titulo) {
    await sleep();
    await paginaListarElementos.hacerClickEnElementoPorTitulo(titulo);
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en ajustes", async function () {
    await sleep();
    await paginaCrearModificarEliminarElemento.hacerClickEnAjustes();
    await sleep();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en el boton eliminar", async function () {
    await sleep();
    await paginaCrearModificarEliminarElemento.hacerClickEnEliminar();
    await sleep();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When(
    "hace click en el boton eliminar del mensaje de confirmacion",
    async function () {
        await sleep();
        await paginaCrearModificarEliminarElemento.hacerClickEnConfirmarEliminar();
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

Then("el elemento {string} no esta en la lista", async function (titulo) {
    await sleep();
    assert.equal(
        false,
        await paginaListarElementos.estaElementoPorTitulo(titulo)
    );
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then("se indica al usuario que el titulo es muy largo", async function () {
    await sleep();
    assert.equal(
        "Update failed: Title cannot be longer than 255 characters.",
        (await paginaCrearModificarEliminarElemento.obtenerError()).trim()
    );
    driver.screenshot().then((image) => saveScreenshot(image));
});

When(
    "diligencia con {string} y {string} el formulario crear - modificar elemento",
    async function (titulo, contenido) {
        await sleep();
        await paginaCrearModificarEliminarElemento.crearOModificarBorradorElemento(
            titulo,
            contenido
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When("hace click en el link publicaciones", async function () {
    await sleep();
    await paginaSitio.hacerClickEnOpcionPorNombre("Posts");
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("confirmar publicacion del elemento", async function () {
    await sleep();
    if (version == "4.44.0") {
        await paginaCrearModificarEliminarElemento.hacerClickEnConfirmarCrear();
    }
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("va a la pagina de publicaciones", async function () {
    await sleep();
    await paginaCrearModificarEliminarElemento.listarElementos();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en el link etiquetas", async function () {
    await sleep();
    await paginaSitio.hacerClickEnOpcionPorNombre("Tags");
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en el boton nueva etiqueta", async function () {
    await sleep();
    await paginaListarEtiquetas.hacerClickEnNuevaEtiqueta();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When(
    "diligencia con {string} y {string} y envia el formulario crear - modificar etiqueta",
    async function (nombre, descripcion) {
        await sleep();
        await paginaCrearModificarEliminarEtiqueta.crearOModificarEtiqueta(
            nombre,
            descripcion
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When(
    "diligencia con titulo de {int} caracteres y {string} y envia el formulario crear - modificar etiqueta",
    async function (nameLength, descripcion) {
        await sleep();
        nombreEtiqueta = faker.string.alpha(nameLength)
        await paginaCrearModificarEliminarEtiqueta.crearOModificarEtiqueta(
            nombreEtiqueta,
            descripcion
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

When(
    "diligencia con titulo de {int} caracteres y slug {string} y descripcion {string} y envia el formulario crear - modificar etiqueta",
    async function (nameLength, slug, descripcion) {
        await sleep();
        nombreEtiqueta = faker.string.alpha(nameLength)
        await paginaCrearModificarEliminarEtiqueta.crearOModificarEtiquetaConSlug(
            nombreEtiqueta,
            descripcion,
            slug
        );
        
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);


When(
    "diligencia con titulo de {int} caracteres y con slug de {int} caracteres y descripcion de {int} caracteres y envia el formulario crear - modificar etiqueta",
    async function (nameLength, slugLenght, descripcionLenght) {
        await sleep();
        nombreEtiqueta = faker.string.alpha(nameLength);
        slug = faker.string.alpha(slugLenght);
        descripcion = faker.string.alpha(descripcionLenght);
        await paginaCrearModificarEliminarEtiqueta.crearOModificarEtiquetaConSlug(
            nombreEtiqueta,
            descripcion,
            slug
        );
        
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);



When('crea un draft con titulo {string} y contenido {string}', async function (titulo, contenido) {
    await sleep();
        await paginaCrearModificarEliminarElemento.crearDraft(titulo, contenido);
        driver.screenshot().then((image) => saveScreenshot(image));
  });

When("va a la pagina de etiquetas", async function () {
    await sleep();
    await paginaCrearModificarEliminarEtiqueta.listarEtiquetas();
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then("la etiqueta esta en la lista", async function () {
    await sleep();
    assert.equal(
        true,
        await paginaListarEtiquetas.estaEtiquetaPorNombre(nombreEtiqueta)
    );
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en la etiqueta {string}", async function (nombre) {
    await sleep();
    await paginaListarEtiquetas.haceClickEnEtiquetaPorNombre(nombre);
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("hace click en el boton eliminar etiqueta", async function () {
    await sleep();
    await paginaCrearModificarEliminarEtiqueta.hacerClickEnEliminar();
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("borro contenido del texto del nombre", async function () {
    await sleep();
    await paginaCrearModificarEliminarEtiqueta.borrarCampoNombre();
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then("el boton save ya no existe", async function() {
    await sleep();
    assert(paginaCrearModificarEliminarEtiqueta.botonSaveNoExiste(), false);
})

When(
    "hace click en el boton eliminar etiqueta del mensaje de confirmacion",
    async function () {
        await sleep();
        await paginaCrearModificarEliminarEtiqueta.hacerClickEnConfirmarEliminar();
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

Then("la etiqueta {string} no esta en la lista", async function (nombre) {
    await sleep();
    assert.equal(
        false,
        await paginaListarEtiquetas.estaEtiquetaPorNombre(nombre)
    );
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then("se indica al usuario que el nombre es muy largo", async function () {
    await sleep();
    assert.equal(
        "Tag names cannot be longer than 191 characters.",
        (await paginaCrearModificarEliminarEtiqueta.obtenerError()).trim()
    );
    driver.screenshot().then((image) => saveScreenshot(image));
});

When("se indica al usuario que el nombre no puede estar vacio", async function () {
    await sleep();
    assert.equal(
        "You must specify a name for the tag.",
        (await paginaCrearModificarEliminarEtiqueta.obtenerError()).trim()
    );
    driver.screenshot().then((image) => saveScreenshot(image));
});

Then("el boton de creacion no esta en la pagina", async function() {
    await sleep();
    assert(paginaCrearModificarEliminarElemento.botonMenuNoExiste(), false);
})

When(
    "crea un draft con titulo de {string} y contenido de {string}",
    async function (tituloLenght, contenidoLenght) {
        tituloLenght = parseInt(tituloLenght, 10);
        contenidoLenght = parseInt(contenidoLenght, 10);
        await sleep();
        titulode255 = faker.string.alpha(tituloLenght);
        let contenido = faker.string.alpha(contenidoLenght);
        await paginaCrearModificarEliminarElemento.crearOModificarElementoConError(
            titulode255,
            contenido
        );
        await sleep();
        driver.screenshot().then((image) => saveScreenshot(image));
    }
);

Then('el draft de 255 caracteres esta en la lista y tiene estado publicado', async function () {
    await sleep();
        assert.equal(
            "PUBLISHED".toLowerCase(),
            (await paginaListarElementos.obtenerEstadoElementoPorTitulo(titulode255))
                .trim()
                .toLowerCase()
        );
        driver.screenshot().then((image) => saveScreenshot(image));
    });

Then('el draft con titulo {string} esta en la lista y tiene estado draft', async function (titulo) {
        await sleep();
            assert.notEqual(
                "DRAFT".toLowerCase(),
                (await paginaListarElementos.obtenerEstadoElementoPorTitulo(titulo))
                    .trim()
                    .toLowerCase()
            );
            driver.screenshot().then((image) => saveScreenshot(image));
        });

When('da click en Leave para volver a pagina de lista de posts', async function() {
    await sleep();
    await paginaCrearModificarEliminarElemento.hacerClickEnConfirmarEliminar();
});

Then ('el draft con titulo {string} no esta creado', async function(titulo) {
    await sleep();
    assert.equal(
        false,
        await paginaListarElementos.estaElementoPorTitulo(titulo)
    );
    driver.screenshot().then((image) => saveScreenshot(image));
})


After(async function () {
    await sleep();
    await driver.close();
    await browser.close();
});

function sleep() {
    return new Promise((resolve) => setTimeout(resolve, millisecondsToWait));
}

function saveScreenshot(image) {
    sleep();
    if (!fs.existsSync(directorioReportes + nombreEscenario)) {
        fs.mkdirSync(directorioReportes + nombreEscenario, { recursive: true });
    }
    fs.writeFileSync(
        directorioReportes + nombreEscenario + "/" + paso + ".png",
        image,
        "base64"
    );
    paso += 1;
}

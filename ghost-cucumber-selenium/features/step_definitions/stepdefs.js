const assert = require("assert");
const { Given, When, Then, After, Before } = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { By } = require("selenium-webdriver");
const PaginaAutenticacion = require("../objects/pagina-autenticacion");
const PaginaSitio = require("../objects/pagina-sitio");
const PaginaListarElementos = require("../objects/pagina-listar-elementos");
const PaginaCrearModificarEliminarElemento = require("../objects/pagina-crear-modificar-eliminar-elemento");
const PaginaListarEtiquetas = require("../objects/pagina-listar-etiquetas");
const PaginaCrearModificarEliminarEtiqueta = require("../objects/pagina-crear-modificar-eliminar-etiqueta");
const PaginaUsuario = require("../objects/pagina-usuario");

const millisecondsToWait = 2000;
const service = new chrome.ServiceBuilder("./chromedriver.exe");

let driver;
let paginaAutenticacion;
let paginaSitio;
let paginaListarElementos;
let paginaCrearModificarEliminarElemento;
let paginaListarEtiquetas;
let paginaCrearModificarEliminarEtiqueta;
let paginaUsuario;

const usuario = "ce.ardilav1@uniandes.edu.co";
const identificacion = "ce.ardilav1@uniandes.edu.co";
const contrasena = "**wWzf*zPLD8";
const baseUrl = "http://localhost:3002/";

Before(async function () {
    driver = await new Builder()
        .forBrowser("chrome")
        .setChromeService(service)
        .build();
    await driver.manage().setTimeouts({ implicit: millisecondsToWait });
    await driver.get(`${baseUrl}ghost/#/signin`);
    paginaAutenticacion = new PaginaAutenticacion(driver);
    paginaSitio = new PaginaSitio(driver);
    paginaListarElementos = new PaginaListarElementos(driver);
    paginaCrearModificarEliminarElemento =
        new PaginaCrearModificarEliminarElemento(driver);
    paginaListarEtiquetas = new PaginaListarEtiquetas(driver);
    paginaCrearModificarEliminarEtiqueta =
        new PaginaCrearModificarEliminarEtiqueta(driver);
    paginaUsuario = new PaginaUsuario(driver);
});

Given("un usuario autenticado", async function () {
    await sleep();
    await paginaAutenticacion.autenticacionValida(identificacion, contrasena);
});

When("hace click en el link publicaciones", async function () {
    await sleep();
    await paginaSitio.listarPublicaciones();
});

When("hace click en el boton nuevo", async function () {
    await sleep();
    await paginaListarElementos.hacerClickEnNuevoElemento();
});

When("hace click en el boton nueva etiqueta", async function () {
    await sleep();
    await paginaListarEtiquetas.hacerClickEnNuevaEtiqueta();
});

When(
    "diligencia con {string} y {string} y envia el formulario crear - modificar elemento",
    async function (titulo, contenido) {
        await sleep();
        await paginaCrearModificarEliminarElemento.crearOModificarElemento(
            titulo,
            contenido
        );
    }
);

When("va a la pagina de publicaciones", async function () {
    await sleep();
    await paginaCrearModificarEliminarElemento.listarElementos();
});

Then(
    "el elemento {string} {string} {string} esta en la lista y tiene estado publicado",
    async function (titulo, columnaTitulo, columnaEstado) {
        await sleep();
        assert.equal(
            "PUBLISHED",
            await paginaListarElementos.obtenerEstadoElementoPorTitulo(
                titulo,
                columnaTitulo,
                columnaEstado
            )
        );
    }
);

When(
    "hace click en el elemento {string} {string}",
    async function (titulo, columnaTitulo) {
        await sleep();
        await paginaListarElementos.hacerClickEnElementoPorTitulo(
            titulo,
            columnaTitulo
        );
    }
);

When("hace click en ajustes", async function () {
    await sleep();
    await paginaCrearModificarEliminarElemento.hacerClickEnAjustes();
});

When("hace click en el boton eliminar", async function () {
    await sleep();
    await paginaCrearModificarEliminarElemento.hacerClickEnEliminar();
});

When(
    "hace click en el boton eliminar del mensaje de confirmacion",
    async function () {
        await sleep();
        await paginaCrearModificarEliminarElemento.hacerClickEnConfirmarEliminar();
    }
);

Then(
    "el elemento {string} {string} no esta en la lista",
    async function (titulo, columnaTitulo) {
        await sleep();
        assert.equal(
            false,
            await paginaListarElementos.estaElementoPorTitulo(
                titulo,
                columnaTitulo
            )
        );
    }
);

Then("se indica al usuario que el titulo es muy largo", async function () {
    await sleep();
    assert.equal(
        "Update failed: Title cannot be longer than 255 characters.",
        await paginaCrearModificarEliminarElemento.obtenerError()
    );
});

When(
    "diligencia con {string} y {string} el formulario crear - modificar elemento",
    async function (titulo, contenido) {
        await sleep();
        await paginaCrearModificarEliminarElemento.crearOModificarBorradorElemento(
            titulo,
            contenido
        );
    }
);

When("hace click en el link paginas", async function () {
    await sleep();
    await paginaSitio.listarPaginas();
});

When("va a la pagina de paginas", async function () {
    await sleep();
    await paginaCrearModificarEliminarElemento.listarElementos();
});

When("hace click en el link etiquetas", async function () {
    await sleep();
    await paginaSitio.listarEtiquetas();
});

When(
    "diligencia con {string} y {string} y envia el formulario crear - modificar etiqueta",
    async function (nombre, descripcion) {
        await sleep();
        await paginaCrearModificarEliminarEtiqueta.crearOModificarEtiqueta(
            nombre,
            descripcion
        );
    }
);

When("va a la pagina de etiquetas", async function () {
    await sleep();
    await paginaCrearModificarEliminarEtiqueta.listarEtiquetas();
});

When("hace click en la etiqueta {string}", async function (nombre) {
    await sleep();
    await paginaListarEtiquetas.haceClickEnEtiquetaPorNombre(nombre);
});

Then("la etiqueta {string} esta en la lista", async function (nombre) {
    await sleep();
    assert.equal(
        true,
        await paginaListarEtiquetas.estaEtiquetaPorNombre(nombre)
    );
});

When("hace click en el boton eliminar etiqueta", async function () {
    await sleep();
    await paginaCrearModificarEliminarEtiqueta.hacerClickEnEliminar();
});

When(
    "hace click en el boton eliminar etiqueta del mensaje de confirmacion",
    async function () {
        await sleep();
        await paginaCrearModificarEliminarEtiqueta.hacerClickEnConfirmarEliminar();
    }
);

Then("la etiqueta {string} no esta en la lista", async function (nombre) {
    await sleep();
    assert.equal(
        false,
        await paginaListarEtiquetas.estaEtiquetaPorNombre(nombre)
    );
});

Then("se indica al usuario que el nombre es muy largo", async function () {
    await sleep();
    assert.equal(
        "Tag names cannot be longer than 191 characters.",
        await paginaCrearModificarEliminarEtiqueta.obtenerError()
    );
});

When("hace click en el menu de usuario", async function () {
    await sleep();
    await paginaSitio.mostrarMenuUsuario();
});

When("hace click en la opcion tu perfil", async function () {
    await sleep();
    await paginaUsuario.perfil();
});

When("hace click en el boton regenerar", async function () {
    await sleep();
    await paginaUsuario.regenerar();
});

When("hace click en la opcion desconectar", async function () {
    await sleep();
    await paginaUsuario.cerrarSesion();
});

Then("el usuario ya no esta autenticado", async function () {
    await sleep();
    assert.equal(`${baseUrl}ghost/#/signin`, await driver.getCurrentUrl());
});

When(
    "hace click en el boton regenerar tu token personal del mensaje de confirmacion",
    async function () {
        await sleep();
        await paginaUsuario.confirmar();
    }
);

Then("se genera un nuevo token", async function () {
    await sleep();
    assert.equal(
        "Personal Token was successfully regenerated",
        await paginaUsuario.obtenerMensaje()
    );
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
    }
);

Then("se indica al usuario que la contraseña es incorrecta", async function () {
    await sleep();
    assert.equal(
        "Your password is incorrect. Your password is incorrect.",
        await paginaUsuario.obtenerError()
    );
});

Then(
    "se indica al usuario que la verificacion de la contraseña es incorrecta",
    async function () {
        await sleep();
        assert.equal(
            "Your new passwords do not match",
            await paginaUsuario.obtenerErrorCampo(2)
        );
    }
);

Then("se indica al usuario que la contraseña es insegura", async function () {
    await sleep();
    assert.equal(
        "Sorry, you cannot use an insecure password",
        await paginaUsuario.obtenerErrorCampo(1)
    );
});

When("refresca la pagina", async function () {
    await sleep();
    await driver.navigate().refresh();
});

When("hace click en el menu de usuario nuevamente", async function () {
    await sleep();
    await paginaSitio.mostrarMenuUsuario();
});

When("el usuario se autentica con {string}", async function (contrasenaIn) {
    await sleep();
    await driver.get(`${baseUrl}ghost/#/signin`);
    await driver
        .findElement(By.css("input[name='identification']"))
        .sendKeys(usuario);
    await driver
        .findElement(By.css("input[name='password']"))
        .sendKeys(contrasena + contrasenaIn);
    await driver.findElement(By.css("button[tabindex='3']")).click();
});

Then(
    "el usuario accede a la aplicacion luego de modificar contrasena",
    async function () {
        await sleep();
        assert.equal(`${baseUrl}ghost/#/site`, await driver.getCurrentUrl());
    }
);

Then(
    "se indica al usuario que la contraseña no puede estar vacia",
    async function () {
        await sleep();
        assert.equal(
            "Sorry, passwords can't be blank",
            await paginaUsuario.obtenerErrorCampo(1)
        );
    }
);

After(async function () {
    await driver.quit();
});

function sleep() {
    return new Promise((resolve) => setTimeout(resolve, millisecondsToWait));
}

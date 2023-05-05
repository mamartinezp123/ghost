const assert = require("assert");
const {
    Given,
    When,
    Then,
    After,
    Before,
} = require("@cucumber/cucumber");
const {Builder, Key} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const {By} = require("selenium-webdriver");

const millisecondsToWait = 2000;
const service = new chrome.ServiceBuilder("./chromedriver.exe");
let driver;

const usuario = "ma.martinezp123@uniandes.edu.co";
const contrasena = "c-L56kBCAyPxU_u";

Before(async function () {
    driver = await new Builder()
        .forBrowser("chrome")
        .setChromeService(service)
        .build();
    await driver.manage().setTimeouts({implicit: millisecondsToWait});
    await driver.get("http://localhost:2368/ghost/#/signin");

});

Given("un usuario autenticado", async function () {
    await sleep();
    await driver
        .findElement(By.css("input[name='identification']"))
        .sendKeys(usuario);
    await driver
        .findElement(By.css("input[name='password']"))
        .sendKeys(contrasena);
    await driver.findElement(By.css("button[tabindex='3']")).click();
});

When("hace click en el link publicaciones", async function () {
    await sleep();
    await driver.findElement(By.css(".gh-nav-manage li:nth-child(2) a")).click();
});

When("hace click en el boton nuevo", async function () {
    await sleep();
    await driver.findElement(By.css(".view-actions .gh-btn-green")).click();
});

When(
    "diligencia con {string} y {string} y envia el formulario crear - modificar elemento",
    async function (titulo, contenido) {
        await sleep();
        await driver.findElement(By.css("textarea[tabindex='1']")).sendKeys(titulo);
        await driver
            .findElement(By.css(".koenig-editor__editor p"))
            .sendKeys(contenido);
        await driver.findElement(By.css(".gh-publishmenu")).click();
        await driver.findElement(By.css(".gh-publishmenu-button")).click();
    }
);

When("va a la pagina de publicaciones", async function () {
    await sleep();
    await driver.get("http://localhost:2368/ghost/#/posts");
});

Then(
    "el elemento {string} esta en la lista y tiene estado publicado",
    async function (expectedTitulo) {
        await sleep();
        let esta = false;
        let valorTitulo;
        let valorEstado;
        let titulos = await driver.findElements(
            By.css(
                ".gh-posts-list-item a:nth-child(2) .gh-content-entry-title"
            )
        );
        let estados = await driver.findElements(
            By.css(".gh-posts-list-item a:nth-child(5) .gh-content-status-published")
        );
        for (let index = 0; index < titulos.length; index++) {
            valorTitulo = await titulos[index].getText();
            valorEstado = await estados[index].getText();
            if (expectedTitulo == valorTitulo) {
                esta = true;
                break;
            }
        }
        assert.equal(true, esta);
        assert.equal("PUBLISHED", valorEstado);
        assert.equal(expectedTitulo, valorTitulo);
    }
);

When("hace click en el elemento {string}", async function (titulo) {
    await sleep();
    let elementos = await driver
        .findElements(By.css(".gh-posts-list-item a:nth-child(2) h3"));
    for (let index = 0; index < elementos.length; index++) {
        let valorTitulo = await elementos[index].getText();
        if (titulo == valorTitulo) {
            await elementos[index].click();
            break;
        }
    }
});

When("hace click en ajustes", async function () {
    await sleep();
    await driver.findElement(By.css(".post-settings")).click();
});

When("hace click en el boton eliminar", async function () {
    await sleep();
    await driver.findElement(By.css(".gh-btn-hover-red")).click();
});

When(
    "hace click en el boton eliminar del mensaje de confirmacion",
    async function () {
        await sleep();
        await driver
            .findElement(By.css(".modal-footer .gh-btn-red"))
            .click();
    }
);

Then(
    "el elemento {string} no esta en la lista",
    async function (expectedTitulo) {
        await sleep();
        let elementos = await driver.findElements(
            By.css(
                ".gh-posts-list-item a:nth-child(2) .gh-content-entry-title"
            )
        );
        let esta = false;
        for (let index = 0; index < elementos.length; index++) {
            let valorTitulo = await elementos[index].getText();
            if (expectedTitulo == valorTitulo) {
                esta = true;
                break;
            }
        }
        assert.equal(false, esta);
    }
);

When("se indica al usuario que el titulo es muy largo", async function () {
    await sleep();
    let mensaje = await driver.findElement(By.css("article div"));
    let valorMensaje = await mensaje.getText();
    assert.equal("Update failed: Title cannot be longer than 255 characters.", valorMensaje);
});

When("diligencia con {string} y {string} el formulario crear - modificar elemento", async function (titulo, contenido) {
    await sleep();
    await driver.findElement(By.css("textarea[tabindex='1']")).sendKeys(titulo);
    await driver.findElement(By.css(".koenig-editor__editor p")).sendKeys(contenido);
});

When("hace click en el link paginas", async function () {
    await sleep();
    await driver.findElement(By.css(".gh-nav-manage li:nth-child(3) a")).click();
});

When("va a la pagina de paginas", async function () {
    await sleep();
    await driver.get("http://localhost:2368/ghost/#/pages");
});

Then(
    "la pagina {string} esta en la lista y tiene estado publicado",
    async function (expectedTitulo) {
        await sleep();
        let esta = false;
        let valorTitulo;
        let valorEstado;
        let titulos = await driver.findElements(
            By.css(
                ".gh-posts-list-item a:nth-child(2) .gh-content-entry-title"
            )
        );
        let estados = await driver.findElements(
            By.css(".gh-posts-list-item a:nth-child(3) .gh-content-status-published")
        );
        for (let index = 0; index < titulos.length; index++) {
            valorTitulo = await titulos[index].getText();
            valorEstado = await estados[index].getText();
            if (expectedTitulo == valorTitulo) {
                esta = true;
                break;
            }
        }
        assert.equal(true, esta);
        assert.equal("PUBLISHED", valorEstado);
        assert.equal(expectedTitulo, valorTitulo);
    }
);

When("hace click en el link etiquetas", async function () {
    await sleep();
    await driver.findElement(By.css(".gh-nav-manage li:nth-child(4) a")).click();
});

When("diligencia con {string} y {string} y envia el formulario crear - modificar etiqueta", async function (nombre, descripcion) {
    await sleep();
    await driver.findElement(By.css("input[tabindex='1']")).sendKeys(nombre);
    await driver.findElement(By.css("textarea[tabindex='3']")).sendKeys(descripcion);
    await driver.findElement(By.css(".gh-btn-blue")).click();
});

When("va a la pagina de etiquetas", async function () {
    await sleep();
    await driver.get("http://localhost:2368/ghost/#/tags");
});

Then("hace click en la etiqueta {string}", async function (nombre) {
    await sleep();
    let elementos = await driver.findElements(By.css(".tags-list a h3"));
    for (let index = 0; index < elementos.length; index++) {
        let valorNombre = await elementos[index].getText();
        if (nombre == valorNombre) {
            await elementos[index].click();
            break;
        }
    }
});

Then("la etiqueta {string} esta en la lista", async function (expectedNombre) {
    await sleep();
    let esta = false;
    let elementos = await driver.findElements(By.css(".tags-list a h3"));
    for (let index = 0; index < elementos.length; index++) {
        let valorNombre = await elementos[index].getText();
        if (expectedNombre == valorNombre) {
            esta = true;
            break;
        }
    }
    assert.equal(true, esta);
})

When("hace click en el boton eliminar etiqueta", async function () {
    await sleep();
    await driver.findElement(By.css(".gh-canvas .gh-btn-red")).click();
});

Then("la etiqueta {string} no esta en la lista", async function (expectedNombre) {
    await sleep();
    let esta = false;
    let elementos = await driver.findElements(By.css(".tags-list a h3"));
    for (let index = 0; index < elementos.length; index++) {
        let valorNombre = await elementos[index].getText();
        if (expectedNombre == valorNombre) {
            esta = true;
            break;
        }
    }
    assert.equal(false, esta);
});

When("se indica al usuario que el nombre es muy largo", async function () {
    await sleep();
    let mensaje = await driver.findElements(By.css("form p"));
    let valorMensaje = await mensaje[0].getText();
    assert.equal("Tag names cannot be longer than 191 characters.", valorMensaje);
});

When("hace click en el menu de usuario", async function () {
    await sleep();
    await driver.findElement(By.css(".gh-nav-bottom div")).click();
});

When("hace click en la opcion tu perfil", async function () {
    await sleep();
    await driver.findElement(By.css(".dropdown-menu li:nth-child(4) a")).click();
});

When("hace click en el boton regenerar", async function () {
    await sleep();
    await driver.findElement(By.css("form:nth-child(3) button")).click();
});

When("hace click en la opcion desconectar", async function () {
    await sleep();
    await driver.findElement(By.css(".dropdown-menu li:nth-child(9) a")).click();
});

Then("el usuario ya no esta autenticado", async function () {
    await sleep();
    let currentUrl = await driver.getCurrentUrl();
    assert.equal("http://localhost:2368/ghost/#/signin", currentUrl);
});

When("hace click en el boton regenerar tu token personal del mensaje de confirmacion", async function () {
    await sleep();
    driver.findElement(By.css(".modal-footer .gh-btn-red")).click();
});

Then("se genera un nuevo token", async function () {
    await sleep();
    let mensaje = await driver.findElement(By.css(".green"));
    let valorMensaje = await mensaje.getText();
    assert.equal("Personal Token was successfully regenerated", valorMensaje);
});

When("diligencia con {string} {string} y {string} el formulario actualizar contrasena", async function (contrasenaAntigua, contrasenaNueva, contrasenaVerificacion) {
    await sleep();
    await driver.findElement(By.id("user-password-old")).sendKeys(contrasena + contrasenaAntigua);
    await driver.findElement(By.id("user-password-new")).sendKeys(contrasenaNueva == "1234567890" ? contrasenaNueva : contrasena + contrasenaNueva);
    await driver.findElement(By.id("user-new-password-verification")).sendKeys(contrasenaVerificacion == "1234567890" ? contrasenaVerificacion : contrasena + contrasenaVerificacion);
});

When("hace click en el boton cambiar contrasena", async function () {
    await sleep();
    await driver.findElement(By.css("form:nth-child(2) button")).click();
});

Then("se indica al usuario que la contraseña es incorrecta", async function () {
    await sleep();
    let mensaje = await driver.findElement(By.css("article div")).getText();
    assert.equal("Your password is incorrect. Your password is incorrect.", mensaje);
});

Then("se indica al usuario que la verificacion de la contraseña es incorrecta", async function () {
    await sleep();
    let mensajes = await driver.findElements(By.css("form:nth-child(2) p"));
    let valorMensaje = await mensajes[2].getText()
    assert.equal("Your new passwords do not match", valorMensaje);
});

Then("se indica al usuario que la contraseña es insegura", async function () {
    await sleep();
    let mensajes = await driver.findElements(By.css("form:nth-child(2) p"));
    let valorMensaje = await mensajes[1].getText()
    assert.equal("Sorry, you cannot use an insecure password", valorMensaje);
});

When("refresca la pagina", async function (){
    await sleep();
    await driver.navigate().refresh();
});

When("hace click en el menu de usuario nuevamente", async function (){
    await sleep();
    await driver.findElement(By.css(".gh-nav-bottom div")).click();
});

When("el usuario se autentica con {string}", async function (contrasenaIn){
    await sleep();
    await driver.get("http://localhost:2368/ghost/#/signin");
    await driver.findElement(By.css("input[name='identification']")).sendKeys(usuario);
    await driver.findElement(By.css("input[name='password']")).sendKeys(contrasena + contrasenaIn);
    await driver.findElement(By.css("button[tabindex='3']")).click();
});

Then("el usuario accede a la aplicacion luego de modificar contrasena", async function () {
    await sleep();
    let currentUrl = await driver.getCurrentUrl();
    assert.equal("http://localhost:2368/ghost/#/site", currentUrl);
});

After(async function () {
    await driver.quit();
});

function sleep() {
    return new Promise(resolve => setTimeout(resolve, millisecondsToWait));
}

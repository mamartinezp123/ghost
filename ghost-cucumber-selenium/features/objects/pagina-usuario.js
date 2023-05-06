const {By} = require("selenium-webdriver");

class PaginaUsuario {

    driver;
    cerrarSesionBy = By.css(".dropdown-menu li:nth-child(9) a");
    perfilBy = By.css(".dropdown-menu li:nth-child(4) a");
    regenerarBy = By.css("form:nth-child(3) button");
    confirmarBy = By.css(".modal-footer .gh-btn-red");
    mensajeBy = By.css(".green");
    contrasenaAntiguaBy = By.id("user-password-old");
    contrasenaNuevaBy = By.id("user-password-new");
    contrasenaVerificacionBy = By.id("user-new-password-verification");
    cambiarContrasenaBy = By.css("form:nth-child(2) button");
    errorBy = By.css("article div");
    errorCampoBy = By.css("form:nth-child(2) p");

    constructor(driver) {
        this.driver = driver;
    }

    async cerrarSesion() {
        await this.driver.findElement(this.cerrarSesionBy).click();
    }

    async perfil() {
        await this.driver.findElement(this.perfilBy).click()
    }

    async regenerar() {
        await this.driver.findElement(this.regenerarBy).click()
    }

    async confirmar() {
        await this.driver.findElement(this.confirmarBy).click()
    }

    async obtenerMensaje() {
        let mensaje = await this.driver.findElement(this.mensajeBy);
        return await mensaje.getText();
    }

    async cambiarContrasena(contrasena, contrasenaAntigua, contrasenaNueva, contrasenaVerificacion) {
        await this.driver.findElement(this.contrasenaAntiguaBy).sendKeys(contrasena + contrasenaAntigua);
        await this.driver.findElement(this.contrasenaNuevaBy).sendKeys(contrasenaNueva == "1234567890" ? contrasenaNueva : contrasena + contrasenaNueva);
        await this.driver.findElement(this.contrasenaVerificacionBy).sendKeys(contrasenaVerificacion == "1234567890" ? contrasenaVerificacion : contrasena + contrasenaVerificacion);
        await this.driver.findElement(this.cambiarContrasenaBy).click();
    }

    async obtenerError() {
        return await this.driver.findElement(this.errorBy).getText();
    }

    async obtenerErrorCampo(campo) {
        let errores = await this.driver.findElements(this.errorCampoBy);
        return await errores[campo].getText();
    }



}

module.exports = PaginaUsuario;
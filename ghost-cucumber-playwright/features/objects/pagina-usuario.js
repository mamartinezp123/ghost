class PaginaUsuario {

    driver;
    cerrarSesionBy = "css=.dropdown-menu li:nth-child(9) a";
    perfilBy = "css=.dropdown-menu li:nth-child(4) a";
    regenerarBy = "css=form:nth-child(3) button";
    confirmarBy = "css=.modal-footer .gh-btn-red";
    mensajeBy = "css=.green";
    contrasenaAntiguaBy = "css=input[id=user-password-old]";
    contrasenaNuevaBy = "css=input[id=user-password-new]";
    contrasenaVerificacionBy = "css=input[id=user-new-password-verification]";
    cambiarContrasenaBy = "css=form:nth-child(2) button";
    errorBy = "css=.gh-alert-red div";
    errorCampoBy = "css=form:nth-child(2) p";

    constructor(driver) {
        this.driver = driver;
    }

    async cerrarSesion() {
        await this.driver.locator(this.cerrarSesionBy).click();
    }

    async perfil() {
        await this.driver.locator(this.perfilBy).click()
    }

    async regenerar() {
        //await this.driver.executeScript("arguments[0].scrollIntoView();", await this.driver.locator(this.regenerarBy))
        let botones = await this.driver.$$(this.regenerarBy);
        await botones[0].click();
    }

    async confirmar() {
        await this.driver.locator(this.confirmarBy).click()
    }

    async obtenerMensaje() {
        let mensaje = await this.driver.locator(this.mensajeBy);
        return await mensaje.textContent().valueOf();
    }

    async cambiarContrasena(contrasena, contrasenaAntigua, contrasenaNueva, contrasenaVerificacion) {
        //await this.driver.executeScript("arguments[0].scrollIntoView();", await this.driver.locator(this.cambiarContrasenaBy))
        await this.driver.locator(this.contrasenaAntiguaBy).fill(contrasena + contrasenaAntigua);
        await this.driver.locator(this.contrasenaNuevaBy).fill(contrasenaNueva == "1234567890" ? contrasenaNueva : (contrasenaNueva == "" ? contrasenaNueva : contrasena + contrasenaNueva));
        await this.driver.locator(this.contrasenaVerificacionBy).fill(contrasenaVerificacion == "1234567890" ? contrasenaVerificacion : (contrasenaNueva == "" ? contrasenaNueva : contrasena + contrasenaVerificacion));
        await this.driver.locator(this.cambiarContrasenaBy).click();
    }

    async obtenerError() {
        return await this.driver.locator(this.errorBy).textContent();
    }

    async obtenerErrorCampo(campo) {
        let errores = await this.driver.$$(this.errorCampoBy);
        return await errores[campo].textContent();
    }



}

module.exports = PaginaUsuario;
class PaginaUsuario {
    driver;
    cerrarSesionBy = ".dropdown-menu li:nth-child(9) a";
    perfilBy = ".dropdown-menu li:nth-child(4) a";
    regenerarBy = "form:nth-child(3) button";
    confirmarBy = ".modal-footer .gh-btn-red";
    mensajeBy = ".green";
    contrasenaAntiguaBy = "#user-password-old";
    contrasenaNuevaBy = "#user-password-new";
    contrasenaVerificacionBy = "#user-new-password-verification";
    cambiarContrasenaBy = "form#password-reset button.button-change-password";
    errorBy = "article div";
    errorCampoBy = "form:nth-child(2) p";

    constructor(driver) {
        this.driver = driver;
    }

    async cerrarSesion() {
        await this.driver.$(this.cerrarSesionBy).click();
    }

    async perfil() {
        await this.driver.$(this.perfilBy).click();
    }

    async regenerar() {
        await this.driver.$(this.regenerarBy).click();
    }

    async confirmar() {
        await this.driver.$(this.confirmarBy).click();
    }

    async obtenerMensaje() {
        let mensaje = await this.driver.$(this.mensajeBy);
        return await mensaje.getText();
    }

    async cambiarContrasena(
        contrasena,
        contrasenaAntigua,
        contrasenaNueva,
        contrasenaVerificacion
    ) {
        console.log(contrasenaAntigua, contrasenaNueva, contrasenaVerificacion);
        await this.driver
            .$(this.contrasenaAntiguaBy)
            .setValue(contrasena + contrasenaAntigua);
        await this.driver
            .$(this.contrasenaNuevaBy)
            .setValue(contrasenaNueva);
        await this.driver
            .$(this.contrasenaVerificacionBy)
            .setValue(contrasenaVerificacion);
        await this.driver.$(this.cambiarContrasenaBy).click();
    }

    async obtenerError() {
        return await this.driver.$(this.errorBy).getText();
    }

    async obtenerErrorCampo(campo) {
        let errores = await this.driver.$$(this.errorCampoBy);
        return await errores[campo].getText();
    }
}

module.exports = PaginaUsuario;

class PaginaAutenticacion {

    driver;
    identificacionBy = "css=input[name='identification']";
    contrasenaBy = "css=input[name='password']";
    autenticarBy = "css=button[tabindex='3']";
    recuperarContrasenaBy = "css=.forgotten-link";
    errorBy = "css=.main-error";

    constructor(driver) {
        this.driver = driver;
    }

    async autenticacionValida(identificacion, contrasena) {
        await this.driver.locator(this.identificacionBy).fill(identificacion);
        await this.driver.locator(this.contrasenaBy).fill(contrasena);
        await this.driver.locator(this.autenticarBy).click();
    }

    async diligenciarDatosAutenticacion(identificacion, contrasena) {
        await this.driver.locator(this.identificacionBy).fill(identificacion);
        await this.driver.locator(this.contrasenaBy).fill(contrasena);
    }

    async hacerClickEnRecuperarContrasena() {
        await this.driver.locator(this.recuperarContrasenaBy).click();
    }

    async hacerClickEnAutenticar() {
        await this.driver.locator(this.autenticarBy).click();
    }

    async esError() {
        let mensaje = await this.driver.locator(this.errorBy);
        if ((await mensaje.textContent()).trim() == "") {
            return false;
        }
        return true;
    }

}

module.exports = PaginaAutenticacion;
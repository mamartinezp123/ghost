class PaginaAutenticacion {

    driver;
    identificacionBy = "css=input[name='identification']";
    contrasenaBy = "css=input[name='password']";
    autenticarBy = "css=button[tabindex='3']";

    constructor(driver) {
        this.driver = driver;
    }

    async autenticacionValida(identificacion, contrasena) {
        await this.driver.locator(this.identificacionBy).fill(identificacion);
        await this.driver.locator(this.contrasenaBy).fill(contrasena);
        await this.driver.locator(this.autenticarBy).click();
    }

}

module.exports = PaginaAutenticacion;
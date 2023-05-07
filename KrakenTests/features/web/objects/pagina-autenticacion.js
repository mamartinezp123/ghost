const PaginaSitio = require("./pagina-sitio");

class PaginaAutenticacion {

    driver;
    identificacionBy = "input[name='identification']";
    contrasenaBy = "input[name='password']";
    autenticarBy = "button[tabindex='3']";

    constructor(driver) {
        this.driver = driver;
    }

    async autenticacionValida(identificacion, contrasena) {
        await this.driver.$(this.identificacionBy).setValue(identificacion);
        await this.driver.$(this.contrasenaBy).setValue(contrasena);
        await this.driver.$(this.autenticarBy).click();
    }

}

module.exports = PaginaAutenticacion, PaginaSitio;
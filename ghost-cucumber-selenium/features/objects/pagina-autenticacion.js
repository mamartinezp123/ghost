const {By} = require("selenium-webdriver");
const PaginaSitio = require("./pagina-sitio");

class PaginaAutenticacion {

    driver;
    identificacionBy = By.css("input[name='identification']");
    contrasenaBy = By.css("input[name='password']");
    autenticarBy = By.css("button[tabindex='3']");

    constructor(driver) {
        this.driver = driver;
    }

    async autenticacionValida(identificacion, contrasena) {
        await this.driver.findElement(this.identificacionBy).sendKeys(identificacion);
        await this.driver.findElement(this.contrasenaBy).sendKeys(contrasena);
        await this.driver.findElement(this.autenticarBy).click();
        return new PaginaSitio(this.driver);
    }

}

module.exports = PaginaAutenticacion, PaginaSitio;
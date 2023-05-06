const {By} = require("selenium-webdriver");

class PaginaSitio {

    driver;
    publicacionesBy = By.css(".gh-nav-manage li:nth-child(2) a");
    paginasBy = By.css(".gh-nav-manage li:nth-child(3) a");
    etiquetasBy = By.css(".gh-nav-manage li:nth-child(4) a");
    usuarioBy = By.css(".gh-nav-bottom div");

    constructor(driver) {
        this.driver = driver;
    }

    async listarPublicaciones() {
        await this.driver.findElement(this.publicacionesBy).click();
    }

    async listarPaginas() {
        await this.driver.findElement(this.paginasBy).click();
    }

    async listarEtiquetas() {
        await this.driver.findElement(this.etiquetasBy).click();
    }

    async mostrarMenuUsuario() {
        await this.driver.findElement(this.usuarioBy).click();
    }

}

module.exports = PaginaSitio;
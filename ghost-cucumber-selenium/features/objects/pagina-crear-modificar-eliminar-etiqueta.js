const {By} = require("selenium-webdriver");

class PaginaCrearModificarEliminarEtiqueta {

    driver;
    nombreBy = By.css("input[tabindex='1']");
    descripcionBy = By.css("textarea[tabindex='3']");
    crearModificarBy = By.css(".gh-btn-blue");
    etiquetasBy = By.css(".gh-canvas-title a");
    eliminarBy = By.css(".gh-canvas .gh-btn-red");
    confirmarEliminarBy = By.css(".modal-footer .gh-btn-red");
    errorBy = By.css("form p");

    constructor(driver) {
        this.driver = driver;
    }

    async crearOModificarEtiqueta(nombre, descripcion) {
        await this.driver.findElement(this.nombreBy).sendKeys(nombre);
        await this.driver.findElement(this.descripcionBy).sendKeys(descripcion);
        await this.driver.findElement(this.crearModificarBy).click();
    }

    async listarEtiquetas() {
        await this.driver.findElement(this.etiquetasBy).click();
    }

    async hacerClickEnEliminar() {
        await this.driver.findElement(this.eliminarBy).click();
    }

    async hacerClickEnConfirmarEliminar() {
        await this.driver.findElement(this.confirmarEliminarBy).click();
    }

    async obtenerError(){
        let error = await this.driver.findElement(this.errorBy);
        return await error.getText();
    }

}

module.exports = PaginaCrearModificarEliminarEtiqueta;
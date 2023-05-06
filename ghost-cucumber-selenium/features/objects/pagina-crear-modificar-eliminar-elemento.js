const {By} = require("selenium-webdriver");

class PaginaCrearModificarEliminarElemento {

    driver;
    tituloBy = By.css("textarea[tabindex='1']");
    contenidoBy = By.css(".koenig-editor__editor p");
    menuBy = By.css(".gh-publishmenu");
    crearModificarBy = By.css(".gh-publishmenu-button");
    elementosBy = By.css(".gh-editor-header a");
    ajustesBy = By.css(".post-settings");
    eliminarBy = By.css(".gh-btn-hover-red");
    confirmarEliminarBy = By.css(".modal-footer .gh-btn-red");
    errorBy = By.css("article div");

    constructor(driver) {
        this.driver = driver;
    }

    async crearOModificarElemento(titulo, contenido) {
        await this.driver.findElement(this.tituloBy).sendKeys(titulo);
        await this.driver.findElement(this.contenidoBy).sendKeys(contenido);
        await this.driver.findElement(this.menuBy).click();
        await this.driver.findElement(this.crearModificarBy).click();
    }

    async crearOModificarBorradorElemento(titulo, contenido) {
        await this.driver.findElement(this.tituloBy).sendKeys(titulo);
        await this.driver.findElement(this.contenidoBy).sendKeys(contenido);
    }

    async listarElementos() {
        await this.driver.findElement(this.elementosBy).click();
    }

    async hacerClickEnAjustes() {
        await this.driver.findElement(this.ajustesBy).click();
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

module.exports = PaginaCrearModificarEliminarElemento;
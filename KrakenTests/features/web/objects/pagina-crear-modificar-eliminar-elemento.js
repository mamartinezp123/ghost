class PaginaCrearModificarEliminarElemento {

    driver;
    tituloBy = "textarea[tabindex='1']";
    contenidoBy = "div p";
    menuBy = ".gh-publishmenu";
    crearModificarBy = ".gh-publishmenu-button";
    elementosBy = ".gh-editor-header a";
    ajustesBy = "button[title='Settings']";
    eliminarBy = ".settings-menu-delete-button";
    confirmarEliminarBy = ".modal-footer .gh-btn-red";
    errorBy = "article div";
    confirmarCrearBy = ".modal-footer .gh-btn-black";

    constructor(driver) {
        this.driver = driver;
    }

    async crearOModificarElemento(titulo, contenido) {
        await this.driver.$(this.tituloBy).setValue(titulo);
        await this.driver.$(this.contenidoBy).click();
        await this.driver.$(this.contenidoBy).setValue(contenido);
        await this.driver.$(this.menuBy).click();
        await this.driver.$(this.crearModificarBy).click();
    }

    async crearOModificarBorradorElemento(titulo, contenido) {
        await this.driver.$(this.tituloBy).setValue(titulo);
        await this.driver.$(this.contenidoBy).click();
        await this.driver.$(this.contenidoBy).setValue(contenido);
    }

    async listarElementos() {
        await this.driver.$(this.elementosBy).click();
    }

    async hacerClickEnAjustes() {
        await this.driver.$(this.ajustesBy).click();
    }

    async hacerClickEnEliminar() {
        await this.driver.$(this.eliminarBy).scrollIntoView();
        await this.driver.$(this.eliminarBy).click();
    }

    async hacerClickEnConfirmarEliminar() {
        await this.driver.$(this.confirmarEliminarBy).click();
    }

    async obtenerError(){
        let error = await this.driver.$(this.errorBy);
        return await error.getText();
    }

    async hacerClickEnConfirmarCrear() {
        await this.driver.$(this.confirmarCrearBy).click();
    }

}

module.exports = PaginaCrearModificarEliminarElemento;
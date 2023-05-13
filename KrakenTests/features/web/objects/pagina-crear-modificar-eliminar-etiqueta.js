class PaginaCrearModificarEliminarEtiqueta {

    driver;
    nombreBy = "input[tabindex='1']";
    descripcionBy = "textarea[tabindex='3']";
    crearModificarBy = ".view-actions button";
    etiquetasBy = ".gh-canvas-title a";
    eliminarBy = ".gh-canvas .gh-btn-red";
    confirmarEliminarBy = ".modal-footer .gh-btn-red";
    errorBy = "form p";

    constructor(driver) {
        this.driver = driver;
    }

    async crearOModificarEtiqueta(nombre, descripcion) {
        await this.driver.$(this.nombreBy).setValue(nombre);
        await this.driver.$(this.descripcionBy).setValue(descripcion);
        await this.driver.$(this.crearModificarBy).click();
    }

    async listarEtiquetas() {
        await this.driver.$(this.etiquetasBy).click();
    }

    async hacerClickEnEliminar() {
        await this.driver.$(this.eliminarBy).click();
    }

    async hacerClickEnConfirmarEliminar() {
        await this.driver.$(this.confirmarEliminarBy).click();
    }

    async obtenerError(){
        let error = await this.driver.$(this.errorBy);
        return await error.getText();
    }

}

module.exports = PaginaCrearModificarEliminarEtiqueta;
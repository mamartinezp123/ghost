class PaginaCrearModificarEliminarEtiqueta {

    driver;
    nombreBy = "css=input[tabindex='1']";
    descripcionBy = "css=textarea[tabindex='3']";
    crearModificarBy = "css=.gh-btn-blue";
    etiquetasBy = "css=.gh-canvas-title a";
    eliminarBy = "css=.gh-canvas .gh-btn-red";
    confirmarEliminarBy = "css=.modal-footer .gh-btn-red";
    errorBy = "css=form p";

    constructor(driver) {
        this.driver = driver;
    }

    async crearOModificarEtiqueta(nombre, descripcion) {
        await this.driver.locator(this.nombreBy).fill(nombre);
        await this.driver.locator(this.descripcionBy).fill(descripcion);
        await this.driver.locator(this.crearModificarBy).click();
    }

    async listarEtiquetas() {
        await this.driver.locator(this.etiquetasBy).click();
    }

    async hacerClickEnEliminar() {
        //await this.driver.executeScript("arguments[0].scrollIntoView();", await this.driver.locator(this.eliminarBy))
        await this.sleep()
        await this.driver.locator(this.eliminarBy).click();
    }

    async hacerClickEnConfirmarEliminar() {
        await this.driver.locator(this.confirmarEliminarBy).click();
    }

    async obtenerError() {
        let errores = await this.driver.$$(this.errorBy);
        return await errores[0].textContent();
    }

    async sleep() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

}

module.exports = PaginaCrearModificarEliminarEtiqueta;
class PaginaCrearModificarEliminarEtiqueta {

    driver;
    nombreBy = "css=input[tabindex='1']";
    slugBy = "css=input[tabindex='2']";
    descripcionBy = "css=textarea[tabindex='3']";
    crearModificarBy = "css=.view-actions button";
    etiquetasBy = "css=.gh-canvas-title a";
    eliminarBy = "css=.gh-canvas .gh-btn-red";
    confirmarEliminarBy = "css=.modal-footer .gh-btn-red";
    errorBy = "css=form p";

    constructor(driver) {
        this.driver = driver;
    }

    async botonSaveNoExiste() {
        try {
            await this.driver.locator(this.crearModificarBy);
            return true;
        } catch (error) {
            return false;
        }

    }

    async crearOModificarEtiqueta(nombre, descripcion) {
        await this.driver.locator(this.nombreBy).fill(nombre);
        await this.driver.locator(this.descripcionBy).fill(descripcion);
        await this.driver.locator(this.crearModificarBy).click();
    }

    async crearOModificarEtiquetaConSlug(nombre, descripcion, slug) {
        await this.driver.locator(this.nombreBy).fill(nombre);
        await this.driver.locator(this.descripcionBy).fill(descripcion);
        await this.driver.locator(this.slugBy).fill(slug);
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

    async borrarCampoNombre() {
        let campoNombre = await this.driver.locator(this.nombreBy);
        await campoNombre.clear();
    }

    async sleep() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

}

module.exports = PaginaCrearModificarEliminarEtiqueta;
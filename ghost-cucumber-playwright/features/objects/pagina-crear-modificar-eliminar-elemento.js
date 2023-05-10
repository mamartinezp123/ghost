class PaginaCrearModificarEliminarElemento {

    driver;
    tituloBy = "css=textarea[tabindex='1']";
    contenidoBy = "css=.koenig-editor__editor p";
    menuBy = "css=.gh-publishmenu";
    crearModificarBy = "css=.gh-publishmenu-button";
    elementosBy = "css=.gh-editor-header a";
    ajustesBy = "css=button[title='Settings']";
    eliminarBy = "css=.gh-btn-hover-red";
    confirmarCrearBy = "css=.modal-footer .gh-btn-black";
    confirmarEliminarBy = "css=.modal-footer .gh-btn-red";
    errorBy = "css=article > div.gh-alert-content";

    constructor(driver) {
        this.driver = driver;
    }

    async crearOModificarElemento(titulo, contenido) {
        await this.driver.locator(this.tituloBy).fill(titulo);
        await this.driver.locator(this.contenidoBy).fill(contenido);
        await this.driver.locator(this.menuBy).click();
        await this.driver.locator(this.crearModificarBy).click();
    }

    async crearOModificarBorradorElemento(titulo, contenido) {
        await this.driver.locator(this.tituloBy).fill(titulo);
        await this.driver.locator(this.contenidoBy).fill(contenido);
    }

    async listarElementos() {
        await this.driver.locator(this.elementosBy).click();
    }

    async hacerClickEnAjustes() {
            await this.driver.locator(this.ajustesBy).click();
    }

    async hacerClickEnEliminar() {
        //await this.driver.executeScript("arguments[0].scrollIntoView();", await this.driver.locator(this.eliminarBy))
        await this.sleep();
        await this.driver.locator(this.eliminarBy).click();
    }

    async hacerClickEnConfirmarEliminar() {
        await this.driver.locator(this.confirmarEliminarBy).click();
    }

    async hacerClickEnConfirmarCrear() {
        await this.driver.locator(this.confirmarCrearBy).click();
    }

    async obtenerError(){
        let error = await this.driver.locator(this.errorBy);
        return await error.textContent();
    }

    async sleep() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

}

module.exports = PaginaCrearModificarEliminarElemento;
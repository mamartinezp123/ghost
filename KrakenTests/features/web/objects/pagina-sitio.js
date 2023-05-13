class PaginaSitio {
    driver;
    publicacionesBy = ".gh-nav-manage > li:nth-child(2) > a";
    paginasBy = ".gh-nav-manage > li:nth-child(3) > a";
    etiquetasBy = ".gh-nav-manage > li:nth-child(4) > a";
    usuarioBy = ".gh-nav-bottom > div:first-child";

    constructor(driver) {
        this.driver = driver;
    }

    async listarPublicaciones() {
        await this.driver.$(this.publicacionesBy).click();
    }

    async listarPaginas() {
        await this.driver.$(this.paginasBy).click();
    }

    async listarEtiquetas() {
        await this.driver.$(this.etiquetasBy).click();
    }

    async mostrarMenuUsuario() {
        await this.driver.$(this.usuarioBy).click();
    }
}

module.exports = PaginaSitio;

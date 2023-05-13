class PaginaListarElementos {

    driver;
    nuevoElementoBy = ".view-actions a";
    elementosTitulosBy = ".gh-posts-list-item .gh-content-entry-title";
    elementosEstadosBy = ".gh-posts-list-item .gh-content-status-published";

    constructor(driver) {
        this.driver = driver;
    }

    async hacerClickEnNuevoElemento() {
        await this.driver.$(this.nuevoElementoBy).click();
    }

    async obtenerEstadoElementoPorTitulo(titulo) {
        let titulos = await this.driver.$$(this.elementosTitulosBy);
        let estados = await this.driver.$$(this.elementosEstadosBy);
        for (let index = 0; index < titulos.length; index++) {
            if (await titulos[index].getText() == titulo) {
                return await estados[index].getText();
            }
        }
        return "";
    }

    async hacerClickEnElementoPorTitulo(titulo) {
        let titulos = await this.driver.$$(this.elementosTitulosBy);
        for (let index = 0; index < titulos.length; index++) {
            let tituloTmp = await titulos[index].getText();
            if (tituloTmp.trim() == titulo) {
                await titulos[index].click();
                break;
            }
        }
        return "";
    }

    async estaElementoPorTitulo(titulo) {
        let titulos = await this.driver.$$(this.elementosEstadosBy);
        for (let index = 0; index < titulos.length; index++) {
            if (await titulos[index].getText() == titulo) {
                return true;
                break;
            }
        }
        return false;
    }

}

module.exports = PaginaListarElementos;
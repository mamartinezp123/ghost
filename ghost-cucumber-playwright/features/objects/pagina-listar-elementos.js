class PaginaListarElementos {
    driver;
    nuevoElementoBy = "css=.view-actions .gh-btn-green";
    elementosTitulosBy =
        "css=.gh-posts-list-item a .gh-content-entry-title";
    elementosEstadosBy =
        "css=.gh-posts-list-item a .gh-content-status-published";

    constructor(driver) {
        this.driver = driver;
    }

    async hacerClickEnNuevoElemento() {
        await this.driver.locator(this.nuevoElementoBy).click();
    }

    async obtenerEstadoElementoPorTitulo(titulo) {
        let titulos = await this.driver.$$(this.elementosTitulosBy);
        let estados = await this.driver.$$(this.elementosEstadosBy);
        for (let index = 0; index < titulos.length; index++) {
            let tituloTmp = await titulos[index].textContent();
            if (tituloTmp.trim() == titulo) {
                return await estados[index].textContent();
            }
        }
        return "";
    }

    async hacerClickEnElementoPorTitulo(titulo) {
        let titulos = await this.driver.$$(this.elementosTitulosBy);
        for (let index = 0; index < titulos.length; index++) {
            let tituloTmp = await titulos[index].textContent();
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
            if ((await titulos[index].textContent()) == titulo) {
                return true;
                break;
            }
        }
        return false;
    }
}

module.exports = PaginaListarElementos;

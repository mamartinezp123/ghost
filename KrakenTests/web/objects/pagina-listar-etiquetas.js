class PaginaListarEtiquetas {

    driver;
    nuevaEtiquetaBy = ".view-actions .gh-btn-green";
    nombresBy = ".tags-list a h3";

    constructor(driver) {
        this.driver = driver;
    }

    async hacerClickEnNuevaEtiqueta() {
        await this.driver.$(this.nuevaEtiquetaBy).click();
    }

    async estaEtiquetaPorNombre(nombre) {
        let nombres = await this.driver.$$(this.nombresBy);
        for (let index = 0; index < nombres.length; index++) {
            if (await nombres[index].getText() == nombre) {
                return true;
                break;
            }
        }
        return false;
    }

    async haceClickEnEtiquetaPorNombre(nombre) {
        let nombres = await this.driver.$$(this.nombresBy);
        for (let index = 0; index < nombres.length; index++) {
            if (await nombres[index].getText() == nombre) {
                await nombres[index].click();
                break;
            }
        }
    }

}

module.exports = PaginaListarEtiquetas;
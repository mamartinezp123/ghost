class PaginaListarEtiquetas {

    driver;
    nuevaEtiquetaBy = "css=.view-actions a";
    nombresBy = "css=.tags-list a h3";

    constructor(driver) {
        this.driver = driver;
    }

    async hacerClickEnNuevaEtiqueta() {
        await this.driver.locator(this.nuevaEtiquetaBy).click();
    }

    async estaEtiquetaPorNombre(nombre) {
        let nombres = await this.driver.$$(this.nombresBy);
        for (let index = 0; index < nombres.length; index++) {
            let nombreTmp = await nombres[index].textContent();
            if (nombreTmp.trim() == nombre) {
                return true;
                break;
            }
        }
        return false;
    }

    async haceClickEnEtiquetaPorNombre(nombre) {
        let nombres = await this.driver.$$(this.nombresBy);
        for (let index = 0; index < nombres.length; index++) {
            let nombreTmp = await nombres[index].textContent();
            if (nombreTmp.trim() == nombre) {
                await nombres[index].click();
                break;
            }
        }
    }

}

module.exports = PaginaListarEtiquetas;
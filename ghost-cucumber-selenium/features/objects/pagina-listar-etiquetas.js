const {By} = require("selenium-webdriver");

class PaginaListarEtiquetas {

    driver;
    nuevaEtiquetaBy = By.css(".view-actions .gh-btn-green");
    nombresBy = By.css(".tags-list a h3");

    constructor(driver) {
        this.driver = driver;
    }

    async hacerClickEnNuevaEtiqueta() {
        await this.driver.findElement(this.nuevaEtiquetaBy).click();
    }

    async estaEtiquetaPorNombre(nombre) {
        let nombres = await this.driver.findElements(this.nombresBy);
        for (let index = 0; index < nombres.length; index++) {
            if (await nombres[index].getText() == nombre) {
                return true;
                break;
            }
        }
        return false;
    }

    async haceClickEnEtiquetaPorNombre(nombre) {
        let nombres = await this.driver.findElements(this.nombresBy);
        for (let index = 0; index < nombres.length; index++) {
            if (await nombres[index].getText() == nombre) {
                await nombres[index].click();
                break;
            }
        }
    }

}

module.exports = PaginaListarEtiquetas;
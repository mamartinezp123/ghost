const {By} = require("selenium-webdriver");

class PaginaListarElementos {

    driver;
    nuevoElementoBy = By.css(".view-actions a");
    elementosTitulosBy = By.css(".gh-posts-list-item .gh-content-entry-title");
    elementosEstadosBy = By.css(".gh-posts-list-item .gh-content-status-published");

    constructor(driver) {
        this.driver = driver;
    }

    async hacerClickEnNuevoElemento() {
        await this.driver.findElement(this.nuevoElementoBy).click();
    }

    async obtenerEstadoElementoPorTitulo(titulo) {
        let titulos = await this.driver.findElements(this.elementosTitulosBy);
        let estados = await this.driver.findElements(this.elementosEstadosBy);
        for (let index = 0; index < titulos.length; index++) {
            if (await titulos[index].getText() == titulo) {
                return await estados[index].getText();
            }
        }
        return "";
    }

    async hacerClickEnElementoPorTitulo(titulo) {
        let titulos = await this.driver.findElements(this.elementosTitulosBy);
        for (let index = 0; index < titulos.length; index++) {
            if (await titulos[index].getText() == titulo) {
                await titulos[index].click();
                break;
            }
        }
        return "";
    }

    async estaElementoPorTitulo(titulo) {
        let titulos = await this.driver.findElements(this.elementosEstadosBy);
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
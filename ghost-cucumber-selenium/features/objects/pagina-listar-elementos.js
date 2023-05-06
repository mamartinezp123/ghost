const {By} = require("selenium-webdriver");

class PaginaListarElementos {

    driver;
    nuevoElementoBy = By.css(".view-actions .gh-btn-green");
    elementosTitulosCss = ".gh-posts-list-item a:nth-child(#) .gh-content-entry-title";
    elementosEstadosCss = ".gh-posts-list-item a:nth-child(#) .gh-content-status-published";

    constructor(driver) {
        this.driver = driver;
    }

    async hacerClickEnNuevoElemento() {
        await this.driver.findElement(this.nuevoElementoBy).click();
    }

    async obtenerEstadoElementoPorTitulo(titulo, columnaTitulo, columnaEstado) {
        let titulos = await this.driver.findElements(By.css(this.elementosTitulosCss.replace("#", columnaTitulo)));
        let estados = await this.driver.findElements(By.css(this.elementosEstadosCss.replace("#", columnaEstado)));
        for (let index = 0; index < titulos.length; index++) {
            if (await titulos[index].getText() == titulo) {
                return await estados[index].getText();
            }
        }
        return "";
    }

    async hacerClickEnElementoPorTitulo(titulo, columnaTitulo) {
        let titulos = await this.driver.findElements(By.css(this.elementosTitulosCss.replace("#", columnaTitulo)));
        for (let index = 0; index < titulos.length; index++) {
            if (await titulos[index].getText() == titulo) {
                await titulos[index].click();
                break;
            }
        }
        return "";
    }

    async estaElementoPorTitulo(titulo, columnaTitulo) {
        let titulos = await this.driver.findElements(By.css(this.elementosTitulosCss.replace("#", columnaTitulo)));
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
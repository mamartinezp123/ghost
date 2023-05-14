class PaginaSitio {

    driver;
    usuarioBy = ".gh-nav-bottom div div div";
    opcionesBy = ".gh-nav-manage li a";

    constructor(driver) {
        this.driver = driver;
    }

    async hacerClickEnOpcionPorNombre(nombre) {
        let opciones = await this.driver.$$(this.opcionesBy);
        for (let posicion = 0; posicion < opciones.length; posicion++) {
            let nombreTmp = await opciones[posicion].getText();
            if (nombreTmp.trim().includes(nombre)) {
                await opciones[posicion].click();
                break;
            }
        }
    }

    async mostrarMenuUsuario() {
        let elements = await this.driver.$$(this.usuarioBy);
        await elements[0].click();
    }

}

module.exports = PaginaSitio;
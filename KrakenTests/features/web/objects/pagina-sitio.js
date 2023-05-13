class PaginaSitio {

    driver;
<<<<<<< HEAD
    usuarioBy = ".gh-nav-bottom div div div";
    opcionesBy = ".gh-nav-manage li a";
=======
    publicacionesBy = ".gh-nav-manage li:nth-child(2) a";
    paginasBy = ".gh-nav-manage li:nth-child(3) a";
    etiquetasBy = ".gh-nav-manage li:nth-child(4) a";
    usuarioBy = ".gh-nav-bottom div.pe-all";
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

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
const peliculaDTO = require('../dto/pelicula.dto');
const planetaDTO  = require('../dto/planeta.dto');
const vehiculoDTO = require('../dto/vehiculo.dto');
const baseUrl     = 'https://swapi.py4e.com/api';

module.exports = {
    async PeliculasListado() {
        const respuesta = await fetch(`${baseUrl}/films`);
        const peliculas = await respuesta.json();
        const resultado = peliculas.results.map(pelicula => new peliculaDTO(pelicula));

        return resultado;
    },

    async PeliculaPorId(peliculaID) {
        const respuesta = await fetch(`${baseUrl}/films/${peliculaID}/`);
        const pelicula  = await respuesta.json();
        const resultado = new peliculaDTO(pelicula);

        return resultado;
    },

    async ListadoPlanetas(indicePag) {
        const respuesta = await fetch(`${baseUrl}/planets/?page=${indicePag}`);
        const planetas  = await respuesta.json();
        const resultado = planetas.results.map(planetas => new planetaDTO(planetas));

        return resultado;
    },

    async ListadoVehiculos(indicePag) {
        const respuesta = await fetch(`${baseUrl}/vehicles/?page=${indicePag}`);
        const vehiculos = await respuesta.json();
        const resultado = vehiculos.results.map(vehiculos => new vehiculoDTO(vehiculos));

        return resultado;
    }
}
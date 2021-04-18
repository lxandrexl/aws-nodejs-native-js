module.exports = class Planeta {
    constructor(object) {
        this.nombre           = object.name;
        this.periodo_rotacion = object.rotation_period;
        this.periodo_orbital  = object.orbital_period;
        this.diametro         = object.diameter;
        this.clima            = object.climate;
        this.gravedad         = object.gravity;
        this.terreno          = object.terrain;
        this.superficie_agua  = object.surface_water;
        this.poblacion        = object.population;
        this.residentes       = object.residents;
        this.peliculas        = object.films;
        this.creado           = object.created;
        this.editado          = object.edited;
        this.url              = object.url;
    }
    
}
module.exports = class Pelicula {
    constructor(object) {
        this.titulo            = object.title;
        this.episodio_id       = object.episode_id;
        this.rastreo_apertura  = object.opening_crawl;
        this.director          = object.director;
        this.productor         = object.producer;
        this.fecha_lanzamiento = object.release_date;
        this.personajes        = object.characters;
        this.planetas          = object.planets;
        this.naves_estelares   = object.starships;
        this.vehiculos         = object.vehicles;
        this.especies          = object.species;
        this.creado            = object.created;
        this.editado           = object.edited;
        this.url               = object.url;
    }

}
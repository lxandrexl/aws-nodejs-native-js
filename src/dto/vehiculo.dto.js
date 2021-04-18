module.exports = class Vehiculo {
    constructor(object) {
        this.nombre                  = object.name;
        this.modelo                  = object.model;
        this.fabricante              = object.manufacturer;
        this.costo_creditos          = object.cost_in_credits;
        this.largo                   = object.length;
        this.velocidad_max_atmosfera = object.max_atmosphering_speed;
        this.tripulacion             = object.crew;
        this.pasajeros               = object.passengers;
        this.capacidad_carga         = object.cargo_capacity;
        this.consumibles             = object.consumables;
        this.clase_vehiculo          = object.vehicle_class;
        this.pilotos                 = object.pilots;
        this.peliculas               = object.films;
        this.creado                  = object.created;
        this.editado                 = object.edited;
        this.url                     = object.url;
    }

    
}
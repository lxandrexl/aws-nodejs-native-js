module.exports = {
    async crearVehiculo(data) {
        try {
            const params = {
                TableName: VEHICULOS_TABLE,
                Item: data,
                ReturnValues: 'NONE',
            }

            await dynamoDB.put(params).promise(); 

            return 'Vehiculo guardado con exito.';
        } catch (error) {
            return error;
        }
    }
}
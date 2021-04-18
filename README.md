## REQUISITOS.
1. NODEJS 12.x >=
2. Cuenta de AWS

## INSTALACION.
1. Ejecutar 'npm install' (sin comillas)
2. Ejecutar 'npm install -g serverless'
3. Ejecutar sls deploy (Ejecutar en AWS) o tambien ejecutar sls offline (Ejecutar en entorno local)

## GUIA DE USO.
1. Al ejecutar en AWS usar la url base y agregar 'api' al final. (Ejm: https://etm41tl8ua.execute-api.us-east-1.amazonaws.com/dev/api/ ).
2. El API tiene 3 rutas GET y una en POST (Guardar data en la BD).
    2.1 RUTAS: (Los parametros en las urls son alternativas)
        - /peliculas/:id        [GET]
        - /planetas/:index      [GET]
        - /vehiculos/:index     [GET]
        - /vehiculos            [POST]
    2.2 USO: Luego de la url base del API agregar las rutas mencionadas y obtendra los datos de 'SWAPI - The Star Wars API'. (Solo los metodos GET)
    2.3 Para guardar data en vehiculos puede usar la ruta /vehiculos de metodo POST.
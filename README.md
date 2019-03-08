## Como usar

### Ejercicio de grid HTML
En la carpeta html, esta aislado como un proyecto individual,
Es necesario ejecutar los comandos
npm install
npm run build

### Ejercicio scripts benchmark
En la carpeta scripts, estan alojados los dos códigos para obtener valores únicos y las secuencias más largas.

Dichos scripts van acompañados de pruebas unitarias, documentación generada con jsdoc, coverage con nyc de istanbul,
la configuración para vscode para poder depurar, para ejecutarlos debe ingresar a la carpeta scripts y seguir los pasos

1. npm install
2. npm run build

El paso 2 ejecutar pruebas de calidad de código, pruebas unitarias, generara documentación y finalmente transpilara el contenido.

### Proyecto react
Debo hacer enfásis que react no es mi fuerte, pero no tuve mucho problema con la estructura manejada, de hecho me ha encantado y seguro
que me haré espacio para estudiarlo. Mi fuerte es angular, el cual conozco desde la beta 17, hasta la versión 7 actual.

El proyecto react, tiene integración y despligue continuo (devops), el cual esta integrado a través de travis. Me gustaría para estos casos
añadirlos a la fuente para que vean los pasos que se ejecutaron en la integración,

Así mismo el proyecto principal mantiene un CHANGELOG que se obtiene a partir de semantic-release.

La liga donde se genera el deploy de este proyecto es: [http://cuidamimascotatest.s3-website-us-east-1.amazonaws.com/](http://cuidamimascotatest.s3-website-us-east-1.amazonaws.com/)

Me hubiese gustado demostrar conocimientos con otras herramientas, pero por tiempo me fue imposible.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Test de react con typeScript

1 - Hacer una lista de cuidadores con lo que viene en esta [API](https://sheetsu.com/apis/v1.0su/581ad5595d0d) <br>
2 - Integrar redux para mantener la lista de los cuidadores.<br>
3 - Hacer un formulario arriba de la lista para agregar cuidadores: pais, nombre, telefono, email y boton "agregar"<br>
4 - Validar que los datos son correctos en cada input, si son incorrectos mostrar mensaje de error (inline)<br>
5 - Guardar en redux el cuidador nuevo.
6 - Crear un Pull request a este repositorio con la implementación del ejercicio.<br>
Nota: la carpeta html es para el ejercicio siguiente.

## Desarrollas los siguientes problemas de la forma más eficiente posible:

1 - Encontrar la secuencia más larga de números consecutivos en 2 arrays de entrada

Ejemplo:
Input: [1, 2, 5, 3, 7, 8, 9] y [6, 8, 9, 3, 4, 5]
Output: [3, 4, 5] o [7, 8, 9]

2 - Filtrar del array los elementos repetidos.

Ejemplo:
Input: [1, 3, 2, 3, 4, 5, 6, h, s, c, h, 3, 6]
output: [1, 3, 2, 4, 5 ,6, h, s, c]


## Test de html/csss
1 - Usar el template html/index.html<br>
2 - Agregar el css para que quede como estas imagenes.<br>

## Mobile < 600px
![alt text](https://dzwonsemrish7.cloudfront.net/items/3m34141R2v1W0v0L2j0c/test-layout-mobile.png?v=c2b9a871)
<br>

## Desktop > 600px
![alt text](https://dzwonsemrish7.cloudfront.net/items/3X2F3F2R122u402h211u/test-layout-min-600px.png?v=db1be928)


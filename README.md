# ReactCats
# Premisa 
- Recupera un hecho aleatorio de gatos de la primera API
- Recupera la primera palabra del hecho recuperado usando la segunda API
- Muestra una imagen de un gato con la primera palabra 

APIs:
- Facts Random: https://atfact.ninja/fact
- ImageRandom: https://catass.om/cat/says/hello


1. Creamos el proyecto con vite
    npm create vite@latest

    - Al crearlo, puedes seleccionar react para que se haga el proyecto con un template. Lo haremos con vanilla para aprender a pasar el proyecto de vanilla a react

2. Instalamos un plugin  para poder instalar react
    npm install @vitejs/plugin-react -E     

    - Una vez instalado, en el package.json aun no tenemos el react instalado    
    - React es la biblioteca de react y react-dom es para los bindings con el navegador 
    npm install react react-dom -E               

3. Creamos nuestra configuracion de vite     
    - Creamos vite.config.js

4. Modificamos el main.js par crear la entrada de la aplicacion (cambiamos la extension de js a jsx para que funcione con react ). Tambien hemos de cambiar en index.html el source a main.jsx

5. Ahora vamos a instalar el intel

    npm install standard -D

    - Vamos a package.json y añadimos:
        "eslintConfig": {
            "extends": "./node_modules/standard/eslintrc.json"
        }

6.CReamos una carpeta src y creamos app.jsx en donde meteremos todo lo relacionado con la aplicacion
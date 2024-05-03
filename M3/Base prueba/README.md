## paso 1
crear estructura
mkdir -p assets/css assets/img assets/js assets/sass assets/sass/base assets/sass/abstract assets/sass/themes assets/sass/components assets/sass/pages assets/sass/layout assets/sass/vendors && touch .gitignore index.html README.md assets/js/index.js assets/sass/main.scss

## paso 2
en .gitignore poner /node_modules

## paso 3
copiar npm i bootstrap

## paso 3
importar al main el manifiesto de bootstrap
@import "../../node_modules/bootstrap/scss/bootstrap.scss";

## paso 4
traer lo de boostrap al style.scss
sass ./assets/sass/main.scss:./assets/css/style.css

### para cambiar paleta de colores
en vendors de node_modules sass buscar variables 
todo lo $ son variables disponibles 
en linea 300 esta lo que se debe tocar 
se debe comentar //$primary
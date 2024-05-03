# GUIA 
paso a paso para CREAR BOOSTRAP Y SASS
## paso 1 
crear estructura del proyecto
mkdir -p assets/css assets/img assets/js assets/sass assets/sass/base assets/sass/abstract assets/sass/themes assets/sass/components assets/sass/pages assets/sass/layout assets/sass/vendors && touch index.html README.md assets/js/index.js assets/sass/main.scss

## paso 2
crear package.json (archivo administrador de paquetes "npn" para mi proyecto)
npm init -y

## paso 3
Instalar las dependencias necesarias para el proyecto
(Cuando instales tu primera dependencia )
Ej: Utilizando import en el main.scss
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";

## paso 4
Integrar Bootstrap al proyecto
npn instal

<!-- ------------------------------------------------------------------------------------------------------------------------------------------ -->
# GUIA 
paso a paso para crear repositorios con depedencias (manejador de dependencia y la estructura normal del proyecto)
## paso 1 
crear estructura del proyecto
mkdir -p assets/css assets/img assets/js assets/sass assets/sass/base assets/sass/abstract assets/sass/themes assets/sass/components assets/sass/pages assets/sass/layout assets/sass/vendors && touch index.html README.md assets/js/index.js assets/sass/main.scss

## paso 2
crear package.json (archivo administrador de paquetes "npn" para mi proyecto)
npm init -y

## paso 3 
Instalación de dependencia bootstrap
npm i boostrap
PD:Recordar que esto nos crea un archivo pakage.json(NO SE TOCA) y una carpeta node_modules (DE PREFERENCIA NO SE TOCA)

<!-- ------------------------------------------------------------------------------------------------------------------------------------------ -->

## PASO A PASO PARA CUSTUMIZAR EL CÓDIGO FUENTE 

## paso 1 => Incorporo el manifiesto de boostrap en mi proyecto
Importaremos en nuestro main.scss el manifiesto SASS de bootstrap. el mismo seencontrará en:

@import "../../node_modules/bootstrap/scss/bootstrap.scss"; enmi main.scss

NO OLVIDAR HACER EL TAL LINK AL CSS QUE GENERARA BOOTSTRAP EN MI HTML 
REFERENCIAR HOJA DE STYLO 

## PASO 2 => EJECUTAR SASS
sass --watch ./assets/sass/main.scss:./assets/css/style.css
Este comando compilara todo bootstrap en uno solo y lo devolvera en un archivo style.css dentro de mi carpeta assets

## para customizar los valores predeterminado de bootstrap debo modificar los parciales

## MODIFICAR PALETA DE COLORES DEL PARCIAL VARIABLES
para modificar un color de la paleta de colores de bootstrap debo ir al parcial _variables.scss y aprox en la linea 300 cambiar los valores

pd: recomendaciones previas cambia todo lo que necesites andes de compilar con sass
-si necesitas hacer un nuevo cambio en el código fuente de bootstrap no olvides volvera compilar
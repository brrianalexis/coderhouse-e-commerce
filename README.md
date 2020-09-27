# Coderhouse e-commerce

## Setup del proyecto

Una vez clonado el proyecto, correr `npm run setup` o `yarn setup`. Este script se va a encargar de instalar dependencias y buildear el código en modo producción.

### Desarrollo

Para levantar el proyecto en modo desarrollo, basta con correr el comando `npm start` o `yarn start` desde la terminal. Este script corre en paralelo múltiples scripts: setea el entorno de node como desarrollo, observa el CSS por cambios y le da 5 segundos para correr el script `react-scripts start` tradicional.

> Nota: En caso de usar un OS distinto a Windows, es posible que sea necesario editar la línea 21 de `package.json`, cambiando `timeout` por `sleep` para que el proyecto compile.

### Producción

Para buildear el proyecto, correr el comando `npm run build`. Una vez que termina de buildear el código, puede servirse usando (por ejemplo) la librería [serve](https://www.npmjs.com/package/serve) desarrollada por [Vercel](https://vercel.com/).

Con la librería **serve** instalada de manera global, ejecutando el comando `serve` dentro de la carpeta `./build`, va a levantarse un servidor en el puerto 5000 con el proyecto compilado.

## Roadmap

- Agregar integration tests con `testing-library`.
- Agregar e2e tests con `cypress`.

## Librerías adicionales

Para poder usar [Tailwind CSS](https://tailwindcss.com/) en el proyecto, tuve que instalar:

- [tailwindcss](#tailwindcss)
- [postcss](#postcss-cli)
- [purgecss](#purgecss)
- [@fullhuman/postcss-purgecss](#@fullhuman/postcss-purgecss)
- [autoprefixer](#autoprefixer)
- [cssnano](#cssnano)
- [cross-env](#cross-env)
- [npm-run-all](#npm-run-all)

### [tailwindcss](https://github.com/tailwindlabs/tailwindcss)

Tailwind CSS es un framework de CSS basado en utilidades. No provee componentes ya armados, sino que provee clases utilitarias para manejar distintas propiedades de CSS facilmente. Además de esto, viene con un archivo de configuración que exporta un objeto de JS donde podemos definir nuestros propios valores para distintas propiedades, paletas de colores, etc.

Aproveché la oportunidad para probar el framework. Me parece mucho más interesante que esté basado en utilidades y no en componentes. Empuja más la creatividad en lugar del copy-paste, aparte de no volverte loco a la hora de querer darle tu propia impronta a la UI.

### [postcss-cli](https://github.com/postcss/postcss-cli)

PostCSS es una herramienta que permite utilizar plugins escritos en JS para darle superpoderes a tu CSS. En este caso usé 3 plugins (purgecss, autoprefixer y cssnano).

### [purgecss](https://github.com/FullHuman/purgecss)

PurgeCSS analiza el contenido de mis archivos para determinar qué JS de todo el framework de CSS (en mi caso, Tailwind) estoy usando. A la hora de buildear el proyecto, se minimizan las líneas de CSS y se mantienen únicamente las líneas pertinentes a los selectores y classnames que usé.

### [@fullhuman/postcss-purgecss](https://github.com/FullHuman/purgecss/tree/master/packages/postcss-purgecss)

Esto es el plugin de PurgeCSS para PostCSS.

### [autoprefixer](https://github.com/postcss/autoprefixer)

Autoprefixer es un plugin de PostCSS que se encarga de parsear nuestro CSS para agregar prefixes de distintos vendors a nuestras reglas de CSS, basándose en datos de [Can I Use](https://caniuse.com/) para facilitar la compatibilidad cross-browser.

### [cssnano](https://github.com/cssnano/cssnano)

El último plugin de PostCSS que uso. Su finalidad es compactar nuestro CSS.

### [cross-env](https://github.com/kentcdodds/cross-env)

Cross-Env es una herramienta muy popular desarrollada por Kent C. Dodds pensada para setear variables de ambiente con facilidad. En mis scripts, lo uso para determinar si el entorno es de desarrollo o producción.

### [npm-run-all](https://github.com/mysticatea/npm-run-all)

npm-run-all es una herramienta de terminal para poder ejecutar scripts de npm de manera paralela o secuencial. Lo uso para mis scripts de start y build, para setear los ambientes, mirar o buildear el CSS y correr el script start o build de react-scripts.
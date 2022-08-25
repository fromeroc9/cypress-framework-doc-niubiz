# Visión General

## Introducción

Este proyecto abarca a la utilización del framework Cypress para las pruebas e2e, creando producto util y usable para desarrollar diferentes tipos de pruebas sin tener conocimiento técnicos de `Typescript` `Javascript`

El propósito de crear esta la estructura de trabajo es apoyar a los QA cuando empiecen a automatizar, permitiendo la creaciones de scripts para brindar soluciones.

El marco de demostración de Cypress IO creado para enseñar los conceptos básicos del marco a cualquier persona interesada en esta tecnología.

## Cypress vs Selenium

![Cypress vs Selenium](/images/overview/Selenium_vs_Cypress.png)

|   |  Cypress |  Selenium  |
|-----|----|----|
Arquitectura | Ejecute la prueba junto con la aplicación bajo prueba (UAT), dentro del mismo bucle de ejecución. | Las pruebas no se ejecutan junto con la UAT, sino que se comunican mediante el protocolo W3C WebDriver y un controlador de navegador.
Lenguaje Soportado | La prueba solo se puede escribir en JavaScript. | La prueba se puede escribir en todos los lenguajes principales (C#, Java, Python, Ruby, JavaScript).
Waits | Viene con esperas automáticas de fábrica. | Las esperas deben agregarse manualmente.
Grabación de Video | Ofrece grabación de video automática cuando se ejecuta la prueba en modo CLI. | No tiene capacidad de grabación de video incorporada. Pero esto se puede lograr utilizando bibliotecas de terceros. |
Capturas de Pantalla | Toma automáticamente una captura de pantalla cuando falla una prueba. También toma capturas de pantalla en cada paso de ejecución de la prueba. | Las capturas de pantalla deben configurarse manualmente.|
Prueba de Paralelización | Se puede hacer a través del servicio Cypress.io Dashboard (gratis solo para proyectos de código abierto). | Se puede hacer usando Selenium Grid Server, localmente o en una solución en la nube. |
Prueba entre navegadores | Admite navegadores basados en Firefox y Chromium (Electron, Edge, Chrome). No es compatible con Safari. | Admite todos los principales navegadores, incluido Safari. |
Documentación | Excelente | Excelente
Soporte | Respaldado por Cypress.io más comunidad de código abierto. | Respaldado principalmente por la comunidad de código abierto. |
Popularidad | En Aumento | Muy popular 
Soporte Movil | Hibrida | Hibrida, Nativa, PWA
Pruebas Movil | Ionic | Ionic, React Native, Xamarin, Native Script, Flutter, Klotin, Swift

**Otras diferencias**

|   |  Cypress |  Selenium  |
|-----|----|----|
Manejo de Pestañas | No | Si
Acciones especificas (Hover, Frames) | No | Si
Velocidad de Ejecución | Rápida | Menor a la de Cypress |
Smart Locators | No | No
Ejecución Headless | Si | Si

## Framework Técnico

![Framework Tecnico](/images/framework-tecnico.png)

1. Uso de **NODE** para las dependencias y librerías.
2. Uso de **PAGE OBJECT MODEL**, para la reutilización de componentes.
3. Uso de **CUCUMBER (Gherkin)** para la capa usuario y entender el proceso de automatización.
4. Uso del lenguaje de programación **Typescript** para la construcción de los scripts.
5. Uso de **KEYWORD DRIVEN**, para la asignación de diversas acciones dentro de la ejecución.
6. Uso de **EXCEL y JSON** para el manejo de los datos a nivel usuario ejecutor
<!-- 
| Syntax | Description |
|--------|-------------|
Data Driven | Son aquellos en que los datos requeridos para la ejecución de las pruebas
BDD | Utilizan lenguaje natural, no técnico, para la especificación de las pruebas.
Keyword driven | Identifican una serie de palabras clave y luego se asigna cada una de éstas a una serie de acciones​.
Modular | Esta separación nos permite una mejor mantenibilidad y actualización de las pruebas.​
Híbrido | Combinación de diversos plugin para su optimización -->

## Temas

- Pre Procesador webpack, esbuild, browserify
- Cucumber
- BDD
- Modular
- Mocha Hooks
- Testing Api
- Escribir y leer un archivo.
- Page Object Model
- Browser
- Locators
- Fixtures
- Data Driven Testing
- Keyword Driven
- Plugins
- Cypress Custom Commands
- Cypress Assertions
- Dockerfile añadido. (Muy Pronto)
- Jenkinsfile añadido. (Muy Pronto)

## Requisitos previos

Antes de utilizar este proyecto, solo necesita tener Node Js instalado en su computadora.
<https://nodejs.org/es/download/>

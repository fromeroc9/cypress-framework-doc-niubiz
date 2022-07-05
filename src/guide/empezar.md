## Instalación

```bash
# clone project
git clone https://github.com/example/cypress-e2e-framework
# access folder
cd cypress-e2e-framework
# install all dependencies from the root directory
npm install
```

## Ejecución GUI

Ejecución de pruebas a travez de una interfaz web

```bash
# open Cypress App
npm run cypress:open
```

#### Launchpad
![Launchpad](/images/empezar/launchpad.png)

Al abrir Cypress, su viaje de prueba comienza con el Launchpad. El trabajo es guiarlo a través de las decisiones y tareas de configuración que debe completar antes de comenzar a escribir su primera prueba.

#### Próximos Paso

Se debe seleccionar las pruebas **E2E Testing**, después  visualizar diferentes navegadores que se tengan instalado en el ordenador. 

![Choose a Browse](/images/empezar/browser.png)

Para finalizar seleccionar el navegador de preferencia y presionar en **Start E2E Testing in Browser**

## Ejecución CLI
Igual que ejecutar cypress GUI pero con el comando cypress run (argumento CLI)
```bash
cd cypress-e2e-framework
# run cypress tests headlessly
npm run cypress:run

# similar a cypress run --browser <name>
npm run cypress:run --browser chrome

# ejecución especifico de caso de prueba
npm run cypress:run --env TAGS="@<tag>"

# generar reporter
npm run report

# envio de reporte, video, fotos a cypress dashboard
npm run cypress:run --record --key <abc>
# con paralelismo 
npm run cypress:run --record --key <abc> --parallel
```

## Ejecución Secuencial
Igual que ejecutar cypress cli pero con el comando npm-run-all
```bash
#configurado en el proyecto (ejecución de pruebas y generación de reporte)
npm run secuencial

#secuencial
npm-run-all -s cypress:run report
```

## Estructura de Proyecto
La estructura de carpeta está inspirada al `web-automation-framework` de Selenium. Aquellos QA de Tsoft que vieron el framework de selenium podran ver las similudes.
``` 
┌─ cypress
│  ├─ e2e
│  │  ├─ actions
|  |  |  └─ Actions.ts
│  |  ├─ collections
│  |  |  ├─ api
│  |  |  ├─ model
│  |  |  └─ request
|  |  ├─ helpers
|  |  |  └─ Hook.ts
|  |  ├─ locators 
|  |  ├─ pages
|  |  ├─ steps
|  |  └─ utility
│  |  |  ├─ ExcelUtils.ts
│  |  |  ├─ MultipleReports.ts
│  |  |  └─ SimpleReports.ts
│  ├─ resources
|  |  ├─ driver
│  |  |  ├─ linux
│  |  |  ├─ mac
│  |  |  └─ windows
|  |  |     └─ cucumber-json-formatter.exe
|  |  ├─ features
|  |  ├─ fixtures
│  |  |  ├─ data.json
│  |  |  └─ data.xlsx
|  |  └─ interfaces
│  |     └─ DataInterface.ts
│  ├─ support
│  └─ target
|     ├─ generate
|     ├─ reports
|     ├─ runner
|     ├─ screnshots
|     └─ video
├─ .npmrc
├─ cypress.config.ts
├─ package.json
└─ tsconfig.ts
```

#### Global
| Carpeta | Descripción |
| ----------- | ----------- |
| cypress | Carpeta principal del proyecto |
| .npmrc | Deshabilitar package-lock.json localmente |
| cypress.config.ts | Este archivo se utiliza para almacenar cualquier configuración específica de Cypress |
| package.json | Información importante sobre el proyecto así como metadatos funcionales (número de version, dependencias, etc.) |
| tsconfig.ts | Esto le permite escribir sus pruebas en TypeScript. |

#### Cypress/E2E
| Carpeta | Descripción |
| ----------- | ----------- |
actions | Especializado para guardar acciones, el automatizador puede crear nuevas acciones de la API de Cypress como [`Commands`](https://docs.cypress.io/api/commands/and) [`Utilities`](https://docs.cypress.io/api/utilities/$) [`Assertions`](https://docs.cypress.io/guides/references/assertions)
collections | Carpeta especializada para las pruebas de API
helpers | Especializado para los Hook de cypress y carga de datos de excel o json. Tambien apoya a la carga de la pagina a automatizar siempre y cuando sean solo pruebas con interface web
locator | Especializado para almacenar los selectores o locatores de la interfaz grafica estos pueden ser css, text, xpath, html element
pages | Especializado para contener funcionalidad de los steps a desarrollar
steps | Especializado para almacenar los pasos a desarrollar del feature a nivel funcional
utily | Almacena diferentes herramientas necesarios que el framework necesita como lectura de excel, creación de reportes, etc.

#### Cypress/Resource
| Carpeta | Descripción |
| ----------- | ----------- |
driver | Especializado para almacenar el formateador de json para cucumber pre procesador [Descargar](https://github.com/cucumber/json-formatter/releases/)
feature | Especializado para la creación de `.feture` (escenarios en Gherkin)
fixtures | Especializado para almacer los archivos excel y json para la data de prueba
interfaces | Creado para almacenar los locadores o selectores del excel o json

#### Cypress/Target
| Carpeta | Descripción |
| ----------- | ----------- |
generate | Guarda los datos generados por el pre procesador de cucumber `cucumber-messages.ndjson` `cucumber-report.json` 
reports | Almacena los diferentes reportes configurado en el el framework
runner | Encargado de almacenar los resultados de una de la ejecución cli
screenshots | Guarda las captura de pantalla 
video | Guarda los video de toda la ejecución de los feature


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

## Global
| Carpeta | Descripción |
| ----------- | ----------- |
| cypress | Carpeta principal del proyecto |
| .npmrc | Deshabilitar package-lock.json localmente |
| cypress.config.ts | Este archivo se utiliza para almacenar cualquier configuración específica de Cypress |
| package.json | Información importante sobre el proyecto así como metadatos funcionales (número de version, dependencias, etc.) |
| tsconfig.ts | Esto le permite escribir sus pruebas en TypeScript. |
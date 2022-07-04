import{_ as i,r as l,o as t,c,a as e,b as a,d as r,e as s}from"./app.df5843f9.js";var d="/cypress-framework-doc/images/empezar/launchpad.png",o="/cypress-framework-doc/images/empezar/browser.png";const u={},p=r(`<h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalaci\xF3n</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># clone project</span>
<span class="token function">git</span> clone https://github.com/example/cypress-e2e-framework
<span class="token comment"># access folder</span>
<span class="token builtin class-name">cd</span> cypress-e2e-framework
<span class="token comment"># install all dependencies from the root directory</span>
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-gui" tabindex="-1"><a class="header-anchor" href="#ejecucion-gui" aria-hidden="true">#</a> Ejecuci\xF3n GUI</h2><p>Ejecuci\xF3n de pruebas a travez de una interfaz web</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># open Cypress App</span>
<span class="token function">npm</span> run cypress:open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="launchpad" tabindex="-1"><a class="header-anchor" href="#launchpad" aria-hidden="true">#</a> Launchpad</h4><p><img src="`+d+'" alt="Launchpad"></p><p>Al abrir Cypress, su viaje de prueba comienza con el Launchpad. El trabajo es guiarlo a trav\xE9s de las decisiones y tareas de configuraci\xF3n que debe completar antes de comenzar a escribir su primera prueba.</p><h4 id="proximos-paso" tabindex="-1"><a class="header-anchor" href="#proximos-paso" aria-hidden="true">#</a> Pr\xF3ximos Paso</h4><p>Se debe seleccionar las pruebas <strong>E2E Testing</strong>, despu\xE9s visualizar diferentes navegadores que se tengan instalado en el ordenador.</p><p><img src="'+o+`" alt="Choose a Browse"></p><p>Para finalizar seleccionar el navegador de preferencia y presionar en <strong>Start E2E Testing in Browser</strong></p><h2 id="ejecucion-cli" tabindex="-1"><a class="header-anchor" href="#ejecucion-cli" aria-hidden="true">#</a> Ejecuci\xF3n CLI</h2><p>Igual que ejecutar cypress GUI pero con el comando cypress run (argumento CLI)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> cypress-e2e-framework
<span class="token comment"># run cypress tests headlessly</span>
<span class="token function">npm</span> run cypress:run

<span class="token comment"># similar a cypress run --browser &lt;name&gt;</span>
<span class="token function">npm</span> run cypress:run --browser chrome

<span class="token comment"># ejecuci\xF3n especifico de caso de prueba</span>
<span class="token function">npm</span> run cypress:run --env <span class="token assign-left variable">TAGS</span><span class="token operator">=</span><span class="token string">&quot;@&lt;tag&gt;&quot;</span>

<span class="token comment"># generar reporter</span>
<span class="token function">npm</span> run report

<span class="token comment"># envio de reporte, video, fotos a cypress dashboard</span>
<span class="token function">npm</span> run cypress:run --record --key <span class="token operator">&lt;</span>abc<span class="token operator">&gt;</span>
<span class="token comment"># con paralelismo </span>
<span class="token function">npm</span> run cypress:run --record --key <span class="token operator">&lt;</span>abc<span class="token operator">&gt;</span> --parallel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-secuencial" tabindex="-1"><a class="header-anchor" href="#ejecucion-secuencial" aria-hidden="true">#</a> Ejecuci\xF3n Secuencial</h2><p>Igual que ejecutar cypress cli pero con el comando npm-run-all</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#configurado en el proyecto (ejecuci\xF3n de pruebas y generaci\xF3n de reporte)</span>
<span class="token function">npm</span> run secuencial

<span class="token comment">#secuencial</span>
npm-run-all -s cypress:run report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="estructura-de-proyecto" tabindex="-1"><a class="header-anchor" href="#estructura-de-proyecto" aria-hidden="true">#</a> Estructura de Proyecto</h2><p>La estructura de carpeta est\xE1 inspirada al <code>web-automation-framework</code> de Selenium. Aquellos QA de Tsoft que vieron el framework de selenium podran ver las similudes.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u250C\u2500 cypress
\u2502  \u251C\u2500 e2e
\u2502  \u2502  \u251C\u2500 actions
|  |  |  \u2514\u2500 Actions.ts
\u2502  |  \u251C\u2500 collections
\u2502  |  |  \u251C\u2500 api
\u2502  |  |  \u251C\u2500 model
\u2502  |  |  \u2514\u2500 request
|  |  \u251C\u2500 helpers
|  |  |  \u2514\u2500 Hook.ts
|  |  \u251C\u2500 locators 
|  |  \u251C\u2500 pages
|  |  \u251C\u2500 steps
|  |  \u2514\u2500 utility
\u2502  |  |  \u251C\u2500 ExcelUtils.ts
\u2502  |  |  \u251C\u2500 MultipleReports.ts
\u2502  |  |  \u2514\u2500 SimpleReports.ts
\u2502  \u251C\u2500 resources
|  |  \u251C\u2500 driver
\u2502  |  |  \u251C\u2500 linux
\u2502  |  |  \u251C\u2500 mac
\u2502  |  |  \u2514\u2500 windows
|  |  |     \u2514\u2500 cucumber-json-formatter.exe
|  |  \u251C\u2500 features
|  |  \u251C\u2500 fixtures
\u2502  |  |  \u251C\u2500 data.json
\u2502  |  |  \u2514\u2500 data.xlsx
|  |  \u2514\u2500 interfaces
\u2502  |     \u2514\u2500 DataInterface.ts
\u2502  \u251C\u2500 support
\u2502  \u2514\u2500 target
|     \u251C\u2500 generate
|     \u251C\u2500 reports
|     \u251C\u2500 runner
|     \u251C\u2500 screnshots
|     \u2514\u2500 video
\u251C\u2500 .npmrc
\u251C\u2500 cypress.config.ts
\u251C\u2500 package.json
\u2514\u2500 tsconfig.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>cypress</td><td>Carpeta principal del proyecto</td></tr><tr><td>.npmrc</td><td>Deshabilitar package-lock.json localmente</td></tr><tr><td>cypress.config.ts</td><td>Este archivo se utiliza para almacenar cualquier configuraci\xF3n espec\xEDfica de Cypress</td></tr><tr><td>package.json</td><td>Informaci\xF3n importante sobre el proyecto as\xED como metadatos funcionales (n\xFAmero de version, dependencias, etc.)</td></tr><tr><td>tsconfig.ts</td><td>Esto le permite escribir sus pruebas en TypeScript.</td></tr></tbody></table><h4 id="cypress-e2e" tabindex="-1"><a class="header-anchor" href="#cypress-e2e" aria-hidden="true">#</a> Cypress/E2E</h4>`,24),m=e("thead",null,[e("tr",null,[e("th",null,"Carpeta"),e("th",null,"Descripci\xF3n")])],-1),v=e("td",null,"actions",-1),h=s("Especializado para guardar acciones, el automatizador puede crear nuevas acciones de la API de Cypress como "),b={href:"https://docs.cypress.io/api/commands/and",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"Commands",-1),g=s(),_={href:"https://docs.cypress.io/api/utilities/$",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"Utilities",-1),k=s(),x={href:"https://docs.cypress.io/guides/references/assertions",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"Assertions",-1),E=e("tr",null,[e("td",null,"collections"),e("td",null,"Carpeta especializada para las pruebas de API")],-1),z=e("tr",null,[e("td",null,"helpers"),e("td",null,"Especializado para los Hook de cypress y carga de datos de excel o json. Tambien apoya a la carga de la pagina a automatizar siempre y cuando sean solo pruebas con interface web")],-1),w=e("tr",null,[e("td",null,"locator"),e("td",null,"Especializado para almacenar los selectores o locatores de la interfaz grafica estos pueden ser css, text, xpath, html element")],-1),C=e("tr",null,[e("td",null,"pages"),e("td",null,"Especializado para contener funcionalidad de los steps a desarrollar")],-1),I=e("tr",null,[e("td",null,"steps"),e("td",null,"Especializado para almacenar los pasos a desarrollar del feature a nivel funcional")],-1),q=e("tr",null,[e("td",null,"utily"),e("td",null,"Almacena diferentes herramientas necesarios que el framework necesita como lectura de excel, creaci\xF3n de reportes, etc.")],-1),A=e("h4",{id:"cypress-resource",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cypress-resource","aria-hidden":"true"},"#"),s(" Cypress/Resource")],-1),G=e("thead",null,[e("tr",null,[e("th",null,"Carpeta"),e("th",null,"Descripci\xF3n")])],-1),L=e("td",null,"driver",-1),S=s("Especializado para almacenar el formateador de json para cucumber pre procesador "),T={href:"https://github.com/cucumber/json-formatter/releases/",target:"_blank",rel:"noopener noreferrer"},D=s("Descargar"),P=e("tr",null,[e("td",null,"feature"),e("td",null,[s("Especializado para la creaci\xF3n de "),e("code",null,".feture"),s(" (escenarios en Gherkin)")])],-1),B=e("tr",null,[e("td",null,"fixtures"),e("td",null,"Especializado para almacer los archivos excel y json para la data de prueba")],-1),N=e("tr",null,[e("td",null,"interfaces"),e("td",null,"Creado para almacenar los locadores o selectores del excel o json")],-1),U=r('<h4 id="cypress-target" tabindex="-1"><a class="header-anchor" href="#cypress-target" aria-hidden="true">#</a> Cypress/Target</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>generate</td><td>Guarda los datos generados por el pre procesador de cucumber <code>cucumber-messages.ndjson</code> <code>cucumber-report.json</code></td></tr><tr><td>reports</td><td>Almacena los diferentes reportes configurado en el el framework</td></tr><tr><td>runner</td><td>Encargado de almacenar los resultados de una de la ejecuci\xF3n cli</td></tr><tr><td>screenshots</td><td>Guarda las captura de pantalla</td></tr><tr><td>video</td><td>Guarda los video de toda la ejecuci\xF3n de los feature</td></tr></tbody></table>',2);function V(R,H){const n=l("ExternalLinkIcon");return t(),c("div",null,[p,e("table",null,[m,e("tbody",null,[e("tr",null,[v,e("td",null,[h,e("a",b,[f,a(n)]),g,e("a",_,[y,a(n)]),k,e("a",x,[j,a(n)])])]),E,z,w,C,I,q])]),A,e("table",null,[G,e("tbody",null,[e("tr",null,[L,e("td",null,[S,e("a",T,[D,a(n)])])]),P,B,N])]),U])}var Q=i(u,[["render",V],["__file","empezar.html.vue"]]);export{Q as default};

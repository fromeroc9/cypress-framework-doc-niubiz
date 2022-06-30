import{_ as e,o as n,c as s,d as a}from"./app.f28569fd.js";const i={},r=a(`<h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalaci\xF3n</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># clone project</span>
<span class="token function">git</span> clone https://github.com/example/cypress-e2e-framework
<span class="token comment"># access folder</span>
<span class="token builtin class-name">cd</span> cypress-e2e-framework
<span class="token comment"># install all dependencies from the root directory</span>
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-gui" tabindex="-1"><a class="header-anchor" href="#ejecucion-gui" aria-hidden="true">#</a> Ejecuci\xF3n GUI</h2><p>Ejecuci\xF3n de pruebas a travez de una interfaz web</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># open Cypress App</span>
<span class="token function">npm</span> run cypress:open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-cli" tabindex="-1"><a class="header-anchor" href="#ejecucion-cli" aria-hidden="true">#</a> Ejecuci\xF3n CLI</h2><p>Igual que ejecutar cypress GUI pero con el comando cypress run (argumento CLI)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> cypress-e2e-framework
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h2><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>cypress</td><td>Carpeta principal del proyecto</td></tr><tr><td>.npmrc</td><td>Deshabilitar package-lock.json localmente</td></tr><tr><td>cypress.config.ts</td><td>Este archivo se utiliza para almacenar cualquier configuraci\xF3n espec\xEDfica de Cypress</td></tr><tr><td>package.json</td><td>Informaci\xF3n importante sobre el proyecto as\xED como metadatos funcionales (n\xFAmero de version, dependencias, etc.)</td></tr><tr><td>tsconfig.ts</td><td>Esto le permite escribir sus pruebas en TypeScript.</td></tr></tbody></table>`,16),c=[r];function l(d,t){return n(),s("div",null,c)}var u=e(i,[["render",l],["__file","empezar.html.vue"]]);export{u as default};

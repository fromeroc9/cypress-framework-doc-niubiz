import{_ as r,r as o,o as d,c as i,a as e,b as s,d as n,e as a}from"./app.bd55cb1d.js";var c="/cypress-framework-doc-niubiz/images/overview/Selenium_vs_Cypress.png",l="/cypress-framework-doc-niubiz/images/framework-tecnico.png";const p={},u=n('<h1 id="vision-general" tabindex="-1"><a class="header-anchor" href="#vision-general" aria-hidden="true">#</a> Visi\xF3n General</h1><h2 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introducci\xF3n</h2><p>Este proyecto abarca a la utilizaci\xF3n del framework Cypress para las pruebas e2e, creando producto util y usable para desarrollar diferentes tipos de pruebas sin tener conocimiento t\xE9cnicos de <code>Typescript</code> <code>Javascript</code></p><p>El prop\xF3sito de crear esta la estructura de trabajo es apoyar a los QA cuando empiecen a automatizar, permitiendo la creaciones de scripts para brindar soluciones.</p><p>El marco de demostraci\xF3n de Cypress IO creado para ense\xF1ar los conceptos b\xE1sicos del marco a cualquier persona interesada en esta tecnolog\xEDa.</p><h2 id="cypress-vs-selenium" tabindex="-1"><a class="header-anchor" href="#cypress-vs-selenium" aria-hidden="true">#</a> Cypress vs Selenium</h2><p><img src="'+c+'" alt="Cypress vs Selenium"></p><table><thead><tr><th></th><th>Cypress</th><th>Selenium</th></tr></thead><tbody><tr><td>Arquitectura</td><td>Ejecute la prueba junto con la aplicaci\xF3n bajo prueba (UAT), dentro del mismo bucle de ejecuci\xF3n.</td><td>Las pruebas no se ejecutan junto con la UAT, sino que se comunican mediante el protocolo W3C WebDriver y un controlador de navegador.</td></tr><tr><td>Lenguaje Soportado</td><td>La prueba solo se puede escribir en JavaScript.</td><td>La prueba se puede escribir en todos los lenguajes principales (C#, Java, Python, Ruby, JavaScript).</td></tr><tr><td>Waits</td><td>Viene con esperas autom\xE1ticas de f\xE1brica.</td><td>Las esperas deben agregarse manualmente.</td></tr><tr><td>Grabaci\xF3n de Video</td><td>Ofrece grabaci\xF3n de video autom\xE1tica cuando se ejecuta la prueba en modo CLI.</td><td>No tiene capacidad de grabaci\xF3n de video incorporada. Pero esto se puede lograr utilizando bibliotecas de terceros.</td></tr><tr><td>Capturas de Pantalla</td><td>Toma autom\xE1ticamente una captura de pantalla cuando falla una prueba. Tambi\xE9n toma capturas de pantalla en cada paso de ejecuci\xF3n de la prueba.</td><td>Las capturas de pantalla deben configurarse manualmente.</td></tr><tr><td>Prueba de Paralelizaci\xF3n</td><td>Se puede hacer a trav\xE9s del servicio Cypress.io Dashboard (gratis solo para proyectos de c\xF3digo abierto).</td><td>Se puede hacer usando Selenium Grid Server, localmente o en una soluci\xF3n en la nube.</td></tr><tr><td>Prueba entre navegadores</td><td>Admite navegadores basados en Firefox y Chromium (Electron, Edge, Chrome). No es compatible con Safari.</td><td>Admite todos los principales navegadores, incluido Safari.</td></tr><tr><td>Documentaci\xF3n</td><td>Excelente</td><td>Excelente</td></tr><tr><td>Soporte</td><td>Respaldado por Cypress.io m\xE1s comunidad de c\xF3digo abierto.</td><td>Respaldado principalmente por la comunidad de c\xF3digo abierto.</td></tr><tr><td>Popularidad</td><td>En Aumento</td><td>Muy popular</td></tr><tr><td>Soporte Movil</td><td>Hibrida</td><td>Hibrida, Nativa, PWA</td></tr><tr><td>Pruebas Movil</td><td>Ionic</td><td>Ionic, React Native, Xamarin, Native Script, Flutter, Klotin, Swift</td></tr></tbody></table><p><strong>Otras diferencias</strong></p><table><thead><tr><th></th><th>Cypress</th><th>Selenium</th></tr></thead><tbody><tr><td>Manejo de Pesta\xF1as</td><td>No</td><td>Si</td></tr><tr><td>Acciones especificas (Hover, Frames)</td><td>No</td><td>Si</td></tr><tr><td>Velocidad de Ejecuci\xF3n</td><td>R\xE1pida</td><td>Menor a la de Cypress</td></tr><tr><td>Smart Locators</td><td>No</td><td>No</td></tr><tr><td>Ejecuci\xF3n Headless</td><td>Si</td><td>Si</td></tr></tbody></table><h2 id="framework-tecnico" tabindex="-1"><a class="header-anchor" href="#framework-tecnico" aria-hidden="true">#</a> Framework T\xE9cnico</h2><p><img src="'+l+'" alt="Framework Tecnico"></p><ol><li>Uso de <strong>NODE</strong> para las dependencias y librer\xEDas.</li><li>Uso de <strong>PAGE OBJECT MODEL</strong>, para la reutilizaci\xF3n de componentes.</li><li>Uso de <strong>CUCUMBER (Gherkin)</strong> para la capa usuario y entender el proceso de automatizaci\xF3n.</li><li>Uso del lenguaje de programaci\xF3n <strong>Typescript</strong> para la construcci\xF3n de los scripts.</li><li>Uso de <strong>KEYWORD DRIVEN</strong>, para la asignaci\xF3n de diversas acciones dentro de la ejecuci\xF3n.</li><li>Uso de <strong>EXCEL y JSON</strong> para el manejo de los datos a nivel usuario ejecutor</li></ol><h2 id="temas" tabindex="-1"><a class="header-anchor" href="#temas" aria-hidden="true">#</a> Temas</h2><ul><li>Pre Procesador webpack, esbuild, browserify</li><li>Cucumber</li><li>BDD</li><li>Modular</li><li>Mocha Hooks</li><li>Testing Api</li><li>Escribir y leer un archivo.</li><li>Page Object Model</li><li>Browser</li><li>Locators</li><li>Fixtures</li><li>Data Driven Testing</li><li>Keyword Driven</li><li>Plugins</li><li>Cypress Custom Commands</li><li>Cypress Assertions</li><li>Dockerfile a\xF1adido. (Muy Pronto)</li><li>Jenkinsfile a\xF1adido. (Muy Pronto)</li></ul><h2 id="requisitos-previos" tabindex="-1"><a class="header-anchor" href="#requisitos-previos" aria-hidden="true">#</a> Requisitos previos</h2>',16),m=a("Antes de utilizar este proyecto, solo necesita tener Node Js instalado en su computadora. "),h={href:"https://nodejs.org/es/download/",target:"_blank",rel:"noopener noreferrer"},b=a("https://nodejs.org/es/download/");function g(v,y){const t=o("ExternalLinkIcon");return d(),i("div",null,[u,e("p",null,[m,e("a",h,[b,s(t)])])])}var _=r(p,[["render",g],["__file","overview.html.vue"]]);export{_ as default};
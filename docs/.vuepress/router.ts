export let sidebar =
{
    '/doc/': [
        {
            text: 'Overview',
            children: [
                { text: 'Introducción', link: 'overview.md/#introduccion' },
                { text: 'Framework Técnico', link: 'overview.md/#framework-tecnico' },
                { text: 'Temas', link : 'overview.md/#temas'},
                { text: 'Requisitos previos', link : 'overview.md/#requisitos-previos' },
            ]
        },
        {
            text: 'Empezar',
            children: [
                { text: 'Instalación', link: 'empezar.md/#instalacion' },
                { text: 'Ejecución GUI', link: 'empezar.md/#ejecucion-gui' },
                { text: 'Ejecución CLI', link: 'empezar.md/#ejecucion-cli' },
                { text: 'Ejecución Secuencial', link: 'empezar.md/#ejecucion-secuencial' },
                { text: 'Estructura de Proyecto', link: 'empezar.md/#estructura-de-proyecto' },
            ]
        },
        {
            text: 'Pruebas e2e',
            children: [
                { text: 'Primera Prueba e2e', link: '#primera' },
                { text: 'Probar la aplicación', link: '#abrir' },
            ],
        },
        { 
            text: 'Comandos', 
            children: [
                { text: 'Actions', link: 'comandos.md/#actions' },
                // { text: 'Probar la aplicación', link: '#abrir' },
            ]
        }
    ],
    '/empezar/' : [
        ''
    ]
}
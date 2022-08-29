# Documentación

## Términos y Definiciones

1. **AAPg:** Arquitectura de Automatización de Prueba Genérica
2. **SAP:** Sistema de Automatización de Pruebas
3. **SSP:** Sistema Sujeto a Prueba (PAGO WEB).
4. **GUI:** Interfaz Gráfica de Usuario
5. **Archivo “.feature”:**  Archivo que contiene el paso a paso del escenario de prueba. La descripción del paso a paso se desarrolla haciendo el uso de la herramienta Cucumber.
6. **Escenario de Prueba:** Para los casos de prueba del aplicativo Pago Web / Pago App / Tokenización, cada escenario de prueba dentro del feature representa a un caso de prueba.
7. **Aplicativo Conocido:** Aplicativo el cual tiene algunos casos de prueba ya automatizados.
8. **Aplicativo Nuevo:** Aplicativo el cual no tiene casos de prueba automatizados.

## Framework de Automatización

El framework propuesto para Niubiz se desarrolla para todo el ciclo de automatización de pruebas funcionales. Este framework contempla actualmente (5) cinco de los (7) siete componentes, dejando (2) dos para mejora continua:

![Framework de Automatización](/images/documentacion/framework-tecnico.png)

### Gobierno de TI

El framework define la participación de la automatización de pruebas en cada una de las tres capas de gobierno de TI en las organizaciones: (a) A Nivel Estratégico, (b) De Gobierno, y (c) Operativo.

1. Nivel Estratégico. La automatización de pruebas de software es una estrategia operativa alineada a objetivos estratégicos de la gerencia de TI. El fin de este objetivo estratégico es la reducción de costos, asimismo, optimizar el modelo de calidad de software y validación de los sistemas.
2. Nivel de Gobierno.  La automatización de prueba se encuentra bajo el gobierno de una estructura de gestión propuesta por NIUBIZ.
3. Nivel Operativo. Se cuenta con una (AAP) Arquitectura de Automatización de Pruebas estándar definida.

### Roles de Automatización

El framework de automatización plantea 3 roles que se manejan de forma colaborativa:

- Jefe de servicio. Es el encargado de realizar el rol de facilitador así mismo de monitorear el desarrollo eficiente de los proyectos, pilotos o servicios de automatización.
- Líder de automatización. Es el facilitador técnico y de estrategia, quien tendrá a cargo la centralización de las prácticas de automatización de soporte y de proyectos waterfall y/o ágiles, para así llevar una adecuada administración de los mismos; lo que permitirá identificar puntos de mejora continua, tanto en los procesos, así como también de impartir entrenamiento y guía a los miembros del equipo.
- Automatizador. Encargado de realizar las actividades operativas tales como administración y soporte de la infraestructura, desarrollo, mantenimiento y ejecución de los scripts de automatización, entre otros.
- Analista QA. Encargado de realizar las transferencias funcionales para futuros desarrollos en automatización, además de ejecutar los scripts automatizados.

### Cobertura de Automatización

El framework técnico en combinación con diferentes herramientas de automatización de pruebas, permite la cobertura de pruebas en aplicativos **SERVICIOS / WEB:**

|                  | Herramientas definidas      |
|------------------|-----------------------------|
| Aplicaciones Web | Selenium / WebDriver / JAVA |
| Servicios | Selenium / HttpClient / Java |

### Framework Técnico

El proceso de pruebas de automatización se basa en el marco técnico de trabajo híbrido para los proyectos en cascada, combinando hasta cuatro patrones de automatización, según aplique en cada caso: (1) Modular, (2) Liberías comunes, (3) Datos de Pruebas, y (4) Palabras claves. El beneficio de esta configuración es que aprovecha las funcionalidades de todos los tipos de marcos asociados. Así mismo, para proyectos ágiles se integra un patrón adicional, BDD, en el cual se contemplan los (0) features (escenarios de prueba) como punto de partida.

Este framework permite los siguientes beneficios:

- Mantenimiento eficiente debido al diseño modular y librerías de funciones comunes.
- Escalabilidad, presenta desacoplamiento, es fácil el adicionar componentes para mayor cobertura de los casos de pruebas automatizados.
- Flexibilidad, permite ejecutar diferentes casos de pruebas a partir de diferentes datos de entrada.
- Usabilidad, a través de palabras podemos lograr comportamientos distintos sin tener que ingresar al código.

Adicionalmente, para el caso de proyectos ágiles se añadirá BDD, lo caul permite sumar a los beneficios lo siguiente:

- Fácil entendimiento, permite incluir en la automatización el escenario de manera escrita (lenguaje Gherkin) lo que permite que cualquier rol entienda el comportamiento que tendrá el escenario automatizado al ejecutarse.

### Capa de Soporte de TI

El framework plantea los siguientes servicios como soporte de TI base:

- Las herramientas correspondientes a la arquitectura de la automatización reciben soporte técnico y mantenimiento oportuno.
- Gestión de pruebas automatizadas lleva un control del inventario de los casos de pruebas automatizados y el inventario de las evidencias generadas.
- Los reporte e indicadores que son generados al finalizar las ejecuciones, permiten llevar seguimiento del desarrollo y mantenimiento de scripts.

### Administración de Scripts

El framework brinda soporte de administración técnico de los scripts de automatización con el Control de repositorio y Mantenimiento de scripts.

1. Para asegurar un mantenimiento correcto, el FW Técnico debe considerar lo siguiente:

    - Debe ser MODULAR
    - Debe ser ESCALABLE
    - Debe ser COMPRENSIBLE (Documentado)
    - Debe ser CONFIABLE
    - Debe ser VERIFICABLE

2. Tipos de Mantenimiento:

    - Preventivo: se realizan cambios para mejorar la operación.
    - Correctivo: cambios para corregir fallos en el Sistema de Automatización de Pruebas ante algún cambio del SSP.
    - Perfectivo: se establecen cambios para optimizar.
    - Adaptativo: se hacen cambios para admitir nuevas aplicaciones

![Mantenimiento de Script](/images/documentacion/mantenimiento_script.png)

1. Un mantenimiento correctivo se detecta al ejecutar un script y este falle por causas de algún cambio en el SSP.
2. Se realiza una inspección de código para detectar el módulo / clase / objeto(s) afectado(s).
3. Se prepara y envía la estimación con el esfuerzo por realizar el mantenimiento.
4. El cliente aprueba el esfuerzo y se procede con los cambios.
5. El equipo de automatización realiza los cambios hasta tener una nueva versión que ejecute sin fallos.
6. Se actualiza el código en el repositorio centralizado.
7. Se realiza una prueba para confirmar los cambios desde el repositorio central.
8. Se dispone los scripts modificados para su ejecución.

### Entrega Continua

El framework está preparado para integrarse al proceso de entrega continua que posea NIUBIZ, tanto para la Ejecución de automatizada y Regresión continua.

## Gobierno de TI

La estrategia de automatización que plantea el gobierno de TI es la siguiente:

![Gobierno TIs](/images/documentacion/gobierno1.png)

### 1. Estrategia

Los requerimientos de automatización serán identificados por NIUBIZ (Equipo de Calidad).  Los Analistas de QA transfieren información acerca de los casos de prueba o flujos que se proponen automatizar. Esta información pasa por un análisis de factibilidad, el cual, será descrito más adelante. El análisis de factibilidad asigna una clasificación y un puntaje a los flujos o casos de prueba, permitiendo determinar los flujos óptimos a ser automatizados.  
Cuando se tenga los flujos ya identificados se realiza una Estimación Alto nivel, la cual permite la elaboración del Plan de Automatización.

![Estrategias](/images/documentacion/gobierno2.png)

Cuando el plan de automatización es aprobado por NIUBIZ, se da inicio a la etapa de desarrollo.

Análisis de Factibilidad:
Las actividades a realizar dentro de esta etapa son las siguientes:

1. **Actividad: Análisis Nivel 1**

**Objetivo**

- Identificar los candidatos que sean viables funcionalmente/técnicamente.
- Asignar un nivel de complejidad

**Herramientas usadas**

- Matriz de Análisis Factibilidad (ANEXO10.1 – HOJA Análisis Nivel 1)
- Reuniones con los Analistas QA asignados / personas que tengan el know-how del SSP a ser automatizado.

2. **Actividad: Análisis Nivel 2**

**Objetivo:**

- Asignar puntuación a los candidatos viables, en base a los siguientes criterios: Valor de Caso de Prueba, Riesgo de Negocio, Costo-Eficiencia e Historial.

**Herramientas usadas:**

- Matriz de Análisis Factibilidad (ANEXO 10.1 – HOJA Análisis Nivel 2)
- Reuniones con los Analistas QA asignados.
Al finalizar los análisis de Nivel 1 y Nivel 2, se procede a realizar la estimación (ANEXO: Plantilla - Matriz de Estimación Alto Nivel)

### 2. Desarrollo

Es una etapa cíclica que consiste en desarrollo y pruebas. Se realiza el desarrollo de los flujos identificadas y posteriormente se realiza las pruebas de los mismos. 
Cuando los scripts ya se encuentren verificados, se realiza el despliegue en el repositorio.
Finalmente, los scripts estarán disponibles para las ejecuciones programadas o a demanda.

### 3. Mantenimiento

Los scripts que necesiten un mantenimiento, serán identificados por NIUBIZ o por el equipo de TSOFT. Luego se hará de conocimiento al cliente para su aprobación y priorización dentro del backlog del equipo.

### 4. Soporte y Administración

Durante todo el proceso de atención de automatización se cuenta con el soporte por el equipo de TSOFT.

## Administración de Script

### Acerca del repositorio

#### Datos del repositorio

Nombre Repositorio:    test-automation
Acceso al repositorio: TBD 

#### Características del repositorio

Existe solo un repositorio en donde almacena un proyecto java con la estructura maven. Este proyecto incluye escenarios para los diferentes aplicativos de Niubiz.

1. Accesos: Escritura y Lectura:  Desarrolladores de test
2. Estrategia de Ramas:

![Estrategias de Ramas](/images/documentacion/estrategias.png)

### Dinámica de trabajo

Para el adecuado control del repositorio y el mantenimiento de los scripts, se ha propuesto la siguiente dinámica de trabajo.

1. Al llegar un nuevo proyecto, solicitud a demanda de automatización de prueba de un aplicativo o mantenimiento de scripts, se deberá crear una rama con el nombre del proyecto o aplicativo.
2. Los automatizadores descargan la versión del master a su local. 
3. Los automatizadores desarrollan los nuevos scripts en la nueva rama. Realizan las pruebas correspondientes y realizan un push dentro de la nueva rama.
4. Los automatizadores realizan un pull request de la nueva rama a la rama master.
5. Se realiza una revisión de pares al código que se quiere subir al master.
6. Se aprueba el pull request y la rama master tiene la versión actualizada.
7. Al finalizar el desarrollo de los nuevos scripts, se elimina la rama creada.

![Dinamica de Trabajo](/images/documentacion/dinamica_trabajo.png)
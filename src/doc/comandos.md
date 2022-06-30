## Actions
Forma simplificada de cypress para realizar acciones como type, clear, click, select, value, wait, read, write, frame.

**Ubicación:** `cypress/e2e/actions/Actions.ts` 

| Opción   | Default | Descripción |
|----------|---------|-------------|
| typeText | locator: string, value: string, xpath: boolean | Permite ingresar texto exclusivo a input |
| click | locator: string, xpath: boolean | Permite realizar click con cualquier elemento que se encuentre en el DOM |
| clear | locator: string, xpath: boolean | Permite eliminar el texto a inputs |
| selectByVisibleText | locator: string, value: string, xpath: boolean | Permite captura el valor `option value` o `option text` | 
| wait | time : number | Permite realizar una pausa en la ejecución de la prueba `1000 = 1 seg` |
| getValue | locator: string, xpath: boolean | Permite obtener el valor del input `experimental`|
| getText  | locator: string, xpath: boolean | Permite obtener el valor texto de cualquier elemento en el DOM `experimental`|
| xframe | locator: string, position: number | Permite buscar el frame orden en el DOM valor por defecto 0 |
| itypeText | framelocator : string, locator: string, value: string, xpath: boolean | Permite ingresar texto exclusivo a input del frame |
| iclick | framelocator : string, locator: string, xpath: boolean | Permite realizar click con cualquier elemento que se encuentre en el frame |
| iclear | framelocator : string, locator: string, xpath: boolean | Permite eliminar el texto a inputs del frame |
| ExcelReader | file; string, sheet: string, jsonName?:string | Permite leer archivos excel con formato xlsx |
| JSONReader | file: string | Permite leer archivos json |
| JSONWrite | filename: string, data: any | Permite crear archivo json |

Todos los commads de cypress tienen una opciones que permiten cambiar el comportamiento predeterminado. Si desea crear una acción nueva por favor revise en  : [API Commands](https://docs.cypress.io/api/table-of-contents)

***Ejemplo*** : Estructura de la función
```typescript
//void no retorna nada
export const NAME_OPTION = (key : type) : void => () {
    
}

//string retorna valor texto
export const NAME_OPTION = (key : type) : string => () {
    return string
}

//number retorna valor numerico
export const NAME_OPTION = (key : type) : number => () {
    return number
}

//puede crear su tipo de dato a retornar con interfaces
//Otros tipo de retornos Interface, Object, Promise, Array
```

## typeText
Permite ingresar texto exclusivo a input

**Sintaxis**
```typescript
export const typeText = (locator: string, value: string, xpath: boolean = false) => {
    (!xpath) ? cy.get(locator).type(value) : cy.xpath(locator).type(value);
}
```
**Uso**
```typescript
//Si es solo id, css selector, element html
typeText("#input-password", "abc123")
typeText(".input-password", "abc123")
typeText("input[type='password']", "abc123")
//Si es xpath
typeText("//input[type='text']", "abc123", true)
```
Construido con [.type(text), .type(text, options)](https://docs.cypress.io/api/commands/type)

## click
Permite realizar click con cualquier elemento que se encuentre en el DOM

**Sintaxis**
```typescript
export const click = (locator: string, xpath: boolean = false): void => {
    (!xpath) ? cy.get(locator).click() : cy.xpath(locator).click();
}
```
**Uso**
```typescript
//Si es solo id, css selector, element html
click("#grabar")
click(".btn-submit")
click("input[type='submit']")
//Si es xpath
click("//[@id='Enviar']", true)
click("//button[text()='Validate']", true)
```
Construido con [.click(position), .click(position, options)](https://docs.cypress.io/api/commands/click)

## clear
Permite eliminar el texto a inputs

**Sintaxis**
```typescript
export const clear = (locator: string, xpath: boolean = false): void => {
    (!xpath) ? cy.get(locator).clear() : cy.xpath(locator).clear();
}
```
**Uso**
```typescript
//Si es solo id, css selector, element html
clear("#input-password")
clear(".input-password")
clear("input[type='password']")
//Si es xpath
clear("//input[type='text']", true)
```
Construido con [.clear(), .clear(options)](https://docs.cypress.io/api/commands/clear)

## selectByVisibleText
Permite captura el valor `option value` o `option text`

**Sintaxis**
```typescript
export const selectByVisibleText = (locator: string, value: string, xpath: boolean = false): void => {
    (!xpath) ? cy.get(locator).select(value) : cy.xpath(locator).select(value);
}
```
**Uso**
```typescript
//Si es solo id, css selector, element html
selectByVisibleText("#select-paises", "Argentina")
selectByVisibleText(".select2", "123")
selectByVisibleText("select", "argentina")
//*[@id="channel"]
//Si es xpath
selectByVisibleText("//select[@id='channel']", "abc123", true)
```
Construido con [.select(values), .select(values,options)](https://docs.cypress.io/api/commands/select)

## wait
Permite realizar una pausa en la ejecución de la prueba `1000 = 1seg`

**Sintaxis**
```typescript
export const wait = (time: number): void => {
    cy.wait(time)
}
```
**Uso**
```typescript
wait(1000)
```
Construido con [.wait(time), .wait(alias)](https://docs.cypress.io/api/commands/wait)

## xframe
Permite buscar el frame orden en el DOM valor por defecto 0

**Sintaxis**
```typescript
let xframe = (locator : string, position:number = 0) => {
    return cy
    .get('iframe'+locator, { log: true })
    .its(position + '.contentDocument.body', { log: false })
    .then((body) => cy.wrap(body, { log: false }))
}
```
Construido con [.its(time), .its(propertyName)](https://docs.cypress.io/api/commands/its)



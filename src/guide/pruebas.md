# Pruebas E2E

E2E Testing es una técnica que prueba su aplicación desde el navegador web hasta el back-end de su aplicación, así como pruebas de integraciones con API y servicios de terceros. Este tipo de pruebas son excelentes para asegurarse de que toda su aplicación funcione como un todo cohesivo.

Cypress ejecuta pruebas de extremo a extremo de la misma manera que los usuarios interactúan con su aplicación utilizando un navegador real, visitando URL, viendo contenido, haciendo clic en enlaces y botones, etc. Probar de esta manera ayuda a garantizar que sus pruebas y la experiencia del usuario sean las mismas.

![Cypress](/images/pruebaweb/pruebas.png)

## Primera Prueba Web

Antes de escribir codigo, es bueno conocer lo que se va automatizar, para este ejemplo se va utilizar la siguiente web [My Store](http://automationpractice.com/)

![My Store](/images/pruebaweb/sitioprueba.png)

### 1. Creamos el flujo a probar

Ubicación: `cypress/resources/feature`

```ts
//Authentication.feature
Feature: Authentication

    @login
    Scenario Outline: Login Passed
        Given Estoy en la práctica de automatización
        And Intento iniciar sesión en la página web
        When escribo mi correo y contraseña "<CP>"
        Then Verifico que el usuario es Ramon Garcia
        Examples:
            | CP |
            | 0  |  //Datos del Excel
```

### 2. Armar los Steps

Ubicación: `cypress/e2e/steps`

```ts
//AuthenticationStep.ts
import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"

Given('Estoy en la práctica de automatización', () => {

})

And('Intento iniciar sesión en la página web', () => {

})

When('escribo mi correo y contraseña {string}', (cp : number) => {

})

Then('Verifico que el usuario es Ramon Garcia', () => {

})
```

### 3. Armar la data de prueba

Ubicación: `cypress/resorces/fixture`

Como vamos a probar el inicio de sesión del aplicativo necesito los siguiente datos

**Si se trabaja con excel**

![Excel Data](/images/pruebaweb/dataexcel.png)

**Si se trabaja con JSON**

```ts
//LoginData.json
[
  {
    "CP" : 0,
    "Correo" : "prueba02xe@example.com",
    "Password" : "123456789"
  },
  {
    "CP" : 1,
    "Correo" : "prueba03xe@example.com",
    "Password" : "xaxayacuza123"
  }
]
```

### 4. Armar los locadores

En este ejemplo debemos armar los locadores del sitio web y de la data en excel

**Excel Locator**

Ubicación: `cypress/resorces/interface`

Se toma las cabeceras del excel en caso de json deben ser los key y deben ser iguales.
Se debe indicar que tipo de valor vas a recibir o estar declarando en el excel.

```ts
//LoginInterface.ts
interface LoginInterface {
    "CP" : number,
    "Correo" : string,
    "Password" : string
}
export default LoginInterface
```

**Web Locator**

Ubicación: `cypress/e2e/locator`

Por cada pagina que se va navegando se va creando nueva archivo ts para guardar los locator. Si desea trabajar todo en un solo archivo para guardar todos sus locator solo recordar el orden.

```ts
//HomeLocator.ts
class HomeLocators {

    BTN_SIGNIN = 'a.login' 
    LBL_USER = "//*[@class='account']//span"   
      
}
export default HomeLocators 

//LoginLocators.ts
class LoginLocators {

    INPUT_EMAIL = '#email'
    INPUT_PASSWORD = '#passwd'
    BTN_SIGNIN = '#SubmitLogin > span'

}
export default LoginLocators 
```

### 5. Configurar la lectura del excel

Ubicación: `cypress/e2e/helpers/Hook.ts`

```ts
import { ExcelReader, JSONReader } from '../actions/Actions';
import LoginInterface from '../../resources/interfaces/LoginInteface';

// Declaramos un variable para almacenar la data del Excel
export let getDataLogin : LoginInterface[] = [];

beforeEach(() => {
    // Indicamos que tipo de archivo vamos a trabajar
    let DRIVER_FIXTURE = "EXCEL"  //VAL: EXCEL, JSON, BOTH, NULL
    //TRABAJAR CON EXCEL
    let EXCEL_FILE = "data.xlsx" // nombre del archivo debe estar ubicado en la carpeta fixture
    let EXCEL_SHEET1 = "Login" // nombre de la hoja en excel
    //TRABAJAR CON JSON
    let JSON_FILE = "LoginData"; // Si va trabajar con JSON indicar solo el nombre del archivo ubicado en la carpeta fixture

    switch (DRIVER_FIXTURE) {
        case "EXCEL":
            cy.log("READ EXCEL")
            getDataLogin = ExcelReader(EXCEL_FILE, EXCEL_SHEET1);
            break;
        case "JSON":
            cy.log("READ JSON")
            getDataLogin = JSONReader(JSON_FILE);
            break;
        case "BOTH": 
            cy.log("READ & CREATE EXCEL - READ JSON - BOTH")
            ExcelReader(EXCEL_FILE, EXCEL_SHEET1, JSON_FILE);
            getDataLogin = JSONReader(JSON_FILE);
    }
    // DEFULT
    // cy.visit('http://automationpractice.com/index.php');
});
```

### 6. Secuencia del flujo programado

Ubicación: `cypress/e2e/pages`

```typescript
//AuthenticationPage.ts
import { click, getText, typeText } from "../actions/Actions"
import LoginInterface from "cypress/resources/interfaces/LoginInteface"
import LoginLocators from "../locators/LoginLocators"
import HomeLocators from "../locators/HomeLocators"

class AuthenticationPage {

    private _hl = new HomeLocators 
    private _ll = new LoginLocators

    step1 () : void {
        //Ingreso a la pagina
        cy.visit('http://automationpractice.com/index.php')
    }

    step2() : void {
        cy.screenshot({capture : 'runner'})
        //Ir al formulario del Login
        click(this._hl.BTN_SIGNIN)
    }

    step3(data : LoginInterface) : void {
        cy.screenshot({capture : 'runner'})
        //Ingreso de la data a los input
        typeText(this._ll.INPUT_EMAIL, data.Correo )
        typeText(this._ll.INPUT_PASSWORD, data.Password )
        click(this._ll.BTN_SIGNIN)
    }

    step4() : void {
        getText(this._hl.LBL_USER, true).then( (e : any) => {
            //Validamos
            expect(e).to.equal('Ramon Garcia')
        })
        cy.screenshot({capture : 'runner'})
    }

}
export default AuthenticationPage
```

### 7. Añadimos a la secuencia programada a los steps

Ubicación: `cypress/e2e/steps`

```ts
import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"

//invocamos la variable de la data en los hook
import { getDataLogin } from "../helpers/Hook"

import AuthenticationPage from "../pages/AuthenticationPage"
let ap = new AuthenticationPage

Given('Estoy en la práctica de automatización', () => {
    ap.step1()
})

And('Intento iniciar sesión en la página web', () => {
    ap.step2()
})

When('escribo mi correo y contraseña {string}', (cp : number) => {
    ap.step3(getDataLogin[cp])
})

Then('Verifico que el usuario es Ramon Garcia', () => {
   ap.step4()
})
```

## Primera Prueba API

Antes de escribir codigo, es bueno conocer lo que se va automatizar, para este ejemplo se va utilizar la siguiente API [JsonPlaceHolder](https://jsonplaceholder.typicode.com/)

![Sitio API](/images/pruebaweb/sitiopruebaapi.png)

### 1. Creamos el flujo a probar

Ubicación: `cypress/resources/fixtures`

```ts
//TestApi.feature
Feature: Authentication

    @post-api 
    Scenario Outline: Postear
        Given Quiero Publicar un nuevo posts "<CP>"
        When Veo todos mis posts "<CP>"
        Examples:
            | CP |
            | 0  |
```

### 2. Armar los Steps

Ubicación: `cypress/e2e/steps`

```ts
//TestApiStep.ts
import { Given, When } from "@badeball/cypress-cucumber-preprocessor"

Given('Quiero Publicar un nuevo posts {string}', (cp: number) => {
   
})  

When('Veo todos mis posts {string}', (cp: number) => {

})  
```

### 3. Armar la data de prueba

Ubicación: `cypress/resorces/fixture`

Como vamos a probar la api del aplicativo necesito los siguiente datos

![Analisis de API](/images/pruebaweb/dataapi.png)

Para estas pruebas vamos ha realizar ejemplos de POST y GET por eso vamos a omitir el valor `id`

**Si se trabaja con excel**

![Analisis de API](/images/pruebaweb/dataapiexcel.png)

### 4. Armar los locadores

En este ejemplo debemos armar los locadores de la data en excel

**Excel Locator**

Ubicación: `cypress/resorces/interface`

Se toma las cabeceras del excel en caso de json deben ser los key y deben ser iguales.
Se debe indicar que tipo de valor vas a recibir o estar declarando en el excel.

```ts
//ApiInterface.ts
interface ApiInterface {
    url : string
    userId : number
    title : string
    body : string
    response : any
}
export default ApiInterface
```

### 5. Configurar la lectura del excel

Ubicación: `cypress/e2e/helpers/Hook.ts`

```ts
import { ExcelReader, JSONReader } from '../actions/Actions';
import LoginInterface from '../../resources/interfaces/LoginInteface';
import ApiInterface from 'cypress/resources/interfaces/ApiInterface';

// Declaramos un variable para almacenar la data del Excel
export let getDataLogin : LoginInterface[] = [];
export let getDataApi : ApiInterface[] = [];

beforeEach(() => {
    // Indicamos que tipo de archivo vamos a trabajar
    let DRIVER_FIXTURE = "EXCEL"  //VAL: EXCEL, JSON, BOTH, NULL
    //TRABAJAR CON EXCEL
    let EXCEL_FILE = "data.xlsx" // nombre del archivo debe estar ubicado en la carpeta fixture
    let EXCEL_SHEET1 = "Login" // nombre de la hoja en excel
    let EXCEL_SHEET2 = "Api" 
    //TRABAJAR CON JSON
    let JSON_FILE = "LoginData"; // Si va trabajar con JSON indicar solo el nombre del archivo ubicado en la carpeta fixture

    switch (DRIVER_FIXTURE) {
        case "EXCEL":
            cy.log("READ EXCEL")
            getDataLogin = ExcelReader(EXCEL_FILE, EXCEL_SHEET1);
            getDataApi = ExcelReader(EXCEL_FILE, EXCEL_SHEET2);
            break;
        case "JSON":
            cy.log("READ JSON")
            getDataLogin = JSONReader(JSON_FILE);
            break;
        case "BOTH": 
            cy.log("READ & CREATE EXCEL - READ JSON - BOTH")
            ExcelReader(EXCEL_FILE, EXCEL_SHEET1, JSON_FILE);
            getDataLogin = JSONReader(JSON_FILE);
    }
    // DEFULT
    // cy.visit('http://automationpractice.com/index.php');
});
```

### 6. Armar los Model

Ubicación: `cypress/collections/model`

```ts
//PostsModel.ts
class PostsModel {

    private _url : string = '';
    private _userId : number = 0;
    private _title : string = '';
    private _body : string = '';
    private _response : any;  //excluso para ver las respuesta de las api

    get url(): string { return this._url; }
    
    set url(value: string) { this._url = value; }

    get userId(): number { return this._userId; }
    
    set userId(value: number) { this._userId = value; }

    get title(): string { return this._title; }
    
    set title(value: string) { this._title = value; }

    get body(): string { return this._body; }
    
    set body(value: string) { this._body = value; }

    get response(): any { return this._response; }
    
    set response(value: any) { this._response = value; }  
}
export default PostsModel
```

### 7. Armar la API

Ubicación: `cypress/collections/api`

```ts
//Posts.ts
import PostModel from "../model/PostsModel"

class Posts {

    private _post : PostModel

    constructor(post : PostModel) { this._post = post; }

    // Exclusivo para post
    private postData() {
        let data = {
            "title" : this._post.title,
            "body" : this._post.body,
            "userId" : this._post.userId
        }
        cy.log(JSON.stringify(data))
        return data;
    }

    registrar(){
        let url = this._post.url
        let option = {
            method: 'POST',
            url: url,
            headers: {
                "content-type": "application/json",
            },
            body: this.postData()
        }

        let response = cy.request(option).then((e: any) => {
            expect(e.status).to.equals(201)
            return e.body
        });
        return response
    }

    todos() {
        let url = this._post.url
        let option = {
            method: 'GET',
            url: url,
            headers: {
                "content-type": "application/json",
            }
        }

        let response = cy.request(option).then((e: any) => {
            expect(e.status).to.equals(200)
            return e.body
        });
        return response
    }

}
export default Posts
```

### 8. Armar los Request

Ubicación: `cypress/collections/request`

```ts
//PostsApi.ts
import PostsModel from "../model/PostsModel";
import Posts from "../api/Posts";
import ApiInterface from "cypress/resources/interfaces/ApiInterface";

class PostApi {

    private _pm = new PostsModel

    publicar = (data: ApiInterface) => {
        this._pm.url = data.url
        this._pm.title = data.title
        this._pm.body = data.body
        this._pm.userId = data.userId
        let posts = new Posts(this._pm)
        posts.registrar().then(e => {
            this._pm.response = e
            cy.log(e)
        }) 
    }

    todolosPost = (data: ApiInterface) => {
        this._pm.url = data.url
        let posts = new Posts(this._pm)
        posts.todos().then(e => {
            this._pm.response = e
            cy.log(e)
        }) 
    } 
} 
export default PostApi
```

### 9. Añadimos a la secuencia programada a los steps

Ubicación: `cypress/e2e/steps`

```ts
import { Given, When } from "@badeball/cypress-cucumber-preprocessor"
import PostApi from "../collections/request/PostsApi"
import { getDataApi } from "../helpers/Hook"

let postApi = new PostApi
Given('Quiero Publicar un nuevo posts {string}', (cp: number) => {
    postApi.publicar(getDataApi[cp])    
})  

When('Veo todos mis posts {string}', (cp: number) => {
    postApi.todolosPost(getDataApi[cp])
})  
```



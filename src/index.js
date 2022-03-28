const Express = require("express"); // Importar en nodejs
const RequestHandler = require("./handlers/todos");
const { initializeDB } = require("./lib/db");

const App = Express();

App.use(Express.json());
App.use(Express.urlencoded( { extended: false}))
App.use(RequestHandler)

App.listen(3000, () =>{
    console.log("I'm Ready:)");
    initializeDB().then(() => console.log("DB READY :)"));
}); //Atento a peticiones
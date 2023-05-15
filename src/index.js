import express from "express";
import { dirname, join } from "path"; //join nos permite concatenar sin importar so
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";
import ejs from "ejs"; //se puede obviar

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)); //obtengo la ruta de mi carpeta D:\CURSO PAGINA WEB\nodejs-first-project\src

//configuracion
app.set("views", join(__dirname, "views")); //D:\CURSO PAGINA WEB\nodejs-first-project\src\views
app.set("view engine", "ejs");
app.use(indexRoutes);


app.use(express.static(join(__dirname,'public')))
//ruta

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server listening on port", 3000);
});

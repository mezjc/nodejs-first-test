import { Router } from "express"; //extraemos solo rauter para configurar las rutas
const router = Router();

router.get("/", (req, res) => res.render("index",{ title: 'First web with Node'}));//generando variables y pasandolo a index

router.get("/about", (req, res) => res.render("about", { title: 'About Me'}));

router.get("/contact", (req, res) => res.render("contact",{title: 'Contact Page'}));

export default router;

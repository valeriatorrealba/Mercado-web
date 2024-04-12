const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor está inicializado en el puerto ${port}`);
});

app.use(express.static("assets"));

app.engine("handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/componentes",
        helpers: {
            mensaje: function(){
                return "Bienvenido al mercado Web, selecciones sus productos";
            }
        } 
    })
);
app.set("view engine", "handlebars");

// 5. Consumir los códigos fuentes de Bootstrap y jQuery a través de rutas o middlewares
// creados en el servidor. Estas dependencias deben ser instaladas con NPM

app.use("/bootstrapCss", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use('/bootstrapJs', express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

app.get("/", (req, res) => {
    res.render("main", {
        layout: "main",
        producto: [
            "banana",
            "cebollas",
            "lechuga",
            "papas",
            "pimenton",
            "tomate",
        ]
    })
});
const express = require("express")
const path = require("path")

const bodyParser = require("body-parser")

const app = express()

let port = process.env.PORT || 3000

let version = "v1.0.0"

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "Static")))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.render('index.ejs')
})



app.listen(port, ()=> {
    console.log("App started" + " || " + version)
})

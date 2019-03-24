import express from 'express'
import path from 'path';
import hbs from 'hbs';
import helpers from './helpers';
import bodyParser from 'body-parser';

const app = express()

const dirPublic = path.join(__dirname, '../public')
const directoriopartials = path.join(__dirname,'../partials')

app.use(express.static(dirPublic))
hbs.registerPartials(directoriopartials)
app.use(bodyParser.urlencoded({extended: false}))


app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: "Lucas"
    })
})

app.post('/calculos', (req, res) => {
    res.render('calculos', {
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)
    })
})

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
})

app.get('*', (req, res) => {
    res.render('error', {
        estudiante: 'error'
    })
})
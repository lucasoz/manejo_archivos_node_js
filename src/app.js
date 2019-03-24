import express from 'express'
import path from 'path';
import hbs from 'hbs';
const app = express()

const dirPublic = path.join(__dirname, '../public')
app.use(express.static(dirPublic))
 
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: "Lucas"
    })
})

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
})
import hbs from 'hbs'

hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) => {
    return ((nota1 + nota2 + nota3)/3).toFixed(2)
})
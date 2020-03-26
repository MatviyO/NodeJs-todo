const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const expressHandlebars = require('express-handlebars')
const app = express()
const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hds'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
async function start() {
    try {
        await mongoose.connect('mongodb+srv://link:link3131@cluster0-lrxwx.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.lo(`Server has been started ${PORT}`)
        })

    } catch (e) {
        console.log(err)
    }
}

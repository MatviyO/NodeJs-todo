const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const expressHandlebars = require('express-handlebars')
const todosRouter = require('./routes/todos')
const app = express()
const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(todosRouter)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://link:link3131@cluster0-lrxwx.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`Server has been started ${PORT}`)
        })

    } catch (e) {
        console.log(err)
    }
}
start()

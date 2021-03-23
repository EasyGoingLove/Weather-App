const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static dir to serve
app.use(express.static(publicDirPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name:  'JOnny sins'
    })
})

app.get('/about', (req,res) =>{
    res.render('about', {
        title: 'About the weather app',
        name:  'JOnny sins'
    })
})

app.get('/about/*', (req,res) => {
    res.render('errorPage', {
        title: 'About 404',
        message: 'About article not found'
    })
})

app.get('*',(req,res) => {
    res.render('errorPage', {
        title: '404 Not Found',
        message: 'Error 404 Page not found'
        
    })
})

app.listen(3000, () =>{
   console.log('Listening on port 3000')
})
const PORT = 3000

const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//MIDDLERWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts);

// ROUTES
app.get('/', (req,res)=>{
    res.send("HELLO, this is zodaic signs") 
    res.render('index.ejs')
})

app.listen(PORT, ()=>console.log("I'm Listening to port3000"))


// Earth
app.get('/earth', (req,res)=>{
    const Earthes = ['Taurus',
    'Virgo', 'Capricorn']
    res.render('earth.ejs', {earthes :Earthes })
}) 

// Water
app.get('/water', (req,res)=>{
    const Wateres = ['Pisces',
    'Cancer', 'Scorpio']
    res.render('water.ejs', {wateres :Wateres })
}) 

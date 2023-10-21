// express framework for nodeJS
// express ka use case => routing
// routing => 
// https://www.facebook.com/profile/ ==> is Called Routes /profile
// /profile = profile 
// /contact = contact

// MAIN ROUTES =>

// ROUTING  => GET , POST , PUT , PATCH , DELETE


// GET POST

const express = require('express');
const app = express()


// middleware 1 esa function hy jo kisi bhi route sy pehly chalta hy , jiska matlan apka route chlny sy pehly agar ap koi kamm karwana chahty hoo to middleware ka istemal ho skta hy .

// route pe chalny sy pehly print karoo chala on console 
// route chalny sy pehly route pe hits counter ki value barhaoo 

// iska matlab route chalny sy pehly jo chalega wo hy middleware. Hamesha Hamesha

// Sirf 1 Masla hy jo next() solve karta hy agar hamara middleware chalyga toh request
// jam ho jati hy oor route tak nhi puhunch paati uske liye next() use karty hyn taky next()
// par push ho jaye

app.use(function(req , res , next){
    console.log("Hello from Middleware ......");
    next();
})
app.use(function(req , res , next){
    console.log("Hello from Middleware 2 ......");
    next();
})

app.get('/'  , function(req , res){
    res.send("Hello Furqan ...")
})

app.get('/profile'  , function(req , res){
    res.send("Hello Profile Page ...")
})

app.listen(3000);
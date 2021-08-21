const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index.ejs', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullURL })
  // console.log(req.body.fullURL)
  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl})
  if (shortUrl == null) return res.sendStatus(404)
  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5011);









//  const express = require('express');
//  const app = express();
//  const ShortUrl = require('./models/shortUrl') 
//  const mongoose = require('mongoose')

//   mongoose.connect('mongodb://localhost/urlShortener', {
//      useNewUrlParser:true, useUnifiedTopology:true
//   });
// //  app.set('Views', __dirname + '/Views');
//  app.set('view engine ', 'ejs'); 
//  app.use(express.urlencoded({extdended:false})) 

// app.get('/' , async (req , res)=>{
//   const shortUrls = await ShortUrl.find()
//     res.render('index.ejs' , {shortUrls :shortUrls });  

// })

// app.post('/shortUrl' , async (req , res)=>{

//     await ShortUrl.create({
//        full: req.body.fullURL
//    });
//     res.redirect('/');
// })

// app.get('/:shortUrl', async (req, res) => {
//     const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
//     if (shortUrl == null) return res.sendStatus(404)
  
//     shortUrl.clicks++
//     shortUrl.save()
  
//     res.redirect(shortUrl.full)
//   })

//  app.listen(process.env.PORT || 5011);


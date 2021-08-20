 const express = require('express');
 const app = express();
//  app.set('Views', __dirname + '/Views');
 app.set('view engine ', 'ejs'); 
 

app.get('/' , (req , res)=>{

    res.render('index.ejs');
  

})





 app.listen(process.env.PORT || 5011);
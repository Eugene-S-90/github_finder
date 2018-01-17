

var express = require('express');
var path = require('path')
var app = express();
var cors = require('cors-express');




options ={
  
    allow : {
        origin: '*',
        methods: 'GET,PATCH,PUT,POST,DELETE,HEAD,OPTIONS',
        headers: 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override'
    },
    expose :{
        headers : null
    },
    max : {
        age : null
    },
    options : function(req, res, next){
        if (req.method == 'OPTIONS') {
            res.status(200).end();
        } else {
            next();
        }
    },
    specials : {
        powered : null
    }
}

app.use(cors(options));

app.use('/', express.static (path.join(__dirname)));

app.get('/', function(request, response){
    response.sendFile(path.join (__dirname ,'/index.html') ) ;
  });


app.listen(8080, function(){
  console.log(__dirname);
  console.log("Server is ON on http://localhost:8080 ");
});
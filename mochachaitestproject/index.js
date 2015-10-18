var http= require('http');
exports.sanitize=function(word)
{
  console.log('in the index.js');
  return word.toLowerCase().replace(/-/g,' ');
}

exports.tokenize=function(sentence)
{
  return sentence.split(' ');
}
/*
exports.info=function(callback)
{
  var https = require('https');
  var options=
  {
    host: 'api.github.com',
    path:'/repos/sayanee/build-podcasr',
    method:'get',
    headers:{
      'User-agent':'sayanee'
    }

  }
  var str ='';
  http.request(options,function(response){
    response.on('data',function(data)
  {str+=data;

  })
  response.on('end',function()
{
  callback(JSON.parse(str));
})
response.on('error',function()
{
  console.log(error);
  callback(error);
})
  }).end();
}
*/

const http = require('http')
const port = 3000
const fs = require('fs')

const server = http.createServer(function(req,res){
   res.writeHead(200,{'content-type': 'text/Html'})
   fs.readFile('index.html',function(err,data){
      if(err){
         res.writeHead(404);
         res.write('Error:File not found');
      }
      else {
         res.write(data)
      }
      res.end()
   })

})

server.listen(port,function(err)
{
if(err){
   console.log("Something went wrong");
}
else {
   console.log("Server is listening on port 3000");
}
})

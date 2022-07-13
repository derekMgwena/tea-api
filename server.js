
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


const tea = {

  'rooibos':{

    'type': 'black' ,
    'origin': 'ethiopia' ,
    'waterTemp': 200,
    'steepTemp':180 ,
    'caffeineLevel': true,
    'flavor': 'delicious',
  }
  'matcha' :{
   'type': 'green' ,
    'origin': 'ethiopia' ,
    'waterTemp': 200,
    'steepTemp':180 ,
    'caffeineLevel': false,
    'flavor': 'delicious',
  }

  'unknown':{

    'type': 'unknown' ,
    'origin': 'unknown' ,
    'waterTemp': 'unknown',
    'steepTemp':'unknown',
    'caffeineLevel': 'unknown',
    'flavor': 'unknown',
  }
}

app.get('/', (request,response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
  const teaName = request.params.name.tolowerCase()
  if(tea[teaName]){
    response.json(tea[teaName])
  }else{
    response.json(tea['unknown'])
  }
  
})





app.listen(process.env.PORT || PORT,()=>{
  console.log('The server is running on port ${PORT}! better go catch it ')
})
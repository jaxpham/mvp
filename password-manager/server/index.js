const express = require('express')
const app = express()
const port = 4000

const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);


app.get('/', (req, res) => {
  res.send('Hello World!')
  client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+17273147864',
     to: '+14158283443'
   })
  .then(message => console.log(message.sid));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()
const port = 5000


const mongoos = require('mongoose')
mongoos.connect('mongodb+srv://soonwon:Dbwls0157!@cluster0.ybx6nja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>console.log('MongoDB Connected'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
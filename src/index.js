const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const ejs = require('ejs')
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.json())

app.use('/', require('./controller/userAPI'))
app.use('/data', require('./controller/dataUser'))
app.use('/', require('./controller/deleteUser'))
app.use('/', require('./controller/updateUser'))

const uri = "mongodb+srv://pgsilva2002:yxAgibLmOfpprvLZ@cluster0.nsscd.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true)
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error',() => console.log("Error in Connecting to Database"));
db.once('open',() => console.log("Connected to Database"))

app.listen(port, () => {
    console.log('Server is up on port', port)
})
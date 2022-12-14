require('dotenv').config()

const express = require('express')
const cors = require('cors') 
const app  = express();
const PORT = process.env.PORT || 3000;

const contact_me = require('./routes/contactMe')


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome To 1102Mak's API ")
})

app.use('/contact-me', contact_me)

app.listen(PORT, () => {
    console.log(`RUNNING ON http://localhost:${PORT}\n`)
})

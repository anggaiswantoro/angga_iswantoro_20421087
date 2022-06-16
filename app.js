
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.post('/datadiri/:npm/:hp-query',function(req,res) {
    res.json({
        nama     : req.params.npm,
        npm    : req.body.nama,
        alamat  : req.body.alamat,
        agama   : req.body.agama,
        gender  : req.body.gender,
        negara  : req.body.negara,
        hobi    : req.query.hobi,
        email   : req.body.email,
        nik     : req.query.nik,
        hp      : req.params.hp

    })
})


app.listen(5000)
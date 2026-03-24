const express = require('express')
const multer = require('multer')
const path = require('path')
const upload = multer({dest : 'uploads/'})


const app = express()


app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req,res) => {
    res.render('homepage')
})


const storage = multer.diskStorage({
    destination : function(req , file, cb) {
        return cb(null, './uploads')
    },
    filename : function (req,file,cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const uploadfile = multer({storage})

app.post('/upload', uploadfile.single('uplodedFile'),(req,res) => {
    console.log(req.body)
    console.log(req.file)
    res.redirect('/')
})

app.listen(3000 ,() => console.log('server Stared...'))
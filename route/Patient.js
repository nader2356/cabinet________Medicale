const express = require("express");

var multer = require('multer')
const router = express.Router();
const db = require("../models");

router.post('/new',(req, res)  => {
    

    const Prenom = req.body.Prenom;
    db.Patient.findOne({ where: { Prenom:Prenom}}).then( Patient => {
      
    if (!Patient) {
       
        db.Patient.create({
            Nom: req.body.Nom,
            Prenom: req.body.Prenom,
            Age: req.body.Age,
            DateDenaissance: req.body.DateDenaissance,
            Mobile: req.body.Mobile,
            Adresse: req.body.Adresse,
            Sexe: req.body.Sexe,
        }).then(newcategory => res.send(newcategory));
       
    } else {
        return res.status(401).json({ error: 'User already found, please check your email !' });
    }
})

})



router.get('/all',(req, res)  => {
    
  db.Patient.findAll({}).then( AllPatients =>  res.send(AllPatients));
     
})


const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null,'upload')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + `${file.originalname}`)
    }
})

const upload = multer({ storage: storage })
router.get('/all',(req, res) => {
            db.Patient.findAll().then(Objet =>res.send(Objet));    
        })  
 
        router.post('/upload',upload.single('file'), (req, res) => {
            if (typeof req.file !== 'undefined') {
  console.log(req.file)
              res.json({
                Name: 'http://localhost:8000/upload/' + req.file.filename
              })
            } else {
              res.status(400).json({
                msg: 'Please upload valid file'
              })
            }
          });


module.exports = router;
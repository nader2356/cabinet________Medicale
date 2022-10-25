const express = require("express");

var multer = require('multer')
const router = express.Router();
const db = require("../models");

router.post('/new/PatientId',(req, res)  => {
    

    
    db.Patient.findOne({
        where: {
            id: req.params.PatientId
        },
        
    }).then(Patient => {
        
        db.RendezVous.create({
            Date: req.body.Date,
            Temp: req.body.Temp,
            PatientId : req.params.PatientId
        }).then(newRendeVous => res.send(newRendeVous));
    })
});



router.get('/all',(req, res)  => {
    
  db.RendezVous.findAll({}).then( AllPatients =>  res.send(AllPatients));
     
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
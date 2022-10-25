const express = require("express");

var multer = require('multer')
const router = express.Router();
const db = require("../models");
const Antécédent = require("../models/Antécédent");

router.post('/new/PatientId',(req, res)  => {
 
  const Phatologie = req.body.Phatologie;
  db.Antécédent.findOne({ where: { Phatologie:Phatologie}}).then( Antécédent => {
    
  if (!Antécédent) {
   
        
        db.Antécédent.create({
            Type: req.body.Type,
            Pathologie: req.body.Pathologie,
            Traitement: req.body.Traitement,
            Du: req.body.Du,
            Au: req.body.Au,
        }).then(Ante => res.send(Ante));
      } else {
        return res.status(401).json({ error: 'Antécédent already found, please check your information !' });
    }
})

  });

  /*const Antecedents = [
    
    { id : 1,
      Type: "Phatologique",
      Phatologie: "Stress",
      Traitemnt: "",
      Du: "",
      Au :""
     
    },
    {  id : 2,
      Type: "Phatologique",
      Phatologie: "Anxiété",
      Traitemnt: "",
      Du: "",
      Au :""
     
    },
    {
      id : 3,
      Type: "Phatologique",
      Phatologie: "trouble de sommeil",
      Traitemnt: "",
      Du: "",
      Au :""
     
    },
    {
      id : 4,
      Type: "Phatologique",
      Phatologie: "toxidermies érythémateuse",
      Traitemnt: "",
      Du: "",
      Au :""
    },
  ];*/
router.get('/all',(req, res)  => {
    
  db.Antécédent.findAll({}).then(Ante => res.send(Ante));
     
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
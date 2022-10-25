const express = require("express");
const app = express();
const db = require("./modelS");
const router = require("./route/Patient");
const PORT =  8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Cors headers middleWare
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});



var teamRoutes = require("./route/Patient");
app.use('/api/Patient', teamRoutes);


var RendezVousRoutes = require("./route/RendezVous");
app.use('/api/RendezVous', RendezVousRoutes);



var AntécédentRoutes = require("./route/Antécédent");
app.use('/api/Antecedent', AntécédentRoutes);




app.get('/', function(req, res) {
    res.send('hello world');
});
app.use('/upload', express.static('upload'));
db.sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`listing at http://localhost:${PORT}`);
    })
})
const express = require('express');
const app = express();
const router = express.Router();


const promMid = require('express-prometheus-middleware');

const path = __dirname + '/views/';
const port = 8080;

app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  
}));


router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});
router.get('/changes', function(req,res){
  res.send("change of webhook");
});


//this change(adding comment) will trigger github webhook.(at first forgot to add gitscm auto build trigger)
app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})

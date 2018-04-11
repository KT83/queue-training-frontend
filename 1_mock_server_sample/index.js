var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var sleep = require('sleep');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/helloworld', function (req, res) {
  console.log('/helloworld called with get method.')
  sleep.sleep(1);
  res.send({
    meesage: "Hello, world."
  })
  console.log('message sent.')
});

app.get('/news', function (req, res) {
  console.log('/news called with get method.')
  sleep.sleep(1);
  res.send([
    {
      id: "3M9YFFBMW3YPFXNN",
      title: "大谷「自然体で臨めた」　１２奪三振ショーに観客総立ち",
      text: "プレーボールがかかった次の瞬間から、試合を完全に支配した。大谷は一回、先頭のジョイスをフォーク、続くセミエンを９６マイル（約１５４キロ）の直球、３番・ローリーを、またしてもフォークで空振り三振に仕留めた。球場のボルテージが、一気に上がる。",
      img_url: "http://via.placeholder.com/400x300"
    },
    {
      id: "V7FCQFFT7GSN7G9G",
      title: "クアルコムしらける株主　13兆円買収阻止の代償 ",
      text: "スマートフォン向け半導体大手の米クアルコムが４カ月に及んだ買収攻防戦の余波に揺れている。トランプ米大統領による禁止命令で、同業ブロードコムによる買収を水際で防いだものの、",
      img_url: "http://via.placeholder.com/400x300"
    }
  ])
  console.log('message sent.')
});

app.get('/news/:id', function (req, res) {
  console.log('/news/:id called with get method.')
  sleep.sleep(1);
  res.send({
    id: "3M9YFFBMW3YPFXNN",
    title: "大谷「自然体で臨めた」　１２奪三振ショーに観客総立ち",
    text: "プレーボールがかかった次の瞬間から、試合を完全に支配した。大谷は一回、先頭のジョイスをフォーク、続くセミエンを９６マイル（約１５４キロ）の直球、３番・ローリーを、またしてもフォークで空振り三振に仕留めた。球場のボルテージが、一気に上がる。",
    img_url: "http://via.placeholder.com/400x300"
  })
  console.log('message sent.')
});

app.listen(3003, function () {
  console.log('dev server listening on port 3003!');
});
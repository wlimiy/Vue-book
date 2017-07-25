//后台只提供接口，前端只调用接口
let http=require('http');
let fs=require('fs');
let url=require('url');
let sliders=require('./slider');
//读文件的方法
function read(callback) {
  fs.readFile('./book.json','utf8',function (err,data) {
    data=data.length==0?[]:JSON.parse(data);
    callback(data);
  })
}
read(function (data) {
  console.log(data);
});
console.log(sliders);
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/api/slider'){
    return res.end(JSON.stringify(sliders))
  }
  if(pathname==='/api/hot'){
    read(function (data) {//data表示读到的结果，是对象
      var books=data.reverse().slice(0,6);
      res.end(JSON.stringify(books));
    });
    return
  }
}).listen(3000);

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
function write(data,callback) {
  fs.writeFile('./book.json',JSON.stringify(data),callback)
}
console.log(sliders);
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/api/slider'){
    return res.end(JSON.stringify(sliders))
  }
  if(pathname==='/api/hot'){
    read(function (data) {//data表示读到的结果，是对象
      var books=data.reverse().slice(0);
      res.end(JSON.stringify(books));
    });
    return
  }
  //图书的增删改查
  console.log(req.method);
  if(pathname==='/api/book'){
    switch (req.method){
      case 'GET':
        read(function (data) {//data代表所有数据
          res.end(JSON.stringify(data));
        });
        break;
      case 'POST':
        //拿请求体中的数据，发送过来的请求体默认就是对象格式{}
        let str='';
        req.on('data',function (data) {
          str+=data;
          console.log(data.toString());
        });
        req.on('end',function () {
          let book=JSON.parse(str);
          read(function (books) {//读取所有的书，获取最后一项id 累加
            book.id=books.length>0?books[books.length-1].id+1:1;
            books.push(book);//将新书放回去
            write(books,function () {
              res.end(JSON.stringify(book));
            })
          })
        });
        break;
      case 'delete':
        break;
      case 'put':
        break;

    }
  }
}).listen(3000);

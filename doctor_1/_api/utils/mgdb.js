let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient; //创建客户端	
let ObjectID = mongodb.ObjectID;

module.exports = ({
    url = 'mongodb://127.0.0.1:27017', //  连接URL
    dbName = 'newsapp', //  数据库名称
    collectionName //  集合库名称
}, callback) => {

    //创建链接	
    mongoCt.connect(url, { useNewUrlParser: true }, (err, client) => {

        if (!err) {
            //链库
            let db = client.db(dbName);

            //链接表
            let collection = db.collection(collectionName);

            //查询
            // console.log(collection)
            callback(collection, client, ObjectID)
        } else {
            console.log('链接mongodb服务端失败')
        }

    })
}


// url dbName collectionName 
/* module.exports = (opts,callback) => {
  opts = opts || {};
  opts.url = opts.url || 'mongodb://127.0.0.1:27017';
  opts.dbName = opts.dbName || '1905';
  opts.collectionName = opts.collectionName || 'user';

  //创建链接	
  mongoCt.connect(opts.url,{ useNewUrlParser: true },(err,client)=>{

    if(!err){
      //链库
      let db = client.db(opts.dbName);

      //链接表
      let collection = db.collection(opts.collectionName);

      //查询
      callback(collection,client)

    }else{
      console.log('链接mongodb服务端失败')
    }

  })
} */
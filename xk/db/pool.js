var mysql = require('mysql');

var pool = global.pool;

if(!pool){
	pool = mysql.createPool({
		database:'web1701',
		user:'root',
		password:'root'
	});
	global.pool = pool;
}
function getConnection(){
	return new Promise(function(resolve,reject){
		pool.getConnection(function(err,conn){
			if(!err){
				resolve(conn);
			}else{
				reject(err);
			}
		});
	});
}
function execute(sql){
	return new Promise(function(resolve,reject){
			var connection;
			getConnection().then(function(conn){
				connection = conn;
				conn.query(sql,function(err,result){
					if(!err){
						resolve(result);
					}else{
						reject(err);
					}
				});
			}).catch(function(err){
				reject(err);
			}).finally(function(){
				connection.release();
			});
		});
}
module.exports = {
	getConnection,
	execute
};


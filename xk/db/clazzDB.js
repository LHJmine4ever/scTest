var pool = require('./pool');
module.exports = {
	findAll(){
		var sql = "select * from xk_clazz";
		return pool.execute(sql);
	},
	batchDelete(ids){
		var sql = "delete from xk_clazz where id in ("+ids.join()+")";
		return pool.execute(sql);
	},
	save(clazz){
		var sql = "insert into xk_clazz values(null,'"+clazz.name+"')";
		return pool.execute(sql);
	},
	findById(id){
		var sql = "select * from xk_clazz where id = "+id;
		return pool.execute(sql);
	},
	query(keys){
		var sql = "select * from xk_clazz where name like '%"+keys+"%'";
		return pool.execute(sql);
	},
	update(clazz){
		var sql = "update xk_clazz set name = '"+clazz.name+"' where id ="+clazz.id;
		return pool.execute(sql);
	}	
}
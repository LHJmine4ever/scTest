var pool = require('./pool');
module.exports = {
	findAll(){
		var sql = "select * from xk_course";
		return pool.execute(sql);
	},
	batchDelete(ids){
		var sql = "delete from xk_course where id in ("+ids.join()+")";
		return pool.execute(sql);
	},
	query(keys){
		var sql = "select * from xk_course where name like '%"+keys+"%'";
		return pool.execute(sql);
	},
	save(course){
		var sql = "insert into xk_course values(null,'"+course.name+"','"+course.credit+"')";
		return pool.execute(sql);
	},
	update(course){
		var sql = "update xk_course set name = '"+course.name+"',credit = '"+course.credit+"' where id = "+course.id;
		return pool.execute(sql);
	},
	findById(id){
		var sql = "select * from xk_course where id = "+id;
		return pool.execute(sql);
	}
}

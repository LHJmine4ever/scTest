var pool = require('./pool');
module.exports = {
	findAll(){
		var sql = "select * from xk_studentcourse";
		return pool.execute(sql);
	},
	batchDelete(ids){
		var sql = "delete from xk_studentcourse where id in ("+ids.join()+")";
		return pool.execute(sql);
	},
	
	save(studentcourse){
		var sql = "insert into xk_studentcourse values(null,'"+studentcourse.grade+"','"+studentcourse.student_id+"','"+studentcourse.course_id+"')";
		return pool.execute(sql);
	},
	update(studentcourse){
		var sql = "update xk_studentcourse set grade = '"+studentcourse.grade+"',student_id = '"+studentcourse.student_id+"',course_id = '"+studentcourse.course_id+"' where id = "+studentcourse.id;
		return pool.execute(sql);
	},
	findById(id){
		var sql = "select * from xk_studentcourse where id = "+id;
		return pool.execute(sql);
	}
}

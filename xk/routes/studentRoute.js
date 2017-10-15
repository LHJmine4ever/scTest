let express = require('express');
let route = express.Router();
let studentDB = require('../db/studentDB');
let Student = require('../model/student');
route.get('/findAll',(req,resp)=>{
	studentDB.findAll().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/findById',(req,resp)=>{
  studentDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})

route.get('/query/:keys',(req,resp)=>{
	studentDB.query(req.params.keys).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(data);
	});
});

route.post('/save',(req,resp)=>{
	let student = new Student();
	Object.assign(student,req.body);
	console.log(req.body);
	studentDB.save(student).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('/update',(req,resp)=>{
	let student = new Student();
	//console.log(req.body);
	Object.assign(student,req.body);
	console.log(student)
	studentDB.update(student).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
	
});

route.post('/batchDelete',(req,resp)=>{
	// console.log()
	var ids = toArr(req.body['ids[]']);
	console.log(toArr(req.body['ids[]']));
	studentDB.batchDelete(ids).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

//ids => arr

function toArr(ids){
	var newArr = [];
	return newArr.concat(ids);
}


module.exports = route;
let express = require('express');
let route = express.Router();
let xkscDB = require('../db/xkscDB');
let Studentcourse = require('../model/Studentcourse');
route.get('/findAll',(req,resp)=>{
	xkscDB.findAll().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/findById',(req,resp)=>{
	xkscDB.findById(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('/save',(req,resp)=>{
	let studentcourse = new Studentcourse();
	Object.assign(studentcourse,req.body);
	xkscDB.save(studentcourse).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('update',(req,resp)=>{
	let studentcourse = new Studentcourse();
	Object.assign(studentcourse,req.body);
	clazzDB.update(studentcourse).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('batchDelete',(req,resp)=>{
	xkscDB.batchDelete(req.body).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

module.exports = route;
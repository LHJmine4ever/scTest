let express = require('express');
let route = express.Router();
let clazzDB = require('../db/clazzDB');
let Clazz = require('../model/Clazz');

route.get('/findAll',(req,resp)=>{
	clazzDB.findAll().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/findById',(req,resp)=>{
	clazzDB.findById(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/query/:keys',(req,resp)=>{
	clazzDB.queery(req.params.keys).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('/save',(req,resp)=>{
	let clazz = new Clazz();
	Object.assign(clazz,req.body);
	clazzDB.save(clazz).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('update',(req,resp)=>{
	let clazz = new Clazz();
	Object.assign(clazz,req.body);
	clazzDB.update(clazz).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('batchDelete',(req,resp)=>{
	clazzDB.batchDelete(req.body).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

module.exports = route;
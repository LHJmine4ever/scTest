let express = require('express');
let route = express.Router();
let courseDB = require('../db/courseDB');
let Course = require('../model/Course');
route.get('/findAll',(req,resp)=>{
	courseDB.findAll().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/findById',(req,resp)=>{
  courseDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})

route.get('/query/:keys',(req,resp)=>{
	courseDB.query(req.params.keys).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(data);
	});
});

route.post('/save',(req,resp)=>{
	let course = new Course();
	Object.assign(course,req.body);
	courseDB.save(course).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('/update',(req,resp)=>{
	let course = new Course();
	Object.assign(course,req.body);

	courseDB.update(course).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
	// console.log(course);
});

route.post('/batchDelete',(req,resp)=>{
	var ids = toArr(req.body['ids[]']);
	console.log(req.body['ids[]']);
	courseDB.batchDelete(ids).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});


});

function toArr(ids){
	var newArr = [];
	return newArr.concat(ids);
}
module.exports = route;
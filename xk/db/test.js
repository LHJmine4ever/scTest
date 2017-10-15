var studentDB  = require('./studentDB');
require('babel-polyfill');
var Student = require('../model/student.js');
var courseDB = require('./courseDB');
var Course = require('../model/Course.js');
var clazzDB = require('./clazzDB');
var Clazz = require('../model/Clazz');
var xkscDB = require('./xkscDB');
var Studentcourse = require('../model/Studentcourse');
// xkscDB.findAll().then(function(data){
// 	console.log(data);
// }).catch(function(error){
// 	console.log("errorlalalala:",error);
// });
// var studentcourse = new Studentcourse(null,'88','2','3');
// xkscDB.save(studentcourse).then(function(data){
// 	console.log(data);
// }).catch(function(error){
// 	console.log("baocuole:",error);
// });
// var studentcourse = new Studentcourse(7,'78','2','4');
// xkscDB.update(studentcourse).then(function(data){
// 	console.log(data);
// }).catch(function(error){
// 	console.log("error",error);
// })

// clazzDB.query('j').then(function(data){
// 	console.log(data);
// }).catch(function(error){
// 	console.log(error);
// });
var ids = [7];
xkscDB.batchDelete(ids).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
});
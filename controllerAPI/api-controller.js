var dbcon=require("../cinema_db");
var connection = dbcon.getconnection();
connection.connect();

var express = require("express");
var router = express.Router();


// router.get("/",(request,response)=>{
// 	connection.query("SELECT * FROM movie",(err, records,fields)=>{
// 		if(err){
// 			console.log("Error when retriving the data");
// 		}
// 		else{
// 			response.send(records);
// 		}
// 	})
// })

router.get("/",(request,response)=>{
	connection.query("SELECT * FROM showtime",(err, records,fields)=>{
		if(err){
			console.log("Error when retriving the data");
		}
		else{
			response.send(records);
		}
	})
})
// // get function to get all the movies
// router.get("/:title",(request,response)=>{
// 	connection.query("SELECT * FROM movie WHERE title like '%"+request.params.title+"%'",(err, records,fields)=>{
// 		if(err){
// 			console.log("Error when retriving the data");
// 		}
// 		else{
// 			response.send(records);
// 		}
// 	})
// })

// get function to get all the showtimes location from showtime table
router.get("/:location",(request,response)=>{
	connection.query("SELECT * FROM showtime WHERE location like '%"+request.params.location+"%'",(err, records,fields)=>{
		if(err){
			console.log("Error when retriving the data");
		}
		else{
			response.send(records);
		}
	})
})
// // post router for movie table
// router.post("/",(request,response)=>{
// 	var movie_ID=request.body.movie_ID; 
// 	var title=request.body.title;
//     var genre=request.body.genre;
// 	var rating=request.body.rating;
//     var description=request.body.description;

// 	connection.query("INSERT INTO agent VALUES ('"+movie_ID+"','"+title+"', '"+genre+"', '"+rating+"', '"+description+"')",(err, records,fields)=>{
// 		if(err){
// 			console.log(err);
// 			console.log("Inserting data error");
// 		}
// 		else{
// 			response.send({insert:"Successfully inserted"});
// 		}
// 	})
// })

// post router for showtime.
router.post("/",(request,response)=>{
    var showtime_ID=request.body.showtime_ID;
	var movie_ID=request.body.movie_ID; 
    var time = request.body.time;
    var location=request.body.location;
	connection.query("INSERT INTO showtime VALUES ('"+showtime_ID+"','"+movie_ID+"', '"+time+"', '"+location+"')",(err, records,fields)=>{
		if(err){
			console.log(err);
			console.log("Inserting data error");
		}
		else{
			response.send({insert:"Successfully inserted"});
		}
	})
})

// // router to run put function in movie table.
// router.put("/",(request,response)=>{

//     var movie_ID=request.body.movie_ID;
//     var genre=request.body.genre;
// 	connection.query("UPDATE movie SET genre='"+genre+"' WHERE movie_ID="+movie_ID,(err, records,fields)=>{
// 		if(err){
// 			console.log(err);
// 			console.log("Error when updating the data");
// 		}
// 		else{
// 			response.send({update:"Successfully updated"});
// 		}
// 	})
// })

// router to run put function in showtime table.
router.put("/",(request,response)=>{

    var showtime_ID=request.body.showtime_ID; //request.body.showtime_ID;
    var time=request.body.time; //request.body.time;
	connection.query("UPDATE showtime SET time='"+time+"' WHERE showtime_ID="+showtime_ID,(err, records,fields)=>{
		if(err){
			console.log(err);
			console.log("Error when updating the data");
		}
		else{
			response.send({update:"Successfully updated"});
		}
	})
})

// //router to delete the data from movie table.
// router.delete("/",(request,response)=>{
// 	var movie_ID=request.body.movie_ID;
	
// 	connection.query("DELETE FROM movie WHERE movie_ID="+movie_ID,(err, records,fields)=>{
// 		if(err){
// 			console.log(err);
// 			console.log("Error when deleting the data");
// 		}
// 		else{
// 			response.send({delete:"Successfully deleted"});
// 		}
// 	})
// })

//router to delete the data from showtime table.
router.delete("/",(request,response)=>{
	var showtime_ID=request.body.showtime_ID; //request.body.showtime_ID;
	
	
	connection.query("DELETE FROM showtime WHERE showtime_ID="+showtime_ID,(err, records,fields)=>{
		if(err){
			console.log(err);
			console.log("Error when deleting the data");
		}
		else{
			response.send({delete:"Successfully deleted"});
		}
	})
})


module.exports = router;


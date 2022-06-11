var express = require("express");

var dbcon = require("./cinema_db");

//connect to database
var connection = dbcon.getconnection();
connection.connect((err)=> {
	if (err) throw err;
	console.log("Connected!");
});

//getting output in console from movies table
connection.query('SELECT * FROM movie', (err,rows) => {
  if(err) throw err;
  console.log('Data received from Db:');
});
  // getting output in console from showtime table
  connection.query("SELECT * FROM showtime", (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:");
    console.log(rows);
  });
  //movie table: movie_ID, title, genre, rating, description
  var sql =
    "CREATE TABLE movie (movie_ID int(5), title varchar(50), genre varchar(50), rating decimal(5,2), description varchar(255), PRIMARY KEY (id))";
  connection.execute(sql, (err, records) => {
    if (err) {
      console.log("Error while executing the SQL");
    } else {
      console.log("SQL is executed");
    }
  });
  
  //showtime: showtime_ID, movie_ID, time, location
  var sql =
    "CREATE TABLE showtime (showtime_ID int(5), movie_ID int(5), time datetime(YYYY-MM-DD), location varchar(20), PRIMARY KEY (showtime_ID))";
  connection.execute(sql, (err, records) => {
    if (err) {
      console.log("Error while executing the SQL");
    } else {
      console.log("SQL is executed");
    }
  });


  // inserting the value in movie table
  var sqlInsert = new Array();
  sqlInsert[0] =
    "INSERT INTO movie VALUES (1, 'Nehemia','Gold Coast', 3.4, 'hey')";
  sqlInsert[1] =
    "INSERT INTO movie VALUES (2, 'James','Sydney', 7.5, 'hi there')";
  sqlInsert[2] = "INSERT INTO movie VALUES (3, 'dig','perth', 7.9, 'dig up')";
  sqlInsert[3] =
    "INSERT INTO movie VALUES (4, 'nis','thriller', 8, 'awesome thriller')";
  sqlInsert[4] =
    "INSERT INTO movie VALUES (5, 'lost city','drama', 7.5, 'lost city')";
    sqlInsert[4] =
    "INSERT INTO movie VALUES (5, 'stranger things','thriller', 7.5, 'stranger things')";
  
    // functioning the loop to insert the value in movie table
  for (var i = 0; i < sqlInsert.length; i++) {
    connection.execute(sqlInsert[i], (err, records) => {
      if (err) {
        console.log("Error while executing the SQL");
      } else {
        console.log("SQL is executed");
      }
    });
  }
  
  //inserting the value in showtime table
  var sqlInsert2 = new Array();
  sqlInsert2[0] = "INSERT INTO showtime VALUES (1, 20,'2022-06-18', 'Gold Coast')";
  sqlInsert2[1] = "INSERT INTO showtime VALUES (2, 20, '2022-06-19', 'Gold Coast plaza')";
  sqlInsert2[2]="INSERT INTO showtime VALUES (3, 2,'2022-06-17','Melbourne')";
  sqlInsert2[3]="INSERT INTO showtime VALUES (4, 2,'2022-06-18','Sydney')";
  sqlInsert2[4]="INSERT INTO showtime VALUES (5, 3,'2022-06-17','Brisbane')";
  sqlInsert2[5]="INSERT INTO showtime VALUES (6, 3,'2022-06-20','Perth')";
  sqlInsert2[6]="INSERT INTO showtime VALUES (7, 4,'2022-06-20','Sydney')";
  sqlInsert2[7]="INSERT INTO showtime VALUES (8, 4,'2022-06-10','Perth')";
  sqlInsert2[8]="INSERT INTO showtime VALUES (9, 5,'2022-06-12','Melbourne')";
  sqlInsert2[9]="INSERT INTO showtime VALUES (10, 5,'2022-06-18','Perth')";
  
  // functioning the loop to insert the value in showtime table
  for (var i = 0; i < sqlInsert2.length; i++) {
    connection.execute(sqlInsert2[i], (err, records) => {
      if (err) {
        console.log("Error while executing the SQL");
      } else {
        console.log("SQL is executed");
      }
    });
  }
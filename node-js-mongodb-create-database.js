
// schoolManagementSystem is the new database we create
var url = "mongodb://localhost:27017/schoolManagementSystemDB";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
	var dbo = db.db("schoolManagementSystemDB"); //here
	console.log("Database created with name : " + dbo.s.databaseName);
    // print database name
    console.log("db object points to the database : "+ dbo.s.databaseName);
    // after completing all the operations with db, close it.
    db.close();
});
 
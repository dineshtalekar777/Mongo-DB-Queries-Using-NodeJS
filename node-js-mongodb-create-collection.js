// we create 'students' collection in schoolManagementSystemDB database
// var url = "mongodb://localhost:27017/schoolManagementSystemDB";
var url = "mongodb://localhost:27017/";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    // db pointing to schoolManagementSystemDB
	var dbo = db.db("schoolManagementSystemDB"); //here
    console.log("Switched to " + dbo.databaseName + " database");
    // create 'students' collection in schoolManagementSystemDB database
    dbo.createCollection("students", function(err, result) {
        if (err) throw err;
        console.log("Collection is created!");
        // close the connection to db when you are done with it
        db.close();
    });
});
 
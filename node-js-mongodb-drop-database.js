var url = "mongodb://localhost:27017/";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log("Connected to Database!");
	var dbase = db.db("schoolManagementSystemDB"); //here
	// print database name
    console.log("db object points to the database : " + dbase.databaseName);
    // delete the database
    dbase.dropDatabase(function(err, result){
        if (err) throw err;
        console.log("Operation Success ? " + result);
        // after all the operations with db, close it.
        db.close();
    });
});
 
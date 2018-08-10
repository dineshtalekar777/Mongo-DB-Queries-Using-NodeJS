var url = "mongodb://localhost:27017/";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
	// db pointing to schoolManagementSystemDB
	var dbo = db.db("schoolManagementSystemDB"); //here
    console.log("Switched to " + dbo.databaseName + " database");
    // get reference to collection
	dbo.collection("students").drop(function(err, delOK) {
		if (err) throw err;
		if (delOK) console.log("Collection deleted");
		db.close();
	});
});
 
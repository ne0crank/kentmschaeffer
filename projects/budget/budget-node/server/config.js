const config = {
 app: {
   host: 'localhost',
   port: 3000
 },
 db: {
   host: 'localhost',
   port: 27017,
   name: 'budget',
   opts: {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
     useFindAndModify: false,
     autoIndex: false, // Don't build indexes
     poolSize: 10, // Maintain up to 10 socket connections
     serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
     family: 4 // Use IPv4, skip trying IPv6
   }
 }
};

config.db.uri =
  `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
config.app.uri =
  `http://${config.app.host}:${config.app.port}`;

config.sendResponse = function(res,err,data){
  if (err){
    res.json({
      success: false,
      message: err
    })
  } else if (!data){
    res.json({
      success: false,
      message: "Not Found"
    })
  } else {
    res.json({
      success: true,
      data: data
    })
  }
};

module.exports = config;

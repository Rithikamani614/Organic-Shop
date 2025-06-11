// const mongoose = require('mongoose');


// const connectDb = () => {
//       mongoose.connect(process.env.DB_URL).then((con) => {
//         console.log('MongoDB connected to host:'+con.connection.host);
        
//       })
// };

// module.exports = connectDb;



// config/connectDb.js




const mongoose = require('mongoose');

const connectDb = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((con) => {
    console.log(` MongoDB connected to host: ${con.connection.host}`);
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  });
};

module.exports = connectDb;
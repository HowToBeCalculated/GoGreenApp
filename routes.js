// connect to DB 
/* const mysql = require('mysql')*/
const config = require('./config.json')

/* const connection = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    port: config.rds_port,
    database: config.rds_db
  }); */
/*   connection.connect((err) => err && console.log(err)); */

// signIn Route
const signIn = async function(req, res) {
    //Example of DB SQL query to enter in the route block
    /* connection.query(`SELECT * FROM Table WHERE login_name = '${req.params.log_in}';`, (err, data) => {
        if (err || data.length === 0) {
          console.log(err);
          res.json({});
        } else {
          res.json(data[0]);
        }
      }); */
}

// profile Routes
const profile = async function(req, res) {
    //TO BE IMPLEMENTED
}

// dashboard Routes
const dashboard = async function(req, res) {
    //TO BE IMPLEMENTED
}

// footprint Routes
const footprint = async function(req, res) {
    //TO BE IMPLEMENTED
}

// practice Routes
const practice = async function(req, res) {
    //TO BE IMPLEMENTED
}

// community Routes
const community = async function(req, res) {
    //TO BE IMPLEMENTED
}


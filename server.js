const express = require('express');

const morgan  = require('morgan')

const app = express();
app.use(morgan('combined'))

//check oracle connection
const oracledb = require('oracledb');
// bqmdev schema password
var password = 'Tm1m5u5R' 
// checkConnection asycn function
try {
  oracledb.initOracleClient({libDir: 'D:\\POCEXPRESSRESTAPI\\instantclient_19_6'});
} catch (err) {
  console.error('Whoops!');
  console.error(err);
  process.exit(1);
}

  

async function makeConnection() {
  try {
    connection = await oracledb.getConnection({
        user: "TMIMS",
        password: password,
        connectString: "127.0.0.1:1527/BQMDEV"
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      // try {
      //   // Always close connections
      //   await connection.close(); 
      //   console.log('close connection success');
      // } catch (err) {
      //   console.error(err.message);
      // }

      connection.execute(
        `SELECT *
         FROM DC_LOCATION`,
        [],  
       function(err, result) {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log(result.rows);
       });
  
    }
  }

  
  

}

makeConnection()


//rest api to output table location

const callapi = app.get('/api/location',(req,res)=>{

  connection.execute(
    `SELECT *
     FROM DC_LOCATION`,
    [],  
   function(err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(result.rows);
      res.send(result);
   });
})

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
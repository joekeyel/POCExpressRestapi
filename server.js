const express = require('express');
const morgan  = require('morgan')

const app = express();
app.use(morgan('combined'))

//check oracle connection
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
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

      // connection.execute(
      //   `SELECT *
      //    FROM DC_LOCATION`,
      //   [],  
      //  function(err, result) {
      //     if (err) {
      //       console.error(err.message);
      //       return;
      //     }
      //     console.log(result.rows);
      //  });
  
    }
  }

  
  

}

makeConnection()

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

const callapi2 = app.get('/api/user',(req,res)=>{

  connection.execute(
    `SELECT *
     FROM DC_USER`,
    [],  
   function(err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(result.rows);
      res.send({"users":result.rows});
   });

  
})


const callapi3 = app.get('/api/DC_NE_UTILIZATION/:siteName',(req,res)=>{

  connection.execute(
    `select (select count(*) from dc_rack d2 where d2.rack_site_id=d.rack_site_id and d2.rack_status='Unoccupied' group by rack_site_id)rack_utilized,
    (select count(*) from dc_rack d3 where d3.rack_site_id=d.rack_site_id and d3.rack_status='Registered' group by rack_site_id)rack_available,
    count(*) as total_rack,
    (select round(count(*)*100 / (select count(*) from dc_rack d4 where d4.rack_site_id=d.rack_site_id group by rack_site_id)) from dc_rack d2 where d2.rack_site_id=d.rack_site_id and d2.rack_status='Unoccupied' group by rack_site_id)rack_utilization
    from dc_rack d
    where d.rack_site_id=(select S.SITE_ID from dc_site s where s.site_name =:siteName)
    group by rack_site_id`,
    [req.params.siteName],  
   function(err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(result.rows);
      res.send({"sitename":result.rows});
   });

  
})




const dc_cage = app.get('/api/DC_CAGE/',(req,res)=>{

  let location = req.query.location
  let site  = req.query.site
  let query1 = ""


  if (site != null && location!=null) {
    query1=" where cage_site_id in (select site_id from dc_site where site_name='"+site+"') and cage_locn_id in (select locn_id from dc_location where locn_name='"+location+"')"
    } 
    else if (site != null && location==null) {
    query1=" where cage_site_id in (select site_id from dc_site where site_name='"+site+"')";
    }
    else if (site == null && location!=null) {
    query1=" where cage_locn_id in (select locn_id from dc_location where locn_name='"+location+"')";
    }
    else{
      query1="";
    };


  connection.execute(
    `select 
    CAGE_ID,
    (SELECT SITE_NAME FROM DC_SITE WHERE SITE_ID=CAGE_SITE_ID) as SITE_NAME,
    (SELECT LOCN_NAME FROM DC_LOCATION WHERE LOCN_ID=CAGE_LOCN_ID) as LOCATION_NAME,
    CAGE_NO,
    CAGE_SUITE_NO,
    CAGE_NO_RACK,
    CAGE_CONTRACTUAL_POWER,
    CAGE_CONTRACTUAL_SPACE_SIZE,
    CAGE_STATUS,
    CAGE_SERVICEID,
    (select cusr_name from dc_customer where cusr_id=cage_cusr_id) customer_name,
    CAGE_CREATED_BY,
    CAGE_CREATED_DT
    from dc_cage` + query1,
    [],  
   function(err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(query1);
      res.send(result);
   });
})

//closed connection



const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const oracledb = require('oracledb');


module.exports = function (app) {
const callapi3 = app.get('/api/DC_NE_UTILIZATION/:siteName',(req,res)=>{


  async function makeConnection() {
    try {
      connection = await oracledb.getConnection({
          user: "TMIMS",
          password: password,
          connectString: "10.54.8.162:1521/BQMDEV"
      });
      console.log('connected to database');
    } catch (err) {
      console.error(err.message);
    } finally {
      if (connection) {

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
  
    }
  }
}

  makeConnection()
    
  })
}
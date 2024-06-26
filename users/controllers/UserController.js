const conn = require('../../storage/connection');

module.exports = {
    registerUser: (req, res) => {
        
        var sql = `show DATABASES;`;
        
        conn.query(sql, (_err, rows) => {
            //console.log(rows);           
        })        
        sql = `INSERT INTO users (firstName, lastName, username, email, password, repeatPassword)
            VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [
            req.body.firstName, req.body.lastName, req.body.username, req.body.email, req.body.password, req.body.repeatPassword
        ];
        conn.query(sql, values, (_err, rows) => {
            console.log(rows);           
        })
        sql = `select * from users;`;
        conn.query(sql, (_err, rows) => {
            //console.log(rows);           
        })

        res.json({
             message: `Successfully added new user, Customer ID- ${req.body}`,
        });
       
     }
}
const mysql = require('mysqli')
const mysqlCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
    multipleStatements: true
})

const sqlDB = async () => {
    try {
        mysqlCon.connect((err) => {
            
        })
    } catch (error) {
        
    }
}
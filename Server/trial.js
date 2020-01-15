const Database = require('./Database/Database');


const db = new Database();

db.databaseConnection();

db.updateTable('PLAYED', 'PLAYED_TIMES','4', 'SONG_ID=101')
    .then(data => console.log(data))
    .catch(err => console.log(err.message))
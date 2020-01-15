const {Client} = require('pg');
const config = require('config');

const client = new Client({
    connectionString: config.get('DATABASE_URL')
});

class Database { 
    async databaseConnection() {
        try {
            await client.connect();
            console.log('connected to database . . .')
        } catch (err) {
            return err.message;
        }
    }

    async createTable(TABEL_NAME, TABLE_VALUES) {
        try {
            const response = await client.query(`CREATE TABLE ${TABEL_NAME}(${TABLE_VALUES});`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async insertIntoTabel(TABEL_NAME, KEYS ,TABLE_VALUES) {
        try {
            return await client.query(`INSERT INTO ${TABEL_NAME} ${KEYS} VALUES(${TABLE_VALUES})`);
        } catch (err) {
            return err.message;
        }
    }

    async updateTable(TABEL_NAME, KEY, VALUE, CONDITION) {
        try {
            return await client.query(`UPDATE ${TABEL_NAME} SET ${KEY}=${VALUE} WHERE ${CONDITION}`);

        } catch (err) {
            return err.message;
        }
    }

    async selectQuery (TABEL_NAME) {
        try {
            const response = await client.query(`SELECT * FROM ${TABEL_NAME}`);
            return response.rows;
        } catch (err) {     
            return err.message;
        }
    }

    async FindOne(TABLE, KEY, VALUE) {
        try {
            const response = await client.query(`SELECT * FROM ${TABLE} WHERE ${KEY}=${VALUE}`);
            return response.rows;
        } catch (err) {
            return err.message;
        }
    }
 }


module.exports = Database;




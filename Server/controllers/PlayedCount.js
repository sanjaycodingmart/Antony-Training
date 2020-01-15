const Database = require('../Database/Database');
const db = new Database();


exports.postPlayedCount = async (req, res, next) => {
    try {
        const {id} = req.body;
        const response = await db.FindOne('PLAYED', 'SONG_ID', id);
        if(response.length === 0) {
            await db.insertIntoTabel('PLAYED', `(SONG_ID,PLAYED_TIMES)`,`${id}, 0`);
        }
        return res.status(200).json({
            id,
            count: response[0].played_times
        });
    } catch (err) {
        console.log(err.message);
    }
}
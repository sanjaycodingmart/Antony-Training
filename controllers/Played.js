const Database = require('../Database/Database');
const db = new Database();


exports.postPlayed = async (req, res, next) => {
    try {
        const {id, times} = req.body;
        const data = await db.updateTable('PLAYED', 'PLAYED_TIMES',`${times}`, `SONG_ID=${id}`);
        res.status(200).json({
            data
        });
    } catch (err) {
        console.log(err.message);
    }
}
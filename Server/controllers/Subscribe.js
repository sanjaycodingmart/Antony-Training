
const Database = require('../Database/Database');

const db = new Database();

exports.postSubscribe = async (req, res, next) => {
    const {email} = req.body;

    try {
        await db.updateTable('SUBSCRIBE','SUBSCRIBED','TRUE',`EMAIL='${email}'`);
        res.status(200).json({
            msg: 'success'
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
    
}
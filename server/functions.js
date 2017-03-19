module.exports = {

    sendJSON: function(res, object) {
        res.send(JSON.stringify(object));
    }

};
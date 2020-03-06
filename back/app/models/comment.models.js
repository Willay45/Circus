const db = require('./database.model');

const Message = function(message) {
  this.pseudo = message.pseudo;
  this.comment = message.comment;
};

Message.create = (newMessage, result) => {
  db.query('INSERT INTO message SET ?', [newMessage], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newMessage });
  });
};

Message.findAll = result => {
  db.query('SELECT * FROM message', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};

module.exports = Message;

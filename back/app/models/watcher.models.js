const db = require('./database.model');

const Watcher = function(watcher) {
  this.snap = watcher.snap;
};

Watcher.create = (newWatcher, result) => {
  db.query('INSERT INTO watcher SET ?', [newWatcher], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newWatcher });
  });
};

Watcher.findAll = result => {
  db.query('SELECT * FROM watcher', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};

Watcher.delete = (id, result) => {
  db.query('DELETE FROM watcher WHERE id = ?', [id], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    if (dbResult.affectedRows === 0) {
      return result({ kind: 'not_found' }, null);
    }
    return result(null, dbResult);
  });
};

module.exports = Watcher;

const db = require('./database.model');

const Driver = function(driver) {
  this.pseudo = driver.pseudo;
  this.car = driver.car;
  this.snap = driver.snap;
};

Driver.create = (newDriver, result) => {
  db.query('INSERT INTO driver SET ?', [newDriver], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newDriver });
  });
};

Driver.findAll = result => {
  db.query('SELECT * FROM driver', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};


Driver.delete = (id, result) => {
  db.query('DELETE FROM drive WHERE id = ?', [id], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    if (dbResult.affectedRows === 0) {
      return result({ kind: 'not_found' }, null);
    }
    return result(null, dbResult);
  });
};

module.exports = Driver;

const db = require('./database.model');

const Memory = function(memory) {
  this.name = memory.name;
  this.price = memory.price;
  this.description = memory.description;
  this.capacity = memory.capacity;
  this.size = memory.size;
};

Memory.create = (newMemory, result) => {
  db.query('INSERT INTO memory SET ?', [newMemory], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newMemory });
  });
};

Memory.findAll = result => {
  db.query('SELECT * FROM memory', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};

Memory.update = (id, memory, result) => {
  db.query(
    'UPDATE memory SET ? WHERE id = ?',
    [memory, id],
    (error, response) => {
      if (error) {
        return result(error, null);
      }
      if (response.affectedRows === 0) {
        return result({ kind: 'not_found' }, null);
      }
      return result(null, { id: Number(id), ...memory });
    }
  );
};

Memory.delete = (id, result) => {
  db.query('DELETE FROM memory WHERE id = ?', [id], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    if (dbResult.affectedRows === 0) {
      return result({ kind: 'not_found' }, null);
    }
    return result(null, dbResult);
  });
};

module.exports = Memory;

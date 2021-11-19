const fs = require('fs');
const path = require('path');

module.exports = {
  datos: JSON.parse(fs.readFileSync(path.join(__dirname, 'index_db.json'), 'utf-8')),
  guardar: dato => fs.writeFileSync(path.join(__dirname, 'index_db.json'), JSON.stringify(dato, null, 2), 'utf-8')
}
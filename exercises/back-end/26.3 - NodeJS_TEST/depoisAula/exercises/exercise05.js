const fs = require('fs');

function exercise05(arquivo) {
  try {
    const read = fs.readFileSync(arquivo, "utf8")

    return read;
  } catch (error) {
    return null;
  };
};

module.exports = exercise05;
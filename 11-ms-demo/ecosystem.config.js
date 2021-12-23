const path = require("path");
const basePath = path.join(__dirname, "/packages");

module.exports = {
  apps : [{
    name : "Gateway",
    script: basePath + '/gateway/index.js',
    watch: true,
    env : {
      PORT : 3000,
      DB_SERVICE_PORT : 3001
    }
  }, {
    name : "DB_Service",
    script : basePath + '/db_service/src/app.js',
    watch : true,
    env : {
      PORT : 3001
    }
  }]
};

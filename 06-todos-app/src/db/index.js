const { connect } = require("mongoose")

const mongoLocalURI = "mongodb://localhost:27017/dxcDB";

connect(mongoLocalURI)
    .then(conn => {
        console.log("Mongo Connected...")
    })
    .catch(err => {
        console.log(err)
        process.exit(1);
    })

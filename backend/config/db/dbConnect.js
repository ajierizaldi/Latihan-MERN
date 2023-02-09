const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:2QTCCW3Cse9K6euO@task-api.hgqxpkp.mongodb.net/?retryWrites=true&w=majority", {
            // useCreateIndex: true,
            // useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Database connected");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

module.exports = dbConnect;
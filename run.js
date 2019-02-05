// const login = require('./rh-actions/login');
// const getTrendAndSave = require('./app-actions/get-trend-and-save');

const mongoose = require('mongoose');
const { mongoConnectionString } = require('./config');

// const Pick = require('./models/Pick');
try {
    mongoose.connect(mongoConnectionString, { useNewUrlParser: true });
} catch (e) {
    log('error connecting to mongo')
}



// node run [filename goes here]
require('./globals');

(async () => {
    // console.log('asd')
    // console.log(process.argv, 'ps');
    // let Robinhood = await login();
    // global.Robinhood = Robinhood;
    const argPath = process.argv[2];
    let relatedFile = require(`./${argPath}`);

    const restArgs = process.argv.slice(3)
        .map(arg => arg === 'true' ? true : arg)
        .map(arg => arg === 'false' ? false : arg);

    const fnToRun = relatedFile.default || relatedFile;
    const response = await fnToRun(...restArgs);
    console.log('response');
    console.log(JSON.stringify(response, null, 2));

    mongoose.connection.close();
})();

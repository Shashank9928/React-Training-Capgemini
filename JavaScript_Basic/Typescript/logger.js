function log(message) {
    console.log(message);
}

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
}

module.exports.log = log;
module.exports.doSomething = doSomething;
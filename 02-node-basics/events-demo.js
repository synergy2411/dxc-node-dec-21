const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

emitter.setMaxListeners(25);
// Subscription / Registration / ListenerFunctions

const fooHandlerFn = (data) => {
  console.log("Foo Handler Function 2 with message : ", data.message);
};


for (let i = 0; i <= 20; i++) {
  emitter.on("FOO", fooHandlerFn);
}

emitter.on("FOO", (data) => {
  console.log("Foo Handler Function 1 with message : ", data.message);
  // emitter.removeListener("FOO", fooHandlerFn);
});

emitter.emit("FOO", { message: "SUCCESS" });
emitter.emit("FOO", { message: "WARNING" });
emitter.emit("FOO", { message: "ERROR" });

// process.on("exit", (code) => {
//     console.log("Process is exiting....", code)
// })

// process.exit(1);

// process.on("uncaughtException", () => {
//     console.log("Exception occured...")
// })

// nonExitingFunction()

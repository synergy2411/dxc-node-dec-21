const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../src/app");
const { TodoModel } = require("../src/model/todo.model");

chai.use(chaiHttp);

describe("Todo App Suit", () => {
  beforeEach(async () => {
    await TodoModel.deleteMany();
  });

  it("Should return all todos item", (done) => {
    chai
      .request(app) // http://localhost:9090
      .get("/todos")
      .end((err, response) => {
        chai.expect(response.status).to.be.eql(200);
        chai.expect(response.body).to.be.a("array");
        chai.expect(response.body.length).to.be.eql(0);
        done(); // notify the mocha for completion of Async task
      });
  });

  it("Should create single todo item", (done) => {
    const newTodo = new TodoModel({ label: "honk honk", status: true });
    chai
      .request(app)
      .post("/todos")
      .send(newTodo)
      .end((err, response) => {
        chai.expect(response.status).to.be.eql(200);
        chai.expect(response.body.label).to.be.eql("honk honk")
        chai.expect(response.body.status).to.be.true;
        chai.expect(response.body._id).not.to.be.undefined;
        done();
      });
  });

  it("Should return single todo item", (done) => {
      const newTodo = new TodoModel({label : "to pot the plants", status : false})
      newTodo.save()
        .then(result => {
            chai.request(app)
                .get("/todos/"+newTodo._id)
                .end((err, response) => {
                    chai.expect(response.status).to.be.eql(200);
                    chai.expect(response.body.label).to.be.eql("to pot the plants")
                    chai.expect(response.body.status).to.be.false
                    chai.expect(response.body._id).not.to.be.undefined
                    done()
                })
        })
  })
});

// describe("Simple Test Suite", () => {
//     describe("Simple Test 01", () =>{
//         it("First Test Statement", () => {

//         })

//         it("Should use assert library", () => {
//             assert.equal(true, true, "Assert failed!!!")
//         })
//     })

// })

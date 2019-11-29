var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/registration", function(req, res) {
  console.log("Verified");
  console.log(req.body);
  res.status(400).send({
    errors: {
      password: ["Password does not match."]
    },
    title: "One or more validation errors occurred.",
    status: 400,
    traceId: "0HLOKR6L7GCSI:00000001"
  });

  res
    .status(201)
    .cookie("cookieName", "MycookieValue", {
      domain: ".example.com",
      path: "/admin",
      secure: true
    })
    .send({});
});

app.post("/registration/verify", function(req, res) {
  console.log("Verified");
  console.log(req.body);
  // res.status(400).send({
  //   errors: {
  //     phoneNumber: ["The OTP was not valid."]
  //   },
  //   title: "One or more validation errors occurred.",
  //   status: 400,
  //   traceId: "0HLOKR6L7GCSI:00000001"
  // });

  res.status(200).send("ok");
});

app.post("/registration/start", function(req, res) {
  console.log("registering");
  console.log(req.body);
  setTimeout(() => {
    // res.status(400).send({
    //   errors: {
    //     phoneNumber: ["The input was not valid."],
    //     email: ["Email already exists"]
    //   },
    //   title: "One or more validation errors occurred.",
    //   status: 400,
    //   traceId: "0HLOKR6L7GCSI:00000001"
    // });

    res.status(200).send({
      token: 51515451545155
    });
  }, 3000);
});

app.post("/company/setup", function(req, res) {
  console.log("Company setup");
  console.log(req.body);

  setTimeout(() => {
    res.status(400).send({
      errors: {
        city: [
          "The input was not valid ",
          "You should select from the provided options only ",
          "Third message ",
          "Fourth message ",
          "Fifth Message "
        ],
        state: ["State is not known"]
      },
      title: "One or more validation errors occurred.",
      status: 400,
      traceId: "0HLOKR6L7GCSI:00000001"
    });

    // res.status(500).send({
    //   Messages: ["Server did not respond"]
    // });
  }, 3000);
});

app.listen(5001, () => {
  console.log("Registrartion Server started at 5001");
});

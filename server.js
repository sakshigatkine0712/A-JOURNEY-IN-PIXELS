const express = require("express");// This line initializes an Express application.
const router = express.Router();
const cors = require("cors");//This line adds middleware to enable Cross-Origin Resource Sharing (CORS), which allows your server to handle requests from different domains.
const nodemailer = require("nodemailer");

// server used to  send emails
const app = express();
app.use(cors());
app.use(express.json());//This line adds middleware to enable Cross-Origin Resource Sharing (CORS), which allows your server to handle requests from different domains.
app.use("/", router);//This line mounts a router at the root path ("/"). This means that any routes defined in the router object will be accessible under the root URL of your server.
app.listen(3000, () => console.log("Server Running"));// This line starts the Express server on port 3000 and logs a message to the console when the server is running.
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "*****************@gmail.com",
    pass: ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "*****************@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
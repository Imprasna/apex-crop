import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import bookNowHandler from "./routes/bookNowRoute.js";
import contactFormHandler from "./routes/contactFormRoute.js";
import registrationForm from "./routes/registrationForm.js";
import { cms } from "./routes/cms.js";
import otpvalidation from "./routes/otp-validation.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.post("/booknow", bookNowHandler);
app.post("/contact-form", contactFormHandler);
app.post("/registration-form", registrationForm);
app.post("/cms/tournament", cms);

app.post("/cms/validation", otpvalidation);

app.listen(7000, () => {
  console.log("Server running on port 7000");
});

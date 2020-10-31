import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.HOST_API || "",
  port: Number(process.env.PORT) || 2525,
  auth: {
    user: process.env.USER_API || "",
    pass: process.env.PASS_API || "",
  },
});

export default transport;

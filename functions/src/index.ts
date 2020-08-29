import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as moment from "moment";

const email = functions.config().gmail.email;
const password = functions.config().gmail.password;
const username = functions.config().gmail.username;
const to = functions.config().to.email;

moment.locale("ja");
const now = () => moment().format("lll");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

/**
 * 在宅勤務開始メール
 */
export const sendDiligenceStartEmail = functions.https.onRequest(
  async (request, response) => {
    try {
      await transporter.sendMail({
        from: email,
        subject: `在宅勤務開始（${username}）${now()}`,
        text: `${username}です。本日の在宅勤務を開始いたします。`,
        to,
      });

      response.send("在宅勤務開始メール送信完了");
    } catch (error) {
      functions.logger.error(error);
      response.status(500).send(`${email},${password} error`);
    }
  }
);

/**
 * 在宅勤務終了メール
 */
export const sendDiligenceEndEmail = functions.https.onRequest(
  async (request, response) => {
    try {
      await transporter.sendMail({
        from: email,
        subject: `在宅勤務終了（${username}）${now()}`,
        text: `${username}です。本日の在宅勤務を終了いたします。`,
        to,
      });
      response.send("在宅勤務終了メール送信完了");
    } catch (error) {
      response.status(500).send(email);
    }
  }
);

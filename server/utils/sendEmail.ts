import nodemailer from 'nodemailer';
import { UserProfile } from '../common/interface';
import addMailInQueue from './emailScheduler';

const sendEmail = async (emailList: Array<UserProfile>): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.EMAIL_ACCOUNT_USER,
      pass: process.env.EMAIL_ACCOUNT_PASS,
    },
  });
  emailList.forEach((userDetails) => {
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SANTA_EMAIL,
      subject: `[Wish Request] ${userDetails.username}`,
      html: `<b>Hello Santa</b><br><p>${userDetails.username} wants these gifts ${userDetails.wish}.<br> Please Deliver to below address<br>Address: ${userDetails.address}</p>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {return addMailInQueue(userDetails);}

      return info;
    });
  });
};

export default sendEmail;

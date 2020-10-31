import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";

function genToken(id: number) {
  return jwt.sign({ id }, process.env.SECRET || "secret", {
    expiresIn: 86400,
  });
}
async function verifyToken(token: string) {
  return await jwt.verify(token, process.env.SECRET || "secret");
}

const UserController = {
  async index(req: Request, res: Response) {
    const userRepository = getRepository(User);

    const result = await userRepository.find();
    return res.status(200).json(result);
  },
  async show(req: Request, res: Response) {
    const userRepository = getRepository(User);

    const result = await userRepository.findOne(req.params.id);
    return res.status(200).json(result);
  },
  async store(req: Request, res: Response) {
    const userRepository = getRepository(User);

    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Missing paramater" });
    }
    const { name, email, password } = req.body;

    const userStored = await userRepository.findOne({ email });
    if (userStored) {
      return res.status(400).json({ message: "Email already exists" });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      const user = userRepository.create({
        name,
        email,
        password: hash,
      });

      const result = await userRepository.save(user);
      return res.status(201).json({ message: "SUCCESS", result });
    });
  },
  async update(req: Request, res: Response) {
    const userRepository = getRepository(User);

    if (req.body.email) {
      const { email } = req.body;

      const userStored = await userRepository.findOne({ email });
      if (userStored) {
        return res.status(400).json({ message: "Email already exists" });
      }
    }

    if (req.body.password) {
      if (!req.body.oldPassword)
        return res
          .status(400)
          .json({ message: "Missing paramater (Old Password)" });

      const { password, oldPassword } = req.body;
      const userStored = await userRepository.findOne(req.params.id);

      if (!userStored)
        return res.status(400).json({ message: "User doesn't exist" });

      const comparePass = bcrypt.compareSync(oldPassword, userStored.password);

      if (!comparePass)
        return res.status(400).json({ message: "Password doesn't match" });

      bcrypt.hash(password, 10, async function (err, hash) {
        userRepository.merge(userStored, { password: hash });
        const result = await userRepository.save(userStored);
      });

      return res.status(200).json({ message: "Password updated" });
    }

    const user = await userRepository.findOne(req.params.id);
    if (!user) return res.status(400).json({ message: "User doesn't exist" });

    userRepository.merge(user, req.body);
    const result = await userRepository.save(user);

    return res.status(200).json({ message: "User Updated", result });
  },
  async destroy(req: Request, res: Response) {
    const userRepository = getRepository(User);

    const result = await userRepository.delete(req.params.id);
    return res.status(200).json({ message: "SUCCESS", result });
  },
  async authenticate(req: Request, res: Response) {
    const userRepository = getRepository(User);

    try {
      const { email, password } = req.body;

      const user = await userRepository.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User doesn't exist" });
      }
      const comparePass = bcrypt.compareSync(password, user.password);

      if (!comparePass) {
        return res.status(400).json({ message: "Password doesn't match'" });
      }

      const token = genToken(user.id);

      return res.json({
        name: user.name,
        email,
        token,
      });
    } catch (err) {
      console.log(err);
    }
  },
  async forgotPass(req: Request, res: Response) {
    const userRepository = getRepository(User);

    if (!req.body.email)
      return res.status(400).json({ message: "Please provide an email!" });

    const user = await userRepository.findOne({ email: req.body.email });

    if (!user) return res.status(400).json({ message: "User doesn't exist" });

    const chars =
      "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pass = "";
    for (var i = 0; i < 10; i++) pass += chars.charAt(Math.random() * 61);

    bcrypt.hash(pass, 10, async function (err, hash) {
      userRepository.merge(user, { password: hash });
      const result = await userRepository.save(user);
    });

    sgMail.setApiKey(process.env.MAIL_API_KEY || "");
    const msg = {
      to: user.email,
      from: process.env.SENDER_MAIL || "",
      subject: "Recuperação de senha!",
      text: `Olá, ${user.name}. Sua nova senha é: ${pass}`,
      html: `<h3 style="font-family: sans-serif">Olá, ${user.name}.</h3>
      <p style="font-family: sans-serif">Sua nova senha é: ${pass}</p>`,
    };
    try {
      await sgMail.send(msg);
      console.log("Email sent");
    } catch (error) {
      console.error(error);
    }
    res.send();
  },
};

export default UserController;

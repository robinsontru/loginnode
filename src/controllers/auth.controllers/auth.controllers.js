import jwt from "jsonwebtoken";
import { Usuario } from '../../models/dase_de_datos.model.js'
import bcrypt from "bcrypt";

 import  handleHttpError  from "../auth.controllers/token.js";
import { matchedData } from "express-validator";
import tokenSign  from "../auth.controllers/token2.js";
import { sequelize } from "../../database/database.js";



export async function registro(req, res) {

  const { contraseña, correo_eletronico } = req.body;
  // console.log(correo_eletronico+'/'+''+contraseña);
  let passHash = await bcrypt.hash(contraseña, 8)
  try {
    const newPersonas = await sequelize.create(
      {contraseña: passHash,correo_eletronico,},
      {fields: ["contraseña", "correo_eletronico"]});
   
   return res.json(newPersonas);
  } catch (error) {
    res.status(500).json({ message: error.message, });
  }
}

export async function login2(req, res) {
  try {
    console.log(correo_eletronico + '/' + '' + contraseña);

    req = matchedData(req);
    const correo_eletronico = await Usuario.findOne({ correo_eletronico: req.correo_eletronico })
    if (!correo_eletronico) {
      console.log(correo_eletronico + '/' + '' + contraseña);

      handleHttpError(res, 'usuario no registrado', 402);
   
      return
    }
    const hashPassword = correo_eletronico.get('contraseña');
    const check = await compare(req.contraseña, hashPassword)
    if (!check) {
      handleHttpError(res, 'contraseña incorrecta', 401);
      return
    }
    correo_eletronico.set('contraseña', undefined, { strict: false })
    const data = {
      token: await tokenSign(correo_eletronico),
      correo_eletronico
    }
    res.send({ data })

  }
  catch (error) {
    handleHttpError(res, "ERROR_CORREO_ELETONICO")
  }
}


export async function get(req, res) {
  try {
    const usuario = await Usuario.findAll({
      atributes: ["contraseña", "correo_eletronico"],
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message, });
  }


}



export async function login(req, res) {
  // const correo_eletronico = req.body.correo_eletronico
  // const contraseña = req.body.contraseña
  try {
    const { correo_eletronico, contraseña } = req.body;

    //find a user by their email
    const sequelize = await Usuario.findOne({
      where: {
        correo_eletronico: correo_eletronico
      }

    });

    //if user email is found, compare password with bcrypt
    if (sequelize) {
      const isSame = await bcrypt.compare(contraseña, sequelize.contraseña);

      //if password is the same
      //generate token with the user's id and the secretKey in the env file

      if (isSame) {
        const token = jwt.sign({ id: sequelize.id }, process.env.JWT_SECRET, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,

        },
        );

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the user
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(Usuario, null, 2));
        console.log(token);
        //send user data
        res.status(201).send(user);
      } else {
        res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
}






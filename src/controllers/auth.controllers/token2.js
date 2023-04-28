import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

import  getProperties from "../auth.controllers/token3.js";
const propertiesKey = getProperties()
/**
 * Debes de pasar el objecto del usario
 * @param {*} user
 */
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return sign
};

/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(e){
        return null
    }
};

export default  { tokenSign, verifyToken };

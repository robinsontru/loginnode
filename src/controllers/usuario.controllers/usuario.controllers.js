// import { Usuario }from "../usuario.controllers/user.sql.js";
import { Usuario } from "../../models/dase_de_datos.model.js";

export async function getusuarios(req, res) {
    try {
      const usuario = await Usuario.findAll({
        atributes: [ "contraseña","correo_eletronico"],
      });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({message: error.message,});
    }
    // res.json('HOLA');
    // console.log('loha');
    
  }

  export async function crearusuario (req, res) {
  const {contraseña,correo_eletronico}=req.body;
    try {
const newPersonas = await Usuario.create(
  {
    contraseña,
    correo_eletronico,
  },{
    fields:["contraseña","correo_eletronico"]
  }
);
return res.json(newPersonas);
  } catch (error) {
    res.status(500).json({ message: error.message,});
  }}
export async function getusuario (req,res){
  const {id} = req.params;
  try {
const usuario = await Usuario.findOne({
  where:{ 
    id,
  }
})
  res.json(persona)

  } catch (error) {
    res.status(500).json({ message: error.message,});
 }}
export async function editarusuario(req,res){
  try {
    const {id}= req.params;
    const { contraseña,correo_eletronico,}=req.body;
    const usuario = await Usuario.findByPk(id)
    usuario.contraseña=contraseña
    usuario.correo_eletronico=correo_eletronico
    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}


export async function eliminarusuario (req,res){
  const {id} = req.params;
  try {
    await Usuario.destroy({
      where:{
      id:id
      }
    })


 await Usuario.destroy({
  where:{
    id,
  }
  
})
return res.sendStatus(204);

  } catch (error) {
    res.status(500).json({ message: error.message,});
 }

}
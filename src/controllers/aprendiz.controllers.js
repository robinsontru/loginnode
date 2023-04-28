// import { Usuario }from "../usuario.controllers/user.sql.js";
import { Aprendiz } from "../models/dase_de_datos.model.js";

export async function getaprendiz (req, res) {
    try {
      const aprendiz = await Aprendiz.findAll({
        atributes: ["nombre","tipo_documentos","numero_ficha"],
      });
      res.json(aprendiz);
    } catch (error) {
      res.status(500).json({message: error.message,});
    }

    
  }

export async function crearaprendiz (req, res) {
   const {nombre,tipo_documentos,numero_ficha}=req.body;
     try {
const newAprendiz = await Aprendiz.create(
  {
    nombre,
    tipo_documentos,
    numero_ficha
  },{
    fields:["nombre","tipo_documentos","numero_ficha"]
  }
);
return res.json(newAprendiz);
  } catch (error) {
    res.status(500).json({ message: error.message,});
  }}


export async function getusuario (req,res){
  const {id} = req.params;
  try {
const aprendiz = await Aprendiz.findOne({
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
    const aprendiz = await Aprendiz.findByPk(id)
    aprendiz.contraseña=contraseña
    aprendiz.correo_eletronico=correo_eletronico
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
    await Aprendiz.destroy({
      where:{
      id:id
      }
    })

 await Aprendiz.destroy({
  where:{
    id,
  }
  
})
return res.sendStatus(204);

  } catch (error) {
    res.status(500).json({ message: error.message,});
 }

}
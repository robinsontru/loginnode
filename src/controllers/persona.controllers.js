import { Persona }from "../models/dase_de_datos.model.js";

export async function getpersonas(req, res) {
    try {
      const persona = await Persona.findAll({
        atributes: ["id","nombre", "apellido", "direccion", "telefono", "contraseña","correo_eletronico","n_documento","t_documento"],
      });
      res.json(persona);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    // res.json('HOLA');
    // console.log('loha');
    
  }

  export async function crearpersona(req, res) {
  const {nombre, apellido, direccion, telefono, contraseña,correo_eletronico,n_documento,t_documento}=req.body;
    try {
const newPersonas = await Persona.create(
  {
    nombre,
    apellido,
    direccion, 
    telefono, 
    contraseña,
    correo_eletronico,
    n_documento,
    t_documento,

  },{
    fields:["nombre", "apellido", "direccion", "telefono", "contraseña","correo_eletronico","n_documento","t_documento"]
  }
);
return res.json(newPersonas);
  } catch (error) {
    res.status(500).json({ message: error.message,});
  }
  
  }


export async function getpersona (req,res){
  const {id} = req.params;
  try {
const persona = await Persona.findOne({
  where:{
    id,
  }
})
  res.json(persona)

  } catch (error) {
    res.status(500).json({ message: error.message,});
 }

}


export async function editarpersona(req,res){
  try {
    const {id}= req.params;
    const {nombre, apellido, direccion, telefono, contraseña,correo_eletronico,n_documento,t_documento}=req.body;
    const persona = await Persona.findByPk(id)
    persona.nombre= nombre
    persona.apellido=apellido
    persona.direccion=direccion
    persona.telefono=telefono
    persona.contraseña=contraseña
    persona.correo_eletronico=correo_eletronico
    persona.n_documento=n_documento
    persona.t_documento=t_documento
    res.json(persona);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}


export async function eliminarpersona (req,res){
  const {id} = req.params;
  try {
    await Persona.destroy({
      where:{
      id:id
      }
    })


 await Persona.destroy({
  where:{
    id,
  }
  
})
return res.sendStatus(204);

  } catch (error) {
    res.status(500).json({ message: error.message,});
 }

}
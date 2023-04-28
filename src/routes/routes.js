import { Router } from "express";
import { getpersonas,crearpersona,getpersona,editarpersona,eliminarpersona } from "../controllers/persona.controllers.js";
const router=Router()
router.get('/persona',getpersonas)
router.post('/persona',crearpersona)
router.put('/persona/:id',editarpersona)
 router.delete('/persona/:id',eliminarpersona)
 router.get('/persona/:id',getpersona)

 //RUTA DE USUARIO
 import {getusuario,getusuarios,eliminarusuario,editarusuario,crearusuario} from "../controllers/usuario.controllers/usuario.controllers.js";

 router.get('/usuario',getusuarios)
 router.post('/usuario',crearusuario)
 router.put('/usuario/:id',editarusuario)
  router.delete('/usuario/:id',eliminarusuario)
  router.get('/usuario/:id',getusuario) 

 //RUTA DE APRENDIZ
 import {getaprendiz,crearaprendiz} from "../controllers/aprendiz.controllers.js";

 router.get('/aprendiz',getaprendiz)
 router.post('/aprendiz',crearaprendiz)
 router.put('/aprendiz/:id',)
  router.delete('/aprendiz/:id',)
  router.get('/aprendiz/:id',)  
//RUTA LOGIN


import {registro,get,login,login2  } from "../controllers/auth.controllers/auth.controllers.js";

router.post('/registro',registro )
router.post('/login',login )
router.post('/login2',login2 )
router.get('/registro', get)


export default router;
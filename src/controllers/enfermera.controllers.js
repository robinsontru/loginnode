//importamos  la db de enfermeras

import {Enfermera  } from "../models/dase_de_datos.model.js";
 export async function getenfermera (req,res){
    try {
        const enfermera = await Enfermera.findAll({
            atributes:[""]
        })
    } catch (error) {
        
    }
 }

// import { DataTypes } from "sequelize";

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


//tabla de persona
export const Persona = sequelize.define(
  "persona",
  {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      nombre: {
          type: DataTypes.STRING,
      },
      apellido: {
          type: DataTypes.STRING,
      },
      direccion: {
          type: DataTypes.STRING,

      },
      telefono: {
          type: DataTypes.BIGINT,

      },
      contraseña: {
          type: DataTypes.STRING,
      },
      correo_eletronico: {
          type: DataTypes.STRING,
      },
      
      n_documeto: {
      type: DataTypes.INTEGER,
      },
      t_documento: {
          type: DataTypes.STRING,
      },
      
  }
);

//tabla de usuario
export const  Usuario = sequelize.define(
  "usuario",
  {

    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,},

    correo_eletronico: {
      type: DataTypes.TEXT,  
      primaryKey:true
    },

    contraseña: {
      type: DataTypes.TEXT,

    },
    

  }
);

//tabla e aprendiz
export const Aprendiz = sequelize.define(
  "aprendiz",
  {

    numero_ficha: {
      primaryKey: true,
    type: DataTypes.INTEGER,
   
    }
  
  },

);

//tabla psicologa 
 const psicologa = sequelize.define(
  "psicologa",
  {
  
   
    t_profesional: {
      primaryKey: true,
      type: DataTypes.STRING,
    }
  }
);

//tabla enfermera
 const enfermera = sequelize.define(
  "enfermera",
  {
  
    t_profesional: {
      primaryKey: true,
      type: DataTypes.STRING,
    },

  }
);


//tabla evento
const eventos = sequelize.define(
  "eventos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },    
    Image: {
      type:DataTypes.STRING
       }
  }
);

//tabla cronograma
 const cranograma = sequelize.define(
  "cranograma",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    hora: {
        type: DataTypes.TIME,
      },
      
    lugar: {
        type: DataTypes.STRING,
      }
  }
);

//tabla citas
 const cita = sequelize.define(
  "cita",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    informe : {
      type: DataTypes.STRING,
    },

  }
);

///tabla comentarios
 const comentarios = sequelize.define(
  "comentarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cometarios: {
      type: DataTypes.STRING,
    }

  }
);
//tabla juegos
 const juegos = sequelize.define(
  "juegos",
  {
    nombre: {
        type: DataTypes.STRING,
        primaryKey: true,
  
      },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    }
 
  }
);


//relacio de uno a muchos persona a usuario
Persona.hasMany(Usuario, { foreignKey: 'usuario-personaId' });
Usuario.belongsTo(Persona, { foreignKey: 'usuario-personaId' });

//aprendiz aprendiz a usuario
// Aprendiz.hasMany(Usuario, { foreignKey: 'usuario-aprendizId' });
// Usuario.belongsTo(Aprendiz, { foreignKey: 'usuario-aprendizId' });

//relacio de uno a muchos aprendiz a comentarios 
Aprendiz.hasMany(comentarios, { foreignKey: 'aprendiz-cometariosId' });
comentarios.belongsTo(Aprendiz, { foreignKey: 'aprendiz-cometariosId' });


//relacio de uno a muchos usuario  a psicologa   
// Usuario.hasMany(psicologa, { foreignKey: 'persona-psicologaId' });
// psicologa.belongsTo(Usuario, { foreignKey: 'persona-psicologaId' });


//relacio de uno a muchos spicologa a citas 
psicologa.hasMany(cita, { foreignKey: 'cita-psicologaId' });
cita.belongsTo(psicologa, { foreignKey: 'cita-psicologaId' });


//relacio de uno a muchos enfermera a eventos
enfermera.hasMany(eventos, { foreignKey: 'enfermera-eventoId' });
eventos.belongsTo(enfermera, { foreignKey: 'enfermera-eventoId' });


////relacio de uno a muchos aprendiz a cita
Aprendiz.hasMany(cita, { foreignKey: 'cita-aprendizId' });
cita.belongsTo(Aprendiz, { foreignKey: 'cita-aprendizId' });


////relacio de uno a muchos eventos a cronocrama
eventos.hasMany(cranograma, { foreignKey: 'eventos-cronogramaId' });
cranograma.belongsTo(eventos, { foreignKey: 'eventos-cronogramaId' });



////relacio de uno a muchos citas a cronocrama
cita.hasMany(cranograma, { foreignKey: 'cita-cronogramaId' });
cranograma.belongsTo(cita, { foreignKey: 'cita-cronogramaId' });

////relacio de uno a muchos aprendiz a juegos
Aprendiz.hasMany(juegos, { foreignKey: 'juegos-aprendizId' });
juegos.belongsTo(Aprendiz, { foreignKey: 'juegos-aprendizId' });


// //relacio de uno a muchos efermera  a usuario   
// Usuario.hasMany(enfermera, { foreignKey: 'persona-usuarioId' });
// enfermera.belongsTo(Usuario, { foreignKey: 'persona-usuarioId' });
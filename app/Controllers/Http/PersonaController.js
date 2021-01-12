'use strict'

const Persona = require("../../Models/Persona")
const { validateAll } = use ('Validator')
//const { all } = require("../../Models/Persona")

const personacontro = use ('App/Models/Persona')

class PersonaController {



    async index ({params = id}){
 
        if( params.id) {return await personacontro.findOrFail (params.id)  }


        else {return await personacontro.all () }
        
        
    }


    async actualizar ({request, response, params=id}){
      const input = request.all()

      
       const validation = await validateAll(input, {
        'nombre':'required|min:3|max:100',
        'apellido':'required|min:3|max:100',
        'sexo':'required|min:1|max:100',
        'edad':'required|min:1|max:3'
       })
       if(validation.fails()){
           return response.json(validation.messages(),400) 
       }

      await personacontro.query().where('id',params.id).update(input)

      if (personacontro.query().where('id',params.id).update(input)){
      return response.json(['Actualizado',await personacontro.findOrFail(params.id)],200)
      }
  }





    async insertar({request, response,}){


      const input = request.all();


      //Validacion
      const validation = await validateAll(input, {

        'nombre':'required|min:3|max:100',
        'apellido':'required|min:3|max:100',
        'sexo':'required|min:3|max:100',
        'edad':'required|min:1|max:3'


      })


      if(validation.fails()){

return validation.messages();

      }
      await Persona.create(input);

      return response.json({
        rer:true,
        message:"Registro correcto"
      })

      
    }


    
  async Borrar({response,params=id}){
    const Borr = await personacontro.findOrFail(params.id)
    await Borr.delete()

    if (Borr.delete()){
        return response.json(['Se borro'],200)
    }
  }

}




module.exports = PersonaController

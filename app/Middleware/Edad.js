'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Edad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle  ({ request,response }, next) {
    // call next to advance the request
   
    
    if (request.header('edad')>18){
      
      await next()

     

    }
   
else{
    return response.json({mensaje:"Error"}) 

}
  }
}

  

module.exports = Edad

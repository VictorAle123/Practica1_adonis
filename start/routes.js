'use strict'

const PersonaController = require('../app/Controllers/Http/PersonaController')
const Edad = require('../app/Middleware/Edad')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }



})

Route.get('datos/:id?', 'PersonaController.index' ).middleware(['edad'])

Route.post('insertar', 'PersonaController.insertar' ).middleware(['guest'])

Route.put('actualizar/:id','PersonaController.actualizar')

Route.delete('borrar/:id','PersonaController.Borrar')

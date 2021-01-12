'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */


const Factory = use('Factory');
 Factory.blueprint('App/Models/Persona', (faker) => {
 return {
    nombre: faker.username(),
    apellido: faker.username(),
    sexo: 'M',
    edad: '19' 
   }
 });


/**
const Factory = use('Factory')
const Hash = use('Hash')

const usersArray = await Factory
  .model('App/Models/Persona')
  .createMany(5)

Factory.blueprint('App/Models/Persona', async (faker) => {
  return {
    nombre: faker.username(),
    apellido: faker.username(),
    sexo: faker.email(),
    edad: faker.email(),



    password: await Hash.make(faker.password())
  }




})

 */
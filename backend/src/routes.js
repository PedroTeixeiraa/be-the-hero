const express = require('express')

// CONTROLLERS
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController') 

const routes = express.Router()

// ONG CONTROLLER
routes.get('/ongs', OngController.list)
routes.post('/ongs', OngController.create)

// INCIDENT CONTROLLER
routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.list)
routes.delete('/incidents/:id', IncidentController.delete)

// PROFILE CONTROLLER
routes.get('/profile', ProfileController.list)

// SESSION CONTROLLER
routes.post('/sessions', SessionController.create)

module.exports = routes
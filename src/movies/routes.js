const express = require('express')
const api = express.Router()
const responseHelper = require('../helpers/response.helper')
const Di = require('../awilix')

// console.log(Di.container.registrations);

api.post('/create', async (req, res) => {
    try{
        const result = await Di.container.resolve('crudMoviesCtrl').createMovie(req.body)
        responseHelper.successResponse(res, result)
    } catch(e){
        responseHelper.errorResponse(res, e)
    }
})

api.get('/most-watched', async (req, res) => {
    try{
        const {limit, skip} = req.query
        const result = await Di.container.resolve('mostWatchedMoviesCtrl')(limit, skip)
        responseHelper.successResponse(res, result)
    }catch(e){
        responseHelper.errorResponse(res, e)
    }
})

module.exports = api

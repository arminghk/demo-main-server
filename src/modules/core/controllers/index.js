const express = require("express");

const routersInit = (appModels, { config }) => {
    const router =  express.Router()

    router.get('/',(req,res)=>{
        res.json('hi armin')
    })
    return router
};

module.exports = routersInit;

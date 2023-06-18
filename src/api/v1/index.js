const express = require('express');






const prepare = (config)=>{


    let appModules = {}
    let appModels = {}

    const moduleConfig =  config && (config.moduleConfig || [])

    moduleConfig.forEach(module => {
        appModules[module.name] = {}

        let modulePath = `./../../modules/${module.name}/`;


        if (module.hasDBModel) {
            appModels = Object.assign(appModels,require(modulePath + 'models/db'))
        }

        appModules[module.name]['controller'] = require(modulePath + 'controllers');
    });

    const routersInit = (config)=>{
  
        var router = express.Router()

        moduleConfig.forEach(module => {

            router.use(module.route , appModules[module.name]['controller'](appModels,config) )
        });


        return router
    }


    return {
        routersInit,
        appModels
    }
}




module.exports = prepare
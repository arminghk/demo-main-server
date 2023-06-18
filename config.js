

const endpointPort = '3000'


module.exports = {
    
    endpointPort: endpointPort,


    moduleConfig:[
        {
            name:'adminUsers',
            hasDBModel:true,
            route:'/admin-users'
        },
        {
            name:'core',
            hasDBModel:false,
            route:'/core'
        }
    ]
}
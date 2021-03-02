const moviesModel = require('../Models/moviesModel')

const getAllMovies = function()
{
    return new Promise((resolve,reject) =>
    {
        moviesModel.find({}, function(err,obj)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(obj)
            }
        })
    })
}

module.exports = {getAllMovies}
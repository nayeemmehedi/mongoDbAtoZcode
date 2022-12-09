let count = 0 

module.exports.viewcount = (req,res,next)=> {

     count ++ 

     console.log(count)

     next()



}


const axios = require('axios')


exports.homeRoute = (req,res)=>{
    axios.get(`${process.env.LOCAL_BASE_URL}/api/users`)
    .then(response=>{
        res.render('index',{users:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.add_user = (req,res)=>{
    res.render('add_user')
}

exports.update_user = (req,res)=>{
    axios.get(`${process.env.LOCAL_BASE_URL}/api/users`,{params:{id:req.query.id}})
        .then(data=>{
            res.render('update_user',{user:data.data})
        })
        .catch(err=>{
            res.send(err)
        })

}
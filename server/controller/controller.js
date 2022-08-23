
const User = require('../model/model')

/*Create and Save New User */
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:'Content can not be empty!'})
        return;
    }
    //new user
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in db
    user.save(user)
        .then(data=>{
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || 'Some error occurred while creating a create operation!'
            });
        })
}

/*Retrieve all and single user */
exports.find = (req,res)=>{
    if(req.query.id){
        const {id} = req.query
        User.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message:`Not found user with id ${id}`})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message:'Error retrieving user with id'+ id})
            })    

    }else{
        User.find()
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:err.message || 'Some error occurred while retrieving user information!'
                });
            })
    }
}


/*Update an identified user */
exports.update = (req,res)=>{
    if(!req.body){
       return res.status(400).send({message:'Data to update can not be empty!'})
    }
    const {id} = req.params
    User.findByIdAndUpdate(id, req.body,{new:true})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Can not update user with ${id}. May be user not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || 'Error Update user information!'
            });
        })
}

/*Delete an identified user */
exports.delete = (req,res)=>{
    const {id} = req.params
    User.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Can not delete user with ${id}. May be user not found`})
            }else{
                res.send({message:'User was deleted successfully!'})
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || 'Error to delete user information!'
            });
        })
}
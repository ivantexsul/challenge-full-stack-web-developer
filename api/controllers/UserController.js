const database = require('../models')

class UserController{
    static async getAll(req, res){
        try{
            var data = []
            data = await database.Users.findAll()
            
            return res.status(200).json(data)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async getUser(req, res){
        const { id } = req.params
        try{
            const user = await database.Users.findOne({
                where: { id:Number(id) }
            })
            return res.status(200).json(user)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }


    static async addNewUser(req, res){
        const newUserData = req.body
        try{
            const newUser = await database.Users.create(newUserData)
            return res.status(201).json(newUser)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async verifyUserEmail(req, res){
        const data = req.body
        try{
            const user = await database.Users.count({
                where: { email:data.email }
            })
            if(user == 0){
                return res.status(200).json(0)
            }else{
                return res.status(200).json(1)

            }
        }catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async updateUser(req, res){
        const { id } = req.params
        const newData = req.body
        try{
            await database.Users.update(newData, {
                where: {
                  id:Number(id) 
                }
              });
            
            const userUpdated = await database.Users.findOne({
                where: { id: Number(id)}
            })
            return res.status(201).json(userUpdated)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }


    static async deleteUser(req, res){
        const { id } = req.params
        try{
            await database.Users.destroy({
                where: {
                  id:Number(id) 
                }
              });
            return res.status(200).json({ mensagem: `User with id ${id} deleted.`})
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = UserController
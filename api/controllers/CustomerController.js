const database = require('../models')

class CustomersController{
    static async getAll(req, res){
        try{
            const data = await database.Customers.findAll()
            return res.status(200).json(data)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async getCustomers(req, res){
        const { id } = req.params
        try{
            const Customers = await database.Customers.findOne({
                where: { id:Number(id) }
            })
            return res.status(200).json(Customers)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async addNewCustomers(req, res){
        const newCustomersData = req.body
        try{
            const newCustomers = await database.Customers.create(newCustomersData)
            return res.status(201).json(newCustomers)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async updateCustomers(req, res){
        const { id } = req.params
        const newData = req.body
        try{
            
            await database.Customers.update(newData, {
                where: {
                  id:Number(id) 
                }
              });
            
            const CustomersUpdated = await database.Customers.findOne({
                where: { id: Number(id)}
            })
            return res.status(201).json(CustomersUpdated)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }


    static async deleteCustomers(req, res){
        const { id } = req.params
        try{
            await database.Customers.destroy({
                where: {
                  id:Number(id) 
                }
              });
            return res.status(200).json({ mensagem: `Customers with id ${id} deleted.`})
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = CustomersController
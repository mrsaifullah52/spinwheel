import database from '../../../lib/database';
import User from '../../../models/User';

export default async function handler (req, res) {
  await database();

  switch(req.method){
    case 'GET':{
      const response= await User.find({});
      return res.send(response);
    }
    case 'POST':{
      try {
        const {name,city,phone,email}=JSON.parse(req.body);
        const userData= new User({name, city, phone, email})
        const response = await userData.save();
        console.log(response);
        return res.status(201).send(response)
      } catch (error) {
        console.log(error)
        return res.status(409).json({"message":"failed to save"})
      }
    }
    case 'PUT':{
      return res.send("put")
    }
    case 'DELETE':{
      return res.send("delete")
    }
  }
}
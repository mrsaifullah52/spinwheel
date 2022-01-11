import { ObjectId } from 'mongodb';
import clientPromise from '../../middleware/database';
import User from '../../model/user';

export default async function handler (req, res) {
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB).collection("user");

  switch(req.method){
    case 'GET':{
      return res.send("get")
    }
    case 'POST':{
      try {
        const {name,city,phone,email}=JSON.parse(req.body);
        // const user = {"_id":ObjectId(),name,city,phone,email};
        // const response=await db.insertOne(user);

        const userData= new User({name, city, phone, email})
        const response = await userData.save();
        return res.status(200).send(response)
        
      } catch (error) {
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

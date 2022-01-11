import database from '../../../lib/database';
import User from '../../../models/User';
import Point from '../../../models/Point';
import { setCookies } from 'cookies-next';

export default async function handler (req, res) {
  await database();

  switch(req.method){
    case 'GET':{
      const response= await User.find({});
      return res.send(response);
    }
    case 'POST':{
      const {name,city,phone,email}=JSON.parse(req.body);
      try {
        const userData= new User({name, city, phone, email})
        const userPoints= new Point({email,basic:1});
        await userPoints.save();
        const response = await userData.save();

        setCookies("email",email,{ req, res });
        setCookies("phone",phone,{ req, res });
        return res.status(201).send(response)
      } catch (error) {

        const response=await User.findOne({email})
        if(response.email){
          setCookies("email",email,{ req, res });
          setCookies("phone",phone,{ req, res });

          return res.status(409).send(response)
        }

        console.log(error)
        return res.status(401).json({"message":"failed to save"})
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
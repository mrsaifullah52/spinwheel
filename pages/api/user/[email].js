import database from '../../../lib/database';
import Point from '../../../models/Point';

export default async function handler (req, res) {
  await database();
  const {email} = req.query;

  switch(req.method){
    case 'GET':{
      try {
        const response= await Point.findOne({email});
        return res.json(response);
      } catch (error) {
        return res.json(error)
      }
    }
    case 'POST':{
      return res.send(email)
    }
    case 'PUT':{
      return res.send(email)
    }
    case 'DELETE':{
      return res.send(email)
    }
  }
}

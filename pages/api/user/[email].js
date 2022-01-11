import clientPromise from '../../middleware/database';

export default async function handler (req, res) {
  const {email} = req.query;
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB).collection("user");

  switch(req.method){
    case 'GET':{
      const response = await db.findOne({email})
      return res.json(response)
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


  // const userdb = await db.collection('user').find({}).toArray();
  // res.json(userdb)
}

import database from '../../middleware/database';
import User from '../../model/user';

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




// export default async function handler (req, res) {
//   const client = await clientPromise
//   const db = client.db(process.env.MONGODB_DB).collection("user");

//   switch(req.method){
//     case 'GET':{
//       // const response=await db.find().toArray();
//       const response= await User.find();
//       return res.send(response);
//     }
//     case 'POST':{
//       try {
//         const {name,city,phone,email}=JSON.parse(req.body);
//         // const user = {"_id":ObjectId(),name,city,phone,email};
//         // const response=await db.insertOne(user);

//         const userData= new User({name, city, phone, email})
//         const response = await userData.save();
//         console.log(response);
//         return res.status(201).send(response)
//       } catch (error) {
//         console.log(error)
//         return res.status(409).json({"message":"failed to save"})
//       }
//     }
//     case 'PUT':{
//       return res.send("put")
//     }
//     case 'DELETE':{
//       return res.send("delete")
//     }
//   }
// }

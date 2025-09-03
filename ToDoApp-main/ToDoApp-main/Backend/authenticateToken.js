import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  try{
    const authHeader = req.headers['authorization'];
    console.log("------Here in middleware-------", authHeader)
    if (authHeader == null) return res.sendStatus(401);
  
    const token = authHeader.split(' ')[1]; 
     if (token == null) return res.sendStatus(401);
  

    jwt.verify(token, process.env.JWTKEY, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next(); 
    });
  }catch(e){
    console.log("error >>> ", e);
  }
  };
  export default authenticateToken;
  
import jwt from "jsonwebtoken";

export function generateToken(user){
    let token = jwt.sign({ userId: user.Id, role: user.role, username: user.name }, process.env.SECRET_KEY, { expiresIn: "5d"})
    console.log(token);
    return token;
}

export const checkToken = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token)
        return res.status(401).json("מצטערים עליך לבצע כניסה");

    try {
        let result = jwt.verify(token, process.env.SECRET_KEY)
        console.log(result);
        req.user = result;
        next();
    }
    catch(err){
        return res.status(401).json("מצטערים עליך לבצע כניסה"+ err.message)
    }
}

export const checkAdmin = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token)
        return res.status(401).json("מצטערים עליך לבצע כניסה")

    try{
        let result = jwt.verify(token, process.env.SECRET_KEY)
        if(result.role != "ADMIN")
            return res.status(403).json("אין לך הרשאה לעשות את הפעולה הזו"+err.message)
        console.log(result);
        req.user = result;
        next();
    }
    catch(err){
        return res.status(401).json("מצטערים עליך לבצע כניסה"+ err.message)
    }

}
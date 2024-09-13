import 'dotenv/config'
import jwt from 'jsonwebtoken'
const { sign, verify } = jwt

const createToken = (user)=> {
    console.log(user);
    
    return sign(
        {
            emailAdd: user.email,
            id:user.user_ID
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1h'
        }
    )
}
const verifyAToken = (req, res, next) =>{
    const token = req?.headers["authorization"]
    if (token) {
        if (verify(token, process.env.SECRET_KEY)) {
            let user = verify(token,process.env.SECRET_KEY)
            console.log(user);
            
            req.body.user = user
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials."
            })
        }
    } else {
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}
export {
    createToken, verifyAToken
}










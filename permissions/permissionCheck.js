function permissionCheck(permissions){
    return (req, res, next) => {
        console.log(req.user)
        const pCheck = permissions.every(val => req.user.permissions.includes(val))
        if(pCheck == null){
            return res.status(401).json({
                status: 0,
                message: "You are not permitted "})
        } 
        next()
    }
}
module.exports = {
    permissionCheck
}
const { UserInputError } = require("apollo-server")
const jwt = require("jsonwebtoken")

const { generateToken } = require("../../util/generateToken")
const { userCheckViaId } = require("../../util/userCheckViaId")

module.exports.tokenFn = async (_, { refreshToken }, context) => {
    const tokenError = {}
    if(refreshToken == null || refreshToken == "") {
        tokenError.general = "Refresh token can't be null or empty"
        throw new UserInputError("Refresh Token Error", { tokenError })
    }
    const verifiedUser = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
    
    if(!verifiedUser) {
        tokenError.general = "Invalid Refresh token"
        throw new UserInputError("Refresh Token Error", { tokenError })
    }
    const user = await userCheckViaId(verifiedUser.id)
    
    if(!user){
        tokenError.general = "Refresh token user not found"
        throw new UserInputError("Refresh Token Error", { tokenError })
    }
    if(user.refreshToken !== refreshToken){
        tokenError.general = "Refresh token not found"
        throw new UserInputError("Refresh Token Error", { tokenError })
    }
    const token = generateToken(verifiedUser)
    return {token}
    
}
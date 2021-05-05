const bcrypt = require("bcryptjs")
const { UserInputError } = require("apollo-server")

const { userCheckViaEmail } = require("../../util/userCheckViaEmail")
const { validateLoginInput } = require("../../validation/user/validateLoginInput")
const { userPermissionExist } = require("../../util/userPermissionExist")
const { generateToken, generateRefreshToken } = require("../../util/generateToken")
const { CAN_LOGIN } = require("../../permissions/user")

module.exports = {
    async loginFn(_, { email, password }){
        // validate user data
        const { valid, errors } = validateLoginInput(email,password)
        if(!valid){
            throw new UserInputError("Login Errors", { errors })
        }

        const user = await userCheckViaEmail(email)
        
        const permissionCheck  = userPermissionExist(user.permissions, [CAN_LOGIN])
        if(!permissionCheck){
            errors.general = "Required permission not found"
            throw new UserInputError("Required permission not found", { errors })
        }

        const match = await bcrypt.compare(password, user.password)
        if(!match){
            errors.general = "Wrong credentials"
            throw new UserInputError("Wrong credentials", { errors })
        }

        const token = generateToken(user)
        const refreshToken = generateRefreshToken(user)
        user.updatedAt = user.updatedAt
        user.lastLoggedIn = new Date().toString()
        user.refreshToken = refreshToken
        await user.save()
        return{
            ...user._doc,
            id: user._id,
            token,
            refreshToken
        }

    }
}
const { UserInputError } = require("apollo-server")

const User = require("../../models/user")
const { validateUserUpdateInput } = require("../../validation/user/validateUserUpdateInput")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { CAN_UPDATE_USER } = require("../../permissions/user")

module.exports = {
    async updateUserFn(_,
        currentEmail,
        firstName,
        lastName,
        email,
        role,
        department,
        designation
    , context){
        

        const { valid, errors } = validateUserUpdateInput(
            currentEmail,
            firstName,
            lastName,
            email,
            role,
            department,
            designation
        )
        if(!valid){
            throw new UserInputError("User Update Errors", { errors })
        }
        await checkForAuthorizedUser(context, [CAN_UPDATE_USER])
        const user = await User.findOneAndUpdate({email: currentEmail},{
            $set: {
                firstName,
                lastName,
                email,
                role,
                department,
                designation,
                updatedAt: new Date().toString()
            }
        })
        if(!user){
            errors.general = "User not found"
            throw new UserInputError("User not found", { errors })
        }
        return {
            ...user._doc
        }
    }
}
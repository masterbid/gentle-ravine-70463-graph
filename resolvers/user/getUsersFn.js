const {User} = require("../../models/user")
const { CAN_GET_USERS } = require("../../permissions/user")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")

module.exports = {
    async getUsersFn(_,args,context) {
        await checkForAuthorizedUser(context, [CAN_GET_USERS])
        try{
            const users = await User.find({}).sort({ createdAt: -1})
            return users
        }catch(err){
            throw new Error(err)
        }
    }
}
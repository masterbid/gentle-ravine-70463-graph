const { getUsersFn } = require("./getUsersFn")
const { getUserFn } = require("./getUserFn")
const { registerFn } = require("./registerFn")
const { loginFn } = require("./loginFn")
const { tokenFn } = require("./tokenFn")
const { deleteUserFn } = require("./deleteUserFn")
const { updateUserFn } = require("./updateUserFn")
const { addUserPermissionsFn } = require("./addUserPermissionsFn")
const { deleteUserPermissionsFn } = require("./deleteUserPermissionsFn")
const { changePasswordFn } = require("./changePasswordFn")
const { resetPasswordFn } = require("./resetPasswordFn")
const { logoutFn } = require("./logoutFn")

module.exports = {
    Query: {
        getUsers(_, args, context){
            return getUsersFn(_,args,context)
        },
        getUser(_,{email}, context){
            return getUserFn(_,email, context)
        }
        
    },
    

    Mutation: {
        register(_, { registerInput: {
            firstName,
            lastName,
            email,
            role,
            password,
            confirmPassword,
            department,
            designation
        }},context){
            return registerFn(_,
                firstName,
                lastName,
                email,
                role,
                password,
                confirmPassword,
                department,
                designation
            ,context)
            
        },
        
        login(_, { email, password }){
            return loginFn(_, { email, password })
        },

        token(_, {refreshToken}, context){
            return tokenFn(_, {refreshToken}, context)
        },
        logout(_, args, context){
            return logoutFn(_, args, context)
        },
        async updateUser(_, { updateUserInput: {
            currentEmail,
            firstName,
            lastName,
            email,
            role,
            department,
            designation
        }}, context){
            return updateUserFn(_,
                currentEmail,
                firstName,
                lastName,
                email,
                role,
                department,
                designation
            ,context)
        }, 

        deleteUser(_, { email }, context){
            return deleteUserFn(_, email, context)
        },

        addUserPermissions(_, {email, permissions}, context){
            return addUserPermissionsFn(_, email, permissions, context)
        },

        deleteUserPermissions(_, {email, permissions}, context){
            return deleteUserPermissionsFn(_, email, permissions, context)
        }, 
        changePassword(_, { currentPassword, newPassword, confirmNewPassword}, context){
            return changePasswordFn(_, currentPassword, newPassword, confirmNewPassword, context)
        },
        resetPassword(_, { email, newPassword, confirmNewPassword}, context){
            return resetPasswordFn(_, email, newPassword, confirmNewPassword, context)
        }
    }
}
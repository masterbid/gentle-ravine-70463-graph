const { UserInputError } = require("apollo-server")

const User = require("../../models/user")
const {userCheckViaEmail} = require("../../util/userCheckViaEmail")
const { validateRegisterInput } = require("../../validation/user/validateRegisterInput")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { hashPassword } = require("../../util/hashPassword")
const { CAN_ADD_USER } = require("../../permissions/user")
const { availableDepartmentCheck } = require("../../validation/department/availableDepartmentCheck")

module.exports = {
    async registerFn(_,
        firstName,
        lastName,
        email,
        role,
        password,
        confirmPassword,
        department,
        designation
    ,context){
        // validate user data
        const { valid, errors } = validateRegisterInput(firstName,lastName,email,role,password,confirmPassword,department,designation)
        if(!valid){
            throw new UserInputError("Registration Errors", { errors })
        }
        
       
        await checkForAuthorizedUser(context, [CAN_ADD_USER])

        // Make sure user doesn't already exist
        const user = await userCheckViaEmail(email)
        if(user){
            errors.email = "This email address is taken"
            throw new UserInputError("Email address is taken", {errors})
        }

        // hash password and create user
        password = await hashPassword(password)
        const { deptFullName } = await availableDepartmentCheck(department) 


        const newUser = await User.create({
            firstName: firstName.toUpperCase(),
            lastName: lastName.toUpperCase(),
            email: email.toLowerCase(),
            role: role.toUpperCase(),
            password,
            department: deptFullName.toUpperCase(),
            designation: designation.toUpperCase(),
            updatedAt: new Date().toString()
        })
        return newUser
    }
    
}
const { Department } = require("../models/departments")

module.exports.userType = `



type User {
    id: ID
    firstName: String!
    lastName: String!
    fullName: String!
    email: String!
    token: String!
    refreshToken: String!
    role: String!
    departmentId: ID!
    department: String!
    designation: String!
    permissions: [String]!
    createdAt: String!
    updatedAt: String!
    lastLoggedIn: String!
}
`

module.exports.userInputs = `
    input RegisterInput {
        firstName: String!
        lastName: String!
        email: String!
        role: String!
        password: String!
        confirmPassword: String!
        departmentId: String!
        designation: String!
    }
    input UpdateUserInput {
        currentEmail: String!,
        firstName: String!,
        lastName: String!,
        email: String!,
        role: String!,
        departmentId: String!,
        designation: String!
    }
`
module.exports.userQuery = `
    getUsers: [User]!
    getUser(email: String!): User!
`

module.exports.userMutation = `
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    token(refreshToken: String!): User
    logout: User!
    updateUser(updateUserInput: UpdateUserInput): User!
    deleteUser(email: String!): User!
    addUserPermissions(email: String!, permissions: [String]!): User!
    deleteUserPermissions(email: String!, permissions: [String]!): User!
    changePassword(id: ID!, currentPassword: String!,newPassword: String!, confirmNewPassword:String!): User!
    resetPassword(email: String!, newPassword: String!, confirmNewPassword: String!): User!
`
module.exports.departmentType = `

type Departments {
    id: ID!
    deptShortName: String!
    deptFullName: String!
    createdAt: String!
    updatedAt: String!
    creatorId: ID!
    createdBy: User!
}
`
module.exports.departmentQuery = `
    getDepartments: [Departments]!
    getDepartmentById(id: String!): Departments!
    getDepartmentByName(deptShortName: String, deptFullName: String): Departments!
`

module.exports.departmentMutation = `
    addDepartment(deptShortName: String!, deptFullName: String!): Departments!,
    updateDepartment(deptShortName: String!, deptFullName: String!): Departments!,
    deleteDepartment(id: String!): Departments!
`
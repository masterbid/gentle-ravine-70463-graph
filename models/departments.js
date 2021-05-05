
const mongoose = require('mongoose')

const DepartmentSchema = mongoose.Schema({
    deptShortName: {
        type: String,
        required: [true, "The deptShortName must not be empty"]
    },
    deptFullName: {
        type: String,
        required: [true, "The deptFullName must not be empty"]
    },
    creatorId: {
        type: String,
        required: [true, "The creatorId must not be empty"]
    },
    updatedAt: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: new Date().toString()
    }
})

module.exports.Department = mongoose.model("Department", DepartmentSchema)
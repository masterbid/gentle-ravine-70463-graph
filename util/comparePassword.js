const bcrypt = require("bcryptjs")

module.exports.comparePassword = async (newPassword, oldPassword) => await bcrypt.compare(newPassword, oldPassword)

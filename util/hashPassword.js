const bcrypt = require("bcryptjs")

module.exports.hashPassword = async (password) => await bcrypt.hash(password, 12)

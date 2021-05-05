require("dotenv").config()
module.exports = {
    db_user: process.env.MONGODB_USER,
    db_password: process.env.MONGODB_PW,
    db_name: process.env.MONGODB_NAME,
    access_token: process.env.ACCESS_TOKEN,
    email_host: process.env.EMAIL_HOST,
    email_username: process.env.EMAIL_USERNAME,
    email_password: process.env.EMAIL_PWD
}
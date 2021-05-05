const { ROLE, designations, permissions } = require("../data")

const canViewRequest = (user, request) => {
    return request.userId.toString() === user.id || user.role === ROLE.FINANCE || user.role === ROLE.MANAGEMENT || user.role === ROLE.PROCUREMENT || (user.role === ROLE.ADMIN && user.designations === designations.SUPERADMIN )
}
const canDeleteRequest = (user, request) => {
    return request.userId.toString() === user.id || (user.role === ROLE.ADMIN && user.designations === designations.SUPERADMIN )
}

function scopedRequest(user, requests){
    if(user.role === ROLE.ADMIN || user.role === ROLE.FINANCE || user.role === ROLE.MANAGEMENT || user.role === ROLE.PROCUREMENT) return requests
    return requests.filter(yourRequest => yourRequest.userId.toString() === user.id)
}

const canChangeRequest = (user, request) => {
    return request.userId.toString() === user.id || user.role === ROLE.FINANCE || user.role === ROLE.MANAGEMENT || user.role === ROLE.PROCUREMENT || (user.role === ROLE.ADMIN && user.designations === designations.SUPERADMIN )
}
module.exports = {
    canViewRequest, 
    canDeleteRequest,
    scopedRequest,
    canChangeRequest
}
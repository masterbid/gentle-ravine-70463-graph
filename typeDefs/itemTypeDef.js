module.exports.itemType = `

enum unitTypes {
    Pieces
    Kg
    Pounds
    Cartons
    Creates
    Bags
    Tons
    Trips
    Gallons
    Litres
}

type Items {
    id: ID!,
    productName: String!,
    quantity: String!,
    measurement: String!,
    price: Float!,
    subtotal: Float!,
    requestId: ID!,
    retirementId: ID!,
    vendorId: ID!,
    vendor: Vendor!,
    request: [Request]!

}

`
module.exports.itemQuery = `
    
    getItemsInARequest(requestId: String!): [Items]!,
    getItem(productName: String!): Items!
`

module.exports.itemMutation = `
    addItem( productName: String!, quantity: String!, measurement: unitTypes!, price: Float!, subtotal: Float!, requestId: ID!, retirementId: ID!, vendorId: ID!, vendor: Vendor!,): Items!
    deleteItem(id: String!): Items!
    updateItem(id: String!): Items!
`
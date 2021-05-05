module.exports.vendorType = `

type Vendor {
    id: ID!,
    vendorName: String!,
    vendorAccountName: String!,
    vendorAccountNumber: String!,
    vendorBankName: String!
}

`
module.exports.vendorQuery = `
    getVendors: [Vendor]!,
    getVendorByAccountNumber(vendorAccountNumber: Int!): [Vendor]!,
    getVendorByAccountName(vendorAccountName: String!): [Vendor]!,
    getVendorByVendorName(vendorName: String!): [Vendor]!
`

module.exports.vendorMutation = `
    addVendor(vendorName: String!, vendorAccountName: String!, vendorAccountNumber: Int!, vendorBankName: String!): Vendor!
    deleteVendor(id: ID!): Vendor!
    updateVendor(vendorName: String!, vendorAccountName: String!, vendorAccountNumber: Int!, vendorBankName: String!): Vendor!
`
export const updateSessionCustomerAvatar = `
mutation UpdateSessionCustomerAvatar($input:ImageInput!) {
  updateSessionCustomerAvatar(input:$input){
    avatar{
      uri
      fileId
    }
  }
}
`;

export const customerMutation = `
mutation updateSessionCustomer($input:CustomerInput!) {
  updateSessionCustomer(input:$input){
    fName,
    lName,
    country,
    phone,
    avatar{
      uri
    }
  }
}
`;

import { faker } from '@faker-js/faker';


export const generateProduct = () => {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    url: faker.internet.url(),
    type: faker.random.word(),
    brand: faker.company.companyName(),
    algorithms: faker.random.arrayElements([
      'Sha-256',
      'Ethash',
      'Blake (2b)',
      'Scrypt',
      'Etchash 5'
    ])
  }
}
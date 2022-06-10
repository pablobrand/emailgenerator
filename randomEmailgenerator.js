const fs = require('fs')
const CryptoJS = require('crypto-js')
const length = 12
const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
var string = ''
const numberOfCredentials = 50

const createRandEmailString = () => {
 
  for (var ii = 0; ii < 10; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)]
  }
  const emailValue = 'test'+string
  return emailValue
}

const createRanEmailCredentials = () => {
  const EmailCredentials = []
  for (var i = 0; i < numberOfCredentials; i++) {
  EmailCredentials[i] = createRandEmailString()
  string = ''
  console.log(EmailCredentials[i] + '@gmail.com')
  }
  // for (var i = 0; i < numberOfCredentials; i++) {
  //   let EmailCredentials = {
  //     email: 'dfad@gmail.com',
  //     password: 'dfsdfa',
  //   }
    
  //   EmailCredentials.email = createRandEmailString()
  //   const hash = CryptoJS.SHA256(string)
  //   const hashToString = hash.toString()
  //   EmailCredentials.password = hashToString.substring(0, length)
  //   fs.writeFileSync(
  //     'EmailCredentials.json',
  //     JSON.stringify({
  //       email: EmailCredentials.email + '@gmail.com',
  //       password: EmailCredentials.password,
  //     })
  //   )
  //   console.log('Email Address: ' + EmailCredentials.email + '@gmail.com')
  //   //console.log('Password: ' + hash)
  //   console.log('Trimed Password: ' + EmailCredentials.password)
  // }
  
}

createRanEmailCredentials()

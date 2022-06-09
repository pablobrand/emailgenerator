const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    'https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&dsh=S335971924%3A1654014935962802&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp'
  )

  const clickInputBox = await page.$('[jscontroller="lIeBAf"]')
  await clickInputBox.click()
  //first name
  await page.keyboard.type('johnTestProdOne')
  await page.keyboard.press('Tab')
  //last name
  await page.keyboard.type('johnTestProdOne')
  await page.keyboard.press('Tab')
  //email
  await page.keyboard.type('3uml39hc5pmgxe3')
  await page.keyboard.press('Tab')
  //password
  await page.keyboard.type(
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  )
  await page.keyboard.press('Tab')
  //password confirm
  await page.keyboard.type(
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  )
  const [button] = await page.$x("//button[contains(., 'Following')]")
  if (button) {
    await button.click()
  }
  console.log(`Element has been clicked`)

  await page.screenshot({ path: 'example.png' })

  await browser.close()
})()

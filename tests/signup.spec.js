const {test,expect} = require('@playwright/test')
const signuppage = require('../page/signuppage')
//const validdata = require('../testData/loginData.json')
const {faker} = require('@faker-js/faker') 

test.beforeEach(async({page})=>
{
    await page.goto('https://www.demoblaze.com/')
})

//TestCase -1

test('Sign Up',async({page})=>
{
    const signupobj = new signuppage(page)
    await signupobj.accessURL()
    await signupobj.clickSignuplink()
    const username = 'user' + Date.now() 
    const password = 'pass' + Date.now()
    console.log(username,password)
    await signupobj.userName(username)
    await signupobj.password(password)
   
    
    page.on('dialog', async dialog=>
    {
        
        await expect(dialog.message()).toBe('Sign up successful.')
        await dialog.accept()
    })

 await signupobj.clickSignup()
 await expect(page).toHaveURL('https://www.demoblaze.com/')
    
})

//Test Case - 2

test('Sign Up - Close Popup',async({page})=>
{
    const signupobj1 = new signuppage(page)
    await signupobj1.accessURL()
    await signupobj1.clickSignuplink()
    // generate random data with faker class 

    const username = faker.internet.username()
    const password = faker.internet.password({length:10})

console.log(username,password)

    await signupobj1.userName(username)
    await signupobj1.password(password)
    await signupobj1.clickSignup()
    await signupobj1.clickClose()
    await expect(page).toHaveURL('https://www.demoblaze.com/')
})

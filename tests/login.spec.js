const{test,expect} = require('@playwright/test')
const validdata = require('../testData/loginData.json')
const dataset = require('../testData/invalidData.json')
const loginpage = require('../page/loginpage')
const placeorderpage = require('../page/placeorderpage')



//Test Case - 3

test('Verify Login with valid credentials',async({page})=>
{
   const loginobj = new loginpage(page)
   await loginobj.accessURL()
   await loginobj.clickLoginlink()
   await loginobj.userName(validdata.username)
   await loginobj.password(validdata.password)
   const placeorder = await loginobj.clickLogin() // page navigation
    await expect(page.locator('#nameofuser')).toHaveText('Welcome suhaila')

})



//Test Case - 4

test(`Verify login with Invalid username and valid password ${dataset[0].username},${dataset[0].password}`,async({page})=>
{
    const loginobj1 = new loginpage(page)
   await loginobj1.accessURL()
   await loginobj1.clickLoginlink()
   await loginobj1.userName(dataset[0].username) //data because of loop
   await loginobj1.password(dataset[0].password)
 
    page.on('dialog',async dialog =>
    {
        console.log('Dialog Text:',dialog.message())
        expect (dialog.message()).toBe('User does not exist.')
        await dialog.accept()
    })

   const placeorder = await loginobj1.clickLogin()

    await page.waitForTimeout(2000)
})

//Test Case - 5 

test(`Verify login with valid username and Invalid password ${dataset[1].username},${dataset[1].password}`, async ({page})=>
{
   const loginobj2 = new loginpage(page)
   await loginobj2.accessURL()
   await loginobj2.clickLoginlink()
   await loginobj2.userName(dataset[1].username) //data because of loop
   await loginobj2.password(dataset[1].password)

    
    page.on('dialog',async dialog =>
    {
        console.log('Dialog Text:',dialog.message())
        expect (dialog.message()).toBe('Wrong password.')
        await dialog.accept()
    })

      const placeorder = await loginobj2.clickLogin()

   await page.waitForTimeout(2000)

})

//Test Case - 6 

test(`Verify login with invalid username and invalid password ${dataset[2].username},${dataset[2].password}`,async({page})=>
{
    const loginobj3 = new loginpage(page)
   await loginobj3.accessURL()
   await loginobj3.clickLoginlink()
   await loginobj3.userName(dataset[2].username) //data because of loop
   await loginobj3.password(dataset[2].password)

    page.on('dialog',async dialog=>
    {
        console.log('Dialog Text:',dialog.message())
        expect (dialog.message()).toBe('User does not exist.')
        await dialog.accept()
    }
    )

       const placeorder = await loginobj3.clickLogin()

    await page.waitForTimeout(2000)
})

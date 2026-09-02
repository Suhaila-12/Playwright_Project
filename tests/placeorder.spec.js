const{test,expect} = require('@playwright/test')
const validdata = require('../testData/loginData.json')
const loginpage = require('../page/loginpage')
const signoutpage = require('../page/signoutpage')


test.beforeEach(async({page})=>
{
    await page.goto('https://www.demoblaze.com/')
})

//Test Case - 7

test.only('Login with valid credentials- Add to cart - Click ok on pop up', async({page})=>
{
   const orderobj = new loginpage(page)
   await orderobj.clickLoginlink()
   await orderobj.userName(validdata.username)
   await orderobj.password(validdata.password)
   const placeorder = await orderobj.clickLogin()
   
   await placeorder.phonesLink()
   await placeorder.Selection('Iphone 6 32gb')

    page.on('dialog',async dialog=>
    {
        console.log(dialog.message())
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    }
    )
    await placeorder.addToCart()
    await page.waitForTimeout(2000)
})


//Test Case - 8 

test('Login with valid credentials- - Select a produt under phones -Add to cart - Click ok on pop up - Details- Purchase', async({page})=>
{
   const orderobj1 = new loginpage(page)
   await orderobj1.clickLoginlink()
   await orderobj1.userName(validdata.username)
   await orderobj1.password(validdata.password)
   const placeorder = await orderobj1.clickLogin()

   await placeorder.phonesLink()
   await placeorder.Selection('Iphone 6 32gb')

    page.on('dialog',async dialog=>
    {
        console.log(dialog.message())
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    }
    )
    await placeorder.addToCart()
    await page.waitForTimeout(2000)

    await placeorder.clickCart()
    await placeorder.placeOrder()
    await placeorder.enterDetails()
   
    const signout = await placeorder.purchase()
})

//Test Case - 9 

test('Login - Add Monitor Product - Add to Cart - Add Details - Purchase', async({page})=>
{
   const orderobj2 = new loginpage(page)
   await orderobj2.clickLoginlink()
   await orderobj2.userName(validdata.username)
   await orderobj2.password(validdata.password)
   const placeorder = await orderobj2.clickLogin()

   await placeorder.monitorsLink()
   await placeorder.monitorsSelection()

    page.on('dialog',async dialog=>
    {
        console.log(dialog.message())
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    }
    )
    await placeorder.addToCart()
    await page.waitForTimeout(2000)

    await placeorder.clickCart()
    await placeorder.placeOrder()
    await placeorder.enterDetails()

    const signout = await placeorder.purchase()
})
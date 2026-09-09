const {expect,test} = require('@playwright/test')

test.beforeEach(async({page})=>
{
    await page.goto('https://www.demoblaze.com/')
})

//TestCase -1

test('Sign Up',async({page})=>
{
    await page.locator('#signin2').click()
    await page.locator('#sign-username').fill('suhaila')
    await page.locator('#sign-password').fill('User@123')
    
    page.on('dialog', async dialog=>
    {
        
        expect(dialog.message()).toBe('This user already exist.')
        await dialog.accept()
    })

 await page.locator('//button[@class="btn btn-primary"]').nth(1).click() 
    
})

//Test Case - 2

test('Sign Up - Close Popup',async({page})=>
{
    await page.locator('#signin2').click()
    await page.locator('#sign-username').fill('suhaila')
    await page.locator('#sign-password').fill('User@123')
    
    page.on('dialog', async dialog=>
    {
        await page.pause()
        expect(dialog.message()).toBe('This user already exist.')
        await dialog.accept()
    })

    await page.getByRole('button',{name:'Sign up'}).first().click()
    await page.getByRole('button',{name:'Close'}).nth(1).click()
})

//Test Case - 3

test('Verify Login with valid credentials',async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suhaila')
    await page.locator('#loginpassword').fill('User@123')
    await page.getByRole('button',{name:'Log in'}).first().click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome suhaila')

})

//Test Case - 4

test('Verify login with Invalid username and valid password',async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suhailaa')
    await page.locator('#loginpassword').fill('User@123')
 
    page.on('dialog',async dialog =>
    {
        console.log('Dialog Text:',dialog.message())
        expect (dialog.message()).toBe('User does not exist.')
        await dialog.accept()
    })

    await page.getByRole('button',{name:'Log in'}).first().click()  
    await page.waitForTimeout(2000)
})

//Test Case - 5 

test('Verify login with valid username and Invalid password', async ({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suhaila')
    await page.locator('#loginpassword').fill('User@1234')

    
    page.on('dialog',async dialog =>
    {
        console.log('Dialog Text:',dialog.message())
        expect (dialog.message()).toBe('Wrong password.')
        await dialog.accept()
    })

   await page.getByRole('button',{name:'Log in'}).first().click() 

   await page.waitForTimeout(2000)

})

//Test Case - 6 

test('Verify login with invalid username and invalid password',async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suhailaa')
    await page.locator('#loginpassword').fill('User@1234')

    page.on('dialog',async dialog=>
    {
        console.log('Dialog Text:',dialog.message())
        expect (dialog.message()).toBe('User does not exist.')
        await dialog.accept()
    }
    )

    await page.getByRole('button',{name:'Log in'}).first().click()
    await page.waitForTimeout(2000)
})


//Test Case - 7

test('Login with valid credentials- Add to cart - Click ok on pop up', async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suhaila')
    await page.locator('#loginpassword').fill('User@123')
    await page.getByRole('button',{name:'Log in'}).first().click()
    await page.locator('//a[@id="itemc"]').first().click()
    await page.getByText('Iphone 6 32gb').click()

    page.on('dialog',async dialog=>
    {
        console.log(dialog.message())
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    }
    )
    await page.locator('//a[@class="btn btn-success btn-lg"]').click()
    await page.waitForTimeout(2000)
})


//Test Case - 8 

test('Login with valid credentials- - Select a produt under phones -Add to cart - Click ok on pop up - Details- Purchase', async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suhaila')
    await page.locator('#loginpassword').fill('User@123')
    await page.getByRole('button',{name:'Log in'}).first().click()
    await page.locator('//a[text() = "Phones"]').click()
    await page.getByText('Iphone 6 32gb').click()

    page.on('dialog',async dialog=>
    {
        console.log(dialog.message())
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    }
    )
    await page.locator('//a[@class="btn btn-success btn-lg"]').click()
    await page.waitForTimeout(2000)

    await page.locator('//a[@id="cartur"]').click()
    await page.locator('//button[@class="btn btn-success"]').click()
    await page.locator('//input[@id="name"]').fill('Suhaila')
    await page.locator('//input[@id="country"]').fill('India')
    await page.locator('//input[@id="city"]').fill('Thrissur')
    await page.locator('//input[@id="card"]').fill('0001100011001')
    await page.locator('//input[@id="month"]').fill('April')
    await page.locator('//input[@id="year"]').fill('2026')

    await page.locator('//button[text()="Purchase"]').click()
    

    //expect(page).toHaveURL("https://www.demoblaze.com/index.html")
})

//Test Case - 9 
test('Login - Add Monitor Product - Add to Cart - Add Details - Purchase', async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suhaila')
    await page.locator('#loginpassword').fill('User@123')
    await page.getByRole('button',{name:'Log in'}).first().click()
    await page.locator('//a[text() = "Monitors"]').click()
    await page.getByText('Apple monitor 24').click()

    page.on('dialog',async dialog=>
    {
        console.log(dialog.message())
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    }
    )
    await page.locator('//a[@class="btn btn-success btn-lg"]').click()
    await page.waitForTimeout(2000)

    await page.locator('//a[@id="cartur"]').click()
    await page.locator('//button[@class="btn btn-success"]').click()
    await page.locator('//input[@id="name"]').fill('Suhaila')
    await page.locator('//input[@id="country"]').fill('India')
    await page.locator('//input[@id="city"]').fill('Thrissur')
    await page.locator('//input[@id="card"]').fill('0001100011001')
    await page.locator('//input[@id="month"]').fill('April')
    await page.locator('//input[@id="year"]').fill('2026')

    page.on('dialog',async dialog=>
    {
        console.log('Dialog Message:',dialog.message())
        expect(dialog.message()).toBe('Thank you for your purchase!')
        await dialog.accept()
    }
    )
    await page.locator('//button[@class="btn btn-primary"]').nth(2).click()
    await page.waitForTimeout(2000)

})

//Test Case - 10

test('Login and Logout', async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suhaila')
    await page.locator('#loginpassword').fill('User@123')
    await page.getByRole('button',{name:'Log in'}).first().click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome suhaila')
    await page.locator('//a[@id="logout2"]').click()
    await expect(page.locator('//a[@id="signin2"]')).toHaveText('Sign up')
})
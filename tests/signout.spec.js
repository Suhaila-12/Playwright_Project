const{test,expect} = require('@playwright/test')
const validdata = require('../testData/loginData.json')
const loginpage = require('../page/loginpage')
const signoutpage = require('../page/signoutpage')


test('Login and Logout', async({page})=>
{
    const loginobj = new loginpage(page)
    await loginobj.accessURL()
    await loginobj.clickLoginlink()
    await loginobj.userName(validdata.username)
    await loginobj.password(validdata.password)
    await loginobj.clickLogin()

    const logoutobj = new signoutpage(page)
    await logoutobj.signout()
    await expect(page.locator('//a[@id="signin2"]')).toHaveText('Sign up')
})
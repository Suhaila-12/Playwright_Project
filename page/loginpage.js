const placeorderpage = require("./placeorderpage")

class loginpage
{
    constructor(page)
    {
        this.page = page 
        this.clickLoginfield = page.locator('#login2')
        this.userNamefield = page.locator('#loginusername')
        this.passwordfield = page.locator('#loginpassword')
        this.clickLoginButton = page.locator('//button[@onclick="logIn()"]')

    }

    async accessURL()
    {
        await this.page.goto('https://www.demoblaze.com/')
    }

    async clickLoginlink()
    {
        await this.clickLoginfield.click()
        return this 
    }
    
    async userName(username)
    {
        await this.userNamefield.fill(username)
        return this 
    }

    async password(password)
    {
        await this.passwordfield.fill(password)
        return this 
    }

    async clickLogin()
    {
        await this.clickLoginButton.click()
        return new placeorderpage(this.page)
    }
}

module.exports = loginpage
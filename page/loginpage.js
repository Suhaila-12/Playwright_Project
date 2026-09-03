const placeorderpage = require("./placeorderpage")

class loginpage
{
    constructor(page)
    {
        this.page = page 
        this.clickloginField = page.locator('#login2')
        this.usernameField = page.locator('#loginusername')
        this.passwordField = page.locator('#loginpassword')
        this.clickloginButton = page.locator('//button[@onclick="logIn()"]')

    }

    async accessURL()
    {
        await this.page.goto('https://www.demoblaze.com/')
    }

    async clickLoginlink()
    {
        await this.clickloginField.click()
        return this 
    }
    
    async userName(username)
    {
        await this.usernameField.fill(username)
        return this 
    }

    async password(password)
    {
        await this.passwordField.fill(password)
        return this 
    }

    async clickLogin()
    {
        await this.clickloginButton.click()
        return new placeorderpage(this.page)
    }
}

module.exports = loginpage
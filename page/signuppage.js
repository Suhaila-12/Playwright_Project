class signuppage
{
    constructor(page)
    {
        this.page = page
        this.signupField = page.locator('#signin2')
        this.usernameField = page.locator('#sign-username')
        this.passwordField = page.locator('#sign-password')
        this.clicksignupButton = page.locator('//button[@class="btn btn-primary"]').nth(1)
        this.clickcloseButton = page.getByRole('button',{name:'Close'}).nth(1)
    }

    async accessURL()
    {
        await this.page.goto('https://www.demoblaze.com/')
    }

    async clickSignuplink()
    {
        await this.signupField.click()
        return this
    }

    async userName()
    {
        await this.usernameField.fill('suhaila')
        return this 
    }

    async password()
    {
        await this.passwordField.fill('User@123')
        return this 
    }

    async clickSignup()
    {
        await this.clicksignupButton.click()
        return this 
    }

    async clickClose()
    {
        await this.clickcloseButton.click()
        return this
    }
}

module.exports = signuppage
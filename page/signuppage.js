class signuppage
{
    constructor(page)
    {
        this.page = page
        this.signupField = page.locator('#signin2')
        this.userNameField = page.locator('#sign-username')
        this.passwordField = page.locator('#sign-password')
        this.clickSignupButton = page.locator('//button[@class="btn btn-primary"]').nth(1)
        this.clickCloseButton = page.getByRole('button',{name:'Close'}).nth(1)
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
        await this.userNameField.fill('suhaila')
        return this 
    }

    async password()
    {
        await this.passwordField.fill('User@123')
        return this 
    }

    async clickSignup()
    {
        await this.clickSignupButton.click()
        return this 
    }

    async clickClose()
    {
        await this.clickCloseButton.click()
        return this
    }
}

module.exports = signuppage
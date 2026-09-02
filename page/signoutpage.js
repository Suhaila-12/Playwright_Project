class signoutpage
{
    constructor(page)
    {
        this.page = page 
        this.signoutButton = page.locator('//a[@id="logout2"]')
    }

    async signout()
    {
        await this.signoutButton.click()
        return this 
    }
}
module.exports = signoutpage
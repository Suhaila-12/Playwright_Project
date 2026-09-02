const signoutpage = require("./signoutpage")

class placeorderpage
{
    constructor(page)
    {
        this.page = page 
        this.selectphoneLink = page.locator('//a[text() = "Phones"]')
        this.selectphone = page.getByText('Iphone 6 32gb')
        this.selectmonitorLink = page.locator('//a[text() = "Monitors"]')
        this.selectmonitor = page.getByText('Apple monitor 24')
        this.addCart = page.locator('//a[@class="btn btn-success btn-lg"]')
        this.clickCartButton = page.locator('//a[@id="cartur"]')
        this.placeOrderButton = page.locator('//button[@class="btn btn-success"]')
        this.nameField = page.locator('//input[@id="name"]')
        this.countryField = page.locator('//input[@id="country"]')
        this.cityField = page.locator('//input[@id="city"]')
        this.cardField = page.locator('//input[@id="card"]')
        this.monthField = page.locator('//input[@id="month"]')
        this.yearField = page.locator('//input[@id="year"]')
        this.purchaseButton = page.locator('//button[text()="Purchase"]')
    
    }

    async phonesLink()
    {
        await this.selectphoneLink.click()
        return this 

    }

    async Selection()
    {
        await this.page.locator('//a[text()="${product}"]').click()
        //await this.selectphone.click()
        return this 
    }

    async monitorsLink()
    {
        await this.selectmonitorLink.click()
        return this 
    }

    async monitorsSelection()
    {
        await this.selectmonitor.click()
        return this 
    }


    async addToCart()
    {
        await this.addCart.click()
        return this
    }

    async clickCart()
    {
        await this.clickCartButton.click()
        return this 
    }

    async placeOrder()
    {
        await this.placeOrderButton.click()
        return this
    }

    async enterDetails()
    {
        await this.nameField.fill('Suhaila')
        await this.countryField.fill('India')
        await this.cityField.fill('Thrissur')
        await this.cardField.fill('0001100011001')
        await this.monthField.fill('April')
        await this.yearField.fill('2026')
        return this 
    }

    async purchase()
    {
        await this.purchaseButton.click()
        return new signoutpage(this.page)
    }
}

module.exports = placeorderpage
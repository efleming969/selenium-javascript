const WebDriver = require( 'selenium-webdriver' )
const By = WebDriver.By

const driver = new WebDriver.Builder()
    .forBrowser( "chrome" )
    .usingServer( "http://localhost:4444/wd/hub" )
    .build()

driver.get( 'https://www.duckduckgo.com' )

driver.findElement( By.id( "search_form_input_homepage" ) ).clear()
driver.findElement( By.id( "search_form_input_homepage" ) ).sendKeys( "selenium" )
driver.findElement( By.id( "search_button_homepage" ) ).click()

driver.findElement( By.linkText( "Selenium - Web Browser Automation" ) ).click()

driver.wait( WebDriver.until.elementLocated( By.id( "promo" ) ), 3000 )

driver.getTitle().then( function ( title ) {
    console.log( title )
} )

driver.quit()

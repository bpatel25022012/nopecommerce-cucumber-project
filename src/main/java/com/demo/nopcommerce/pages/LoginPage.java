package com.demo.nopcommerce.pages;


import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


/*
Created By Bhavesh
*/
public class LoginPage extends Utility {
    HomePage homePage = new HomePage();
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());
    @FindBy(id="Email")
    WebElement emailField;
    @FindBy(id="Password")
    WebElement passwordField;
    @FindBy (xpath = "//input[@class='button-1 login-button']")
    WebElement loginBtn;
    @FindBy (xpath = "//div[@class='page-title']//h1")
    WebElement welcomeText;
    @FindBy (xpath = "//h2[contains(text(),'Welcome to our store')]")
    WebElement loginPageText;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement _errorMessage;


    public void waitUntilVisibility(){

        waitUntilPresenceOfElementLocated(emailField,20);
    }

    public void enterEmailId(String email) {
      Reporter.addStepLog("Entering email address : " + email +" "+ " to email field : " + emailField.toString() + "<br>");
        waitUntilPresenceOfElementLocated(emailField,50);
      sendTextToElement(emailField, email);
        log.info("Entering email address "+ email +" "+ "to email field : " + emailField.toString());
    }

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering password : " + password +" "+ " to password field : " + passwordField.toString() + "<br>");
        sendTextToElement(passwordField, password);
        log.info("Entering password : "+ password +" "+ " to password field :" + passwordField.toString());
    }

    public void clickOnLoginButton() {
        Reporter.addStepLog("Clicking on login button : " + loginBtn.toString() + "<br>");
        clickOnElement(loginBtn);
        log.info("Clicking on login Button"+loginBtn.toString());
    }

    public String getWelcomeText() {
        Reporter.addStepLog("Getting text from : " + welcomeText.toString() + "<br>");
        log.info("Getting text from " +welcomeText.toString());
        return getTextFromElement(welcomeText);
    }



    public String getLoginPageText(){
        waitUntilPresenceOfElementLocated(loginPageText,30);
        Reporter.addStepLog("Getting text from : " + loginPageText.toString() + "<br>");
        log.info("Getting text from " +loginPageText.toString());
        return getTextFromElement(loginPageText);
    }

    public void loginToNopCommerce(String username,String password){
        enterEmailId(username);
        enterPassword(password);
        clickOnLoginButton();


    }
    public String getErrorMessage() {
        Reporter.addStepLog("Getting error message  from : " + _errorMessage.toString());
        log.info("Getting error message : " + _errorMessage.toString());
        return getTextFromElement(_errorMessage);

    }


}

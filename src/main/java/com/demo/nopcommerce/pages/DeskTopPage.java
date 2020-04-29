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
public class DeskTopPage extends Utility {
    private static final Logger log = LogManager.getLogger(DeskTopPage.class.getName());
    @FindBy (xpath = "//h1[contains(text(),'Desktops')]")
    WebElement deskTopText;

    @FindBy(xpath = "//a[contains(text(),'Build your own computer')]")
    WebElement buildYourOwnComputer;
    @FindBy(xpath = "//label[contains(text(),'320 GB')]")
    WebElement selectHDD;
    @FindBy (xpath = "//body/div/div/div/div/div/div/form/div/div/div/div/div/input[2]")
    WebElement addToCart;
    @FindBy (xpath = "//p[contains(text(),'The product has been added to your')]")
    WebElement successaddToCartMessage;

    public String deskTopPageText(){
        Reporter.addStepLog("Getting text from : " + deskTopText.toString() + "<br>");
        log.info("Getting text from " +deskTopText.toString());
        return getTextFromElement(deskTopText);
    }
    public void clickOnBuildYourOwnComputer(){
        Reporter.addStepLog("clicking on build your own computer tab : " + buildYourOwnComputer.toString()+"<br>");
        log.info("clicking on build your own computer tab : " + buildYourOwnComputer.toString());
        clickOnElement(buildYourOwnComputer);
    }

    public void clickOnHDDSize(){
        Reporter.addStepLog("selecting HDD : " + selectHDD.toString()+"<br>");
        log.info("selecting HDD : " + selectHDD.toString());
        clickOnElement(selectHDD);

    }
    public void clickOnAddToCart(){
        Reporter.addStepLog("clicking on add to cart button : " +addToCart.toString()+"<br>");
        log.info("clicking on add to cart button : " +addToCart.toString());
        clickOnElement(addToCart);

    }
    public String addToCartMessage(){
        Reporter.addStepLog("Getting text from : " + successaddToCartMessage.toString() + "<br>");
        log.info("Getting text from " +successaddToCartMessage.toString());
        return getTextFromElement(successaddToCartMessage);

    }


}


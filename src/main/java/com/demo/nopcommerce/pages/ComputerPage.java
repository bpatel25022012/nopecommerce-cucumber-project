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
public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());
    @FindBy (xpath ="//h2[@class='title']//a[contains(text(),'Desktops')]")
    WebElement deskTops;
    @FindBy (xpath ="//h1[contains(text(),'Computers')]")
    WebElement computerPageText;



    public void clickOnDeskTops(){
        waitUntilPresenceOfElementLocated(deskTops,30);
        Reporter.addStepLog("clicking on desktops tab : " +deskTops.toString()+"<br>");
        log.info("clicking on desktops tab : " +deskTops.toString());
        clickOnElement(deskTops);
    }

    public String computerPageText(){
        Reporter.addStepLog("Getting text from : " + computerPageText.toString() + "<br>");
        log.info("Getting text from " +computerPageText.toString());
        return getTextFromElement(computerPageText);
    }


}

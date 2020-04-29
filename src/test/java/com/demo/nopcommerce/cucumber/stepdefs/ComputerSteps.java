package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.ComputerPage;
import com.demo.nopcommerce.pages.DeskTopPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created By Bhavesh
 */
public class ComputerSteps {

    @When("^I click on computers link$")
    public void iClickOnComputersLink() {
        new HomePage().clickOnComputersLink();

    }

    @And("^I click on desktops link$")
    public void iClickOnDesktopsLink() {
        new ComputerPage().clickOnDeskTops();
    }

    @And("^I click on build my own computer link$")
    public void iClickOnBuildMyOwnComputerLink() {
        new DeskTopPage().clickOnBuildYourOwnComputer();
    }

    @And("^I select hard disk size$")
    public void iSelectHardDiskSize() {
        new DeskTopPage().clickOnHDDSize();
    }

    @And("^I click on add to cart tab$")
    public void iClickOnAddToCartTab() {
        new DeskTopPage().clickOnAddToCart();
    }

    @Then("^I should see item has been added to cart$")
    public void iShouldSeeItemHasBeenAddedToCart() {
        Assert.assertEquals(new DeskTopPage().addToCartMessage(),"The product has been added to your shopping cart");
    }

    @Then("^I should navigate to desktops page successfully$")
    public void iShouldNavigateToDesktopsPageSuccessfully() {
        Assert.assertEquals(new DeskTopPage().deskTopPageText(),"Desktops");
    }
}

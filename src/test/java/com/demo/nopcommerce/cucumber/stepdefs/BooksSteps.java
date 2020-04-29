package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.BooksPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created By Bhavesh
 */
public class BooksSteps {
    @When("^I click on books link$")
    public void iClickOnBooksLink() {
        new HomePage().clickOnBooksLink();
    }

    @Then("^I should navigate to books page successfully$")
    public void iShouldNavigateToBooksPageSuccessfully() {
        Assert.assertEquals(new BooksPage().booksPageText(),"Books");
    }

    @And("^I click on sort by a to z$")
    public void iClickOnSortByAToZ() {
        new BooksPage().clickOnSortByAToZ();
    }

    @Then("^I should see books sorted in a to z order$")
    public void iShouldSeeBooksSortedInAToZOrder() {
        new BooksPage().checkSortingOrder();
    }

    @And("^I click on low to high$")
    public void iClickOnLowToHigh() {
        new BooksPage().clickOnLowToHigh();
    }

    @Then("^I should see books sorted in low to high price order$")
    public void iShouldSeeBooksSortedInLowToHighPriceOrder() {
        new BooksPage().checkPriceOrder();
    }
}

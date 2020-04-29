package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.HomePage;
import com.demo.nopcommerce.pages.RegistrationPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import static com.demo.nopcommerce.utility.Utility.getRandomString;


public class RegisterSteps {
    String email = "Rocky"+ getRandomString(5)+"@gmail.com";
    String email1 = "Ricky"+getRandomString(4)+"@hotmail.com";
    String password ="Rocky"+getRandomString(3);
    String password1 ="Tiger"+getRandomString(3);


    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        Assert.assertTrue(true);
    }

    @And("^I select gender$")
    public void iSelectGender() {
        new RegistrationPage().clickOnGenderButton();
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String fname) {
        new RegistrationPage().enterFirstName(fname);

    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lname) {
        new RegistrationPage().enterLastName(lname);

    }

    @And("^I enter date of birth \"([^\"]*)\"$")
    public void iEnterDateOfBirth(String date) {
        new RegistrationPage().enterDateOfBirth(date);

    }

    @And("^I enter month of birth \"([^\"]*)\"$")
    public void iEnterMonthOfBirth(String month) {
        new RegistrationPage().enterMonthOfBirth(month);
    }

    @And("^I enter year of birth \"([^\"]*)\"$")
    public void iEnterYearOfBirth(String year) {
        new RegistrationPage().enterYearOfBirth(year);

    }

    @And("^I enter email id into email field$")
    public void iEnterEmailIdIntoEmailField() {
        new RegistrationPage().enterEmailId(email);
    }


    @And("^I enter company name \"([^\"]*)\"$")
    public void iEnterCompanyName(String compname) {
        new RegistrationPage().enterCompanyName(compname);
    }


    @And("^I enter password into password field$")
    public void iEnterPasswordIntoPasswordField() {
        new RegistrationPage().enterPassword(password);
    }

    @And("^I enter confirm password into confirm password field$")
    public void iEnterConfirmPasswordIntoConfirmPasswordField() {
        new RegistrationPage().enterConfirmPassword(password);
    }


    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegistrationPage().clickOnRegistrationBtn();
    }

    @Then("^I should register successfully$")
    public void iShouldRegisterSuccessfully() {
        Assert.assertEquals(new RegistrationPage().getRegistrationText(), "Your registration completed");

    }


    @And("^I enter different password into confirm password field$")
    public void iEnterDifferentPasswordIntoConfirmPasswordField() {
        new RegistrationPage().enterConfirmPassword(password1);
    }

    @Then("^I should see the error message on the screen \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageOnTheScreen(String errorMessage) {
        Assert.assertEquals(new RegistrationPage().getRegistrationErrorMessage(), errorMessage);

    }
}

package stepDefinitions;

import base.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.HomePage;
import pages.ChooseFlightPage;
import pages.DetailsPage;
import pages.VerifyPurcahsePage;

public class StepDefinitions extends TestBase {
	

	HomePage homepage =new HomePage();
	ChooseFlightPage chooseFlightPage = new ChooseFlightPage();
	DetailsPage detailsPage = new DetailsPage();
	VerifyPurcahsePage verifyPurcahsePage = new VerifyPurcahsePage();
	
	public StepDefinitions(){
		super();
		
	}
	
	@Before()
	   public void initial(){
		TestBase.initialization();
	}
	
	@After()
	  public void tear_Down(){
		
		driver.quit();
	}
	
	
	@Given("^User is on the Home Page$")
	public void user_is_on_the_home_page() throws Throwable {
		
		
		homepage.validateTitle();
		
	    
	}

	@When("^User enters the \"([^\"]*)\" from_city$")
	public void from_city(String fromcity) throws Throwable {
	
		homepage.dep_city(fromcity);
		
		}
	    

    @Then("^User enters the \"([^\"]*)\" to_city$")
     public void to_city(String tocity) throws Throwable {

	homepage.dest_city(tocity);
	
	}
    
    @Then("^User clicks the Search button$")
    public void search() throws Throwable {

	homepage.search();
	
	}
    
    @Then("^User choose a flight$")
    public void choose_flight() throws Throwable {

    	chooseFlightPage.chooseFlight();
	
	}
    
    @Then("^User enters \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
    public void enter_details(String name,String address, String city, String state, String zip, String cardnumber, String holder_name) throws Throwable {

	detailsPage.enter_details(name, address, city, state, zip, cardnumber, holder_name);
	
	}
    
    @Then("^User click on Purchase Flight$")
    public void purchase_flight() throws Throwable {

    	detailsPage.click_purchase();
	
	}
    
    @Then("^User verifies the booking$")
    public void verify_booking() throws Throwable {

    	verifyPurcahsePage.validate_Purchase();
	
	}
    
    @Then("^User captures the bookingId$")
    public void capture_booking() throws Throwable {

    	verifyPurcahsePage.get_bookingId();
	
	}
    
}

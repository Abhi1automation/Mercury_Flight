package stepDefinitions;

import java.util.Map;

import base.TestBase;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.SignInPage;
import pages.LoginPage;

public class StepDefinitions extends TestBase {
	
	
	SignInPage signinpage;
	LoginPage loginpage;
	
	public StepDefinitions(){
		super();
		
	}
	
	@Before()
	   public void initial(){
		TestBase.initialization();
	}
	
	
	@Given("^User is on the Signin page$")
	public void user_is_on_the_Signin_page() throws Throwable {
		signinpage= new SignInPage();
		signinpage.clickSignIn();
	    
	}

	@When("^User enters the username and password$")
	public void user_enters_the_username_and_password(DataTable credentials) throws Throwable {
		loginpage = new LoginPage();
		for(Map<String,String>data:credentials.asMaps(String.class, String.class)){	
		loginpage.Login(data.get("Username"), data.get("Password"));
		//loginpage.click();
		//driver.navigate().back();
		//signinpage.clickSignIn();
		
		}
	    
	}

	@Then("^User clicks on the loginbutton$")
	public void user_clicks_on_the_loginbutton() throws Throwable {
		loginpage.click();
		
	   
	}

	@Given("^User is on the HomePage$")
	public void user_lands_on_the_HomePage() throws Throwable {
		System.out.println(driver.getTitle());
	}
	
	
	@After
	public void tear_down()
	{
		driver.quit();
	}

}

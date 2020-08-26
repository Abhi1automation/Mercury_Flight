package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.TestBase;



public class SignInPage extends TestBase {

	
	@FindBy(xpath="//span[contains(text(),'Hello')]")
	WebElement signinbutton;
	
	//Initialize Page Objects
	public SignInPage(){
		
		PageFactory.initElements(driver, this);
	}

	
	//Actions
   public void clickSignIn(){

	   signinbutton.click();
	 
   }
}

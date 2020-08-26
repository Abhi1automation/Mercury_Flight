package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.TestBase;


public class LoginPage extends TestBase {
	
	
	@FindBy(id="ap_email")
	WebElement uname;

	@FindBy(id="ap_password")
	WebElement passw;

	@FindBy(id="signInSubmit")
	WebElement loginbutton;

	public LoginPage(){
		
		PageFactory.initElements(driver, this);
	}

	public String getTitle(){
		
		String title = driver.getTitle();
		return title;
	}

	public void Login(String un, String pwd){
		
		uname.sendKeys(un);
		passw.sendKeys(pwd);
				
	}
	
	public void click(){
		loginbutton.click();
	}
	

}

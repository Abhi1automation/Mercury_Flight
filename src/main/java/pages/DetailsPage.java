package pages;



import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import base.TestBase;


public class DetailsPage extends TestBase {
	

	public DetailsPage(){
		
		PageFactory.initElements(driver, this);
		
	}


	public void enter_details(String name,String address, String city, String state, String zip, String cardnumber, String holder_name){
		
		driver.findElement(By.id("inputName")).sendKeys(name);
		driver.findElement(By.id("address")).sendKeys(address);
		driver.findElement(By.id("city")).sendKeys(city);
		driver.findElement(By.id("state")).sendKeys(state);
		driver.findElement(By.id("zipCode")).sendKeys(zip);
		driver.findElement(By.id("creditCardNumber")).sendKeys(cardnumber);
		driver.findElement(By.id("nameOnCard")).sendKeys(holder_name);
		
		
	}
	
	public void click_purchase(){
		
		driver.findElement(By.xpath("//input[@value='Purchase Flight']")).click();
	}
	

}

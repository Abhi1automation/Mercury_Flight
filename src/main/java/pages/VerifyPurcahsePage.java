package pages;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import base.TestBase;
import net.serenitybdd.core.annotations.findby.FindBy;


public class VerifyPurcahsePage extends TestBase {
	

	public VerifyPurcahsePage(){
		
		PageFactory.initElements(driver, this);
		
	}


	public void validate_Purchase(){
		
		String success_text=driver.findElement(By.xpath("/html/body/div[2]/div/h1")).getText();
		
		assert success_text.equals("Thank you for your purchase today!");
	}
	
	
public void get_bookingId(){
		
		String booking_Id=driver.findElement(By.xpath("/html/body/div[2]/div/table/tbody/tr[1]/td[2]")).getText();
		
		System.out.println(booking_Id);
	}
	
	
	
	
}
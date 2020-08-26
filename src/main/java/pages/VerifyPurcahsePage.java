package pages;



import org.openqa.selenium.By;


import org.openqa.selenium.support.PageFactory;
import base.TestBase;


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

public void verify_message(){

	String message=driver.findElement(By.xpath("/html/body/div[2]/div/h1")).getText();
	
	assert message.equals("Please enter all details");
}
	
	
	
	
}
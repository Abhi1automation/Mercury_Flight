package pages;



import org.openqa.selenium.By;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import base.TestBase;


public class HomePage extends TestBase {
	

	public HomePage(){
		
		PageFactory.initElements(driver, this);
		
	}

	public void validateTitle(){
		
		String title = driver.getTitle();
		assert title.equals("BlazeDemo");
	}

	public void dep_city(String from_city){
		
		Select select = new Select(driver.findElement(By.name("fromPort")));
		select.selectByValue(from_city);
				
	}
	
    public void dest_city(String to_city){
		
		Select select = new Select(driver.findElement(By.name("toPort")));
		select.selectByValue(to_city);
				
	}
	
	public void search(){
		driver.findElement(By.xpath("//input[@value='Find Flights']")).click();
	}
	

}

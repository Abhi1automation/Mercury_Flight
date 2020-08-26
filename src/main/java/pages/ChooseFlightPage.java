package pages;



import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.PageFactory;


import base.TestBase;



public class ChooseFlightPage extends TestBase {
	

	public ChooseFlightPage(){
		
		PageFactory.initElements(driver, this);
		
	}
	


	public void chooseFlight(String flight_name){
		
		WebElement table=driver.findElement(By.className("table"));
		int row_count=table.findElements(By.tagName("tr")).size();
		String before="/html/body/div[2]/table/tbody/tr[";
		String after_name="]/td[3]";
		String after_button="]/td[1]/input";
		
		
		for(int i=1;i<row_count;i++){
			
			String name= driver.findElement(By.xpath(before+i+after_name)).getText();
			
			if(name.equals(flight_name)){
		
				driver.findElement(By.xpath(before+i+after_button)).click();
				
				break;
				
			}
		}
	
	}



	

}

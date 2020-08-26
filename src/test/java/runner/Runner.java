package runner;




import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(

		features = {"C:\\Users\\Abhi\\workspace\\CucumberSerenityFramework\\resources\\feature\\bookFlight.feature"},
		glue={"stepDefinitions"},
        format={"pretty", "html:test-output"},
        monochrome=true,
        dryRun=false,
        strict=false
        //tags ={"@Login1"}
)
public class Runner {

}

package tutorial.rest.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import tutorial.core.models.entities.Result;
import tutorial.core.services.CalculatorService;
import tutorial.rest.resources.NumbersResource;
import tutorial.rest.resources.ResultResource;
import tutorial.rest.resources.asm.ResultResourceAsm;


@Controller
@RequestMapping("/calculator")
public class CalculatorController {
	
	CalculatorService calculatorService;

	@Autowired
	public CalculatorController(CalculatorService calculatorService) {
		this.calculatorService=calculatorService;
	}
	
	


	  @RequestMapping( value="/add/numbers",method = RequestMethod.POST)
	public ResponseEntity<ResultResource> addNumbers(@RequestBody NumbersResource numbers) {
		 Result result = calculatorService.add(numbers.toNumbers());
		
		 ResultResource resultResource =new ResultResourceAsm().toResource(result);
		 
		return new ResponseEntity<ResultResource>(resultResource,HttpStatus.OK);
	}

}

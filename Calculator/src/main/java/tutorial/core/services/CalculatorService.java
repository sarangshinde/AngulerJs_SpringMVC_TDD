package tutorial.core.services;

import org.springframework.stereotype.Service;

import tutorial.core.models.entities.Numbers;
import tutorial.core.models.entities.Result;

@Service
public class CalculatorService {

	public Result add(Numbers numbers) {
		Result result = new Result();
		System.out.println(numbers.getNumber1()+numbers.getNumber2());
		result.setResultValue(numbers.getNumber1()+numbers.getNumber2());
		return result;
		
	}


}

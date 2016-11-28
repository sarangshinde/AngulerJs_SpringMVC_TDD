package tutorial.rest.resources.asm;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import tutorial.core.models.entities.Result;
import tutorial.rest.mvc.CalculatorController;
import tutorial.rest.resources.ResultResource;

public class ResultResourceAsm extends ResourceAssemblerSupport<Result, ResultResource>{

	public ResultResourceAsm() {
		super(CalculatorController.class, ResultResource.class);
	
	}

	@Override
	public ResultResource toResource(Result result) {
		ResultResource resultResource = new ResultResource();
		resultResource.setResultValue(result.getResultValue());
		return resultResource;
	}

}

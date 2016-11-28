package tutorial.rest.resources;

import org.springframework.hateoas.ResourceSupport;

public class ResultResource extends ResourceSupport{
	
	private int resultValue;

	public int getResultValue() {
		return resultValue;
	}

	public void setResultValue(int resultValue) {
		this.resultValue = resultValue;
	}
	

}

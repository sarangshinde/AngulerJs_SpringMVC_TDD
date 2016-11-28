package tutorial.rest.resources;

import org.springframework.hateoas.ResourceSupport;

import tutorial.core.models.entities.Numbers;

public class NumbersResource extends ResourceSupport{
	
	int number1;
	public int getNumber1() {
		return number1;
	}
	public void setNumber1(int number1) {
		this.number1 = number1;
	}
	public int getNumber2() {
		return number2;
	}
	public void setNumber2(int number2) {
		this.number2 = number2;
	}
	int number2;
	
	public Numbers toNumbers()
	{
		Numbers numbers = new Numbers();
		numbers.setNumber1(number1);
		numbers.setNumber2(number2);
		return numbers;
	}

}

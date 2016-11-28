package tutorial.core.models.entities;

public class Numbers {
	
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
	
	
	@Override
	public boolean equals(Object obj) {
		Numbers number = (Numbers)obj;
		return (this.getNumber1() == number.getNumber1() && this.getNumber2() == number.getNumber2());
		
	}

}

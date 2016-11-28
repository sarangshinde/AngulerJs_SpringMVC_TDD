package tutorial.mvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import tutorial.core.models.entities.Numbers;
import tutorial.core.models.entities.Result;
import tutorial.core.services.CalculatorService;
import tutorial.rest.mvc.CalculatorController;


public class CalculatorControllerTest {
	
	@InjectMocks
	private CalculatorController calculatorController;
	
	@Mock
	private CalculatorService calculatorService;
	
	
	private MockMvc mockMvc;

	@Before
	public void setUp() throws Exception {
		
		MockitoAnnotations.initMocks(this);
		
		mockMvc = MockMvcBuilders.standaloneSetup(calculatorController).build();
	}

	@Test
	public void should_returnSum_of_twoNumbers() throws Exception {
	Numbers numbers = new Numbers();
	numbers.setNumber1(1);
	numbers.setNumber2(2);
	
	Result result = new Result();
	result.setResultValue(3);
	
		when(calculatorService.add(numbers)).thenReturn(result);
		
		mockMvc.perform(post("/calculator/add/numbers")	
						.content("{\"number1\":\"1\",\"number2\":\"2\"}")
						
		                .contentType(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk());
	}

}

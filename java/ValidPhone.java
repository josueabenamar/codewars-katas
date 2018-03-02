public class ValidPhone
{
	private static final String expression = "\\([0-9]{3}\\)\\ [0-9]{3}\\-[0-9]{4}";

	public static boolean validPhoneNumber(String phoneNumber)
	{
		return phoneNumber.matches(expression);
	}

	public static void main(String args[])
	{
		System.out.println(validPhoneNumber("(123)") + ", TRUE");
		System.out.println(validPhoneNumber("(123) 456-7890") + ", TRUE");
		System.out.println(validPhoneNumber("(1111)555 2345") + ", FALSE");
		System.out.println(validPhoneNumber("(098) 123 4567") + ", FALSE");
	}
}

public class Multiples35
{
	public int solution(int n)
	{
		if(n <= 0) return 0;

		int sum = 0;
		for(int i = 1; i < n; i++)
			if(i % 3 == 0 || i % 5 == 0) sum += i;

		return sum;
	}

	public static void main(String args[])
	{
		System.out.println(new Multiples35().solution(10));
		System.out.println("23");
	}
}

public class GiveFive
{
	public static int dontGiveMeFive(int start, int end)
	{
		int sum = 0;
		for( ; start <= end; start++)
			if(!String.valueOf(start).contains("5")) sum++;

		return sum;
	}

	public static void main(String args[])
	{
		System.out.println(dontGiveMeFive(1,9) + ", 8");
		System.out.println(dontGiveMeFive(4,17) + ", 12");
	}
}

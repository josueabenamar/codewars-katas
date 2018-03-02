public class OrderWords
{
	public static String order(String array)
	{
		String result = "";

		String[] words = array.split(" ");
		int num_words = words.length;

		for(int i = 0; i < num_words; i++)
			for(int j = 0; j < num_words; j++)
				if(words[j].contains(""+(i+1)))
					result += words[j] + " ";

		return result.trim();
	}

	public static void main(String args[])
	{
		System.out.println(order("is2 Thi1s T4est 3a"));
		System.out.println(order("4of Fo1r pe6ople g3ood th5e the2"));
		System.out.println(order("Empty input should return empty string"));
	}
}

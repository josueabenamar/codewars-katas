public class ReverseWords
{
	public static String reverseWords(String str)
	{
		StringBuilder sb = new StringBuilder();
		String words[] = str.split(" ");

		int size = words.length;
		for(int i = size-1; i >= 0; i--)
		{
			sb.append(words[i]);
			if(i > 0) sb.append(" ");
		}

		return sb.toString();
	}

	public static void main(String args[])
	{
		System.out.println(ReverseWords.reverseWords("I like eating"));
		System.out.println("eating like I");
		System.out.println("*");
		System.out.println(ReverseWords.reverseWords("I like flying"));
		System.out.println("flying like I");
		System.out.println("*");
		System.out.println(ReverseWords.reverseWords("The world is nice"));
		System.out.println("nice is world The");
	}
}

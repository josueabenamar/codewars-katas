public class MissingLetter
{
	public static char findMissingLetter(char[] array)
	{
		char letter = array[0];
		for(int i = 0; i < array.length; i++, letter++)
			if(letter != array[i]) return letter;

		return ' ';
	}

	public static void main(String args[])
	{
		System.out.println(findMissingLetter(new char[] { 'a','b','c','d','f' }) + ", e");
		System.out.println(findMissingLetter(new char[] { 'O','Q','R','S' }) + ", P");
	}
}

public class PangramChecker
{
	public boolean check(String sentence)
	{
		sentence = sentence.toLowerCase();
		for(char letter = 'a'; letter <= 'z'; letter++)
			if(!sentence.contains(""+letter)) return false;

		return true;
	}

	public static void main(String args[])
	{
		PangramChecker pc = new PangramChecker();
		System.out.println(pc.check("The quick brown fox jumps over the lazy dog.") + ", TRUE");
		System.out.println(pc.check("You shall not pass!") + ", FALSE");
	}
}

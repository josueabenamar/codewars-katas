public class ClerkLine
{
	public static String Tickets(int[] line)
	{
		int amount25 = 0, amount50 = 0, amount100 = 0;

		int clients = line.length;
		for(int i = 0; i < clients; i++)
		{
			int money = line[i];
			if(money == 25) amount25++;
			else if(money == 50)
			{
				amount25--;
				amount50++;
			}
			else if(money == 100)
			{
				if(amount50 > 0) { amount50--; amount25--;}
				else amount25 -= 3;
				amount100++;
			}
			if(amount25 < 0 || amount50 < 0 || amount100 < 0) return "NO";
		}
		return "YES";
	}

	public static void main(String args[])
	{
		System.out.println(Tickets(new int[] {25, 25, 50}) + ", YES");
		System.out.println(Tickets(new int[] {25, 100}) + ", NO");
		System.out.println(Tickets(new int[] {25, 25, 50, 50, 100}) + ", NO");
		System.out.println(Tickets(new int[] {25, 25, 25, 25, 25, 100, 100}) + ", NO");
	}
}

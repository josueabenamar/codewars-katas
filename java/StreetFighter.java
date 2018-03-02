public class StreetFighter
{
	public static String[] streetFighterSelection(String[][] fighters, int[] position, String[] moves)
	{
		int num_moves = moves.length;
		int lim_v = fighters.length, lim_h = fighters[0].length;
		String[] selection = new String[num_moves];

		for(int s = 0, i = position[0], j = position[1]; s < num_moves; s++)
		{
			switch(moves[s])
			{
				case "up":
					if(i > 0) i--;
				break;
				case "down":
					if(i < lim_v-1) i++;
				break;
				case "left":
					if(j > 0) j--;
					else j = lim_h-1;
				break;
				case "right":
					if(j < lim_h-1) j++;
					else j = 0;
				break;
			}
			selection[s] = fighters[i][j];
		}

		return selection;
	}

	public static void main(String args[])
	{
		String[][] fighters = new String[][]
		{
			new String[] { "Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega" },
			new String[] { "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison" }
		};

		String[] solution;

		solution = streetFighterSelection(fighters, new int[]{0,0}, new String[]{});
		for(int i = 0; i < solution.length; i++)
			System.out.print(solution[i] + ", ");

		solution = streetFighterSelection(fighters, new int[]{0,0}, new String[] { "up", "left", "right", "left", "left" });
		for(int i = 0; i < solution.length; i++)
			System.out.print(solution[i] + ", ");

		solution = streetFighterSelection(fighters, new int[]{0,0}, new String[] { "down", "down", "down", "down" });
		for(int i = 0; i < solution.length; i++)
			System.out.print(solution[i] + ", ");

		System.out.println();
	}
}

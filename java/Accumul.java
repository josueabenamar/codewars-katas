public class Accumul
{
	public static String accum(String s)
	{
		StringBuilder sb = new StringBuilder();
		String[] chars = s.split("");

		int lim = chars.length;
		for(int i = 0; i < lim; i++)
		{
			String c = chars[i].toUpperCase();
			for(int j = 0; j < i+1; j++)
			{
				sb.append(c);
				if(j == 0) c = chars[i].toLowerCase();
			}
			sb.append("-");
		}

		return sb.substring(0, sb.length()-1);
	}

	public static void main(String args[])
	{
		System.out.println(Accumul.accum("ZpglnRxqenU") + "," + "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	}
}

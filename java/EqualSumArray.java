import java.util.Arrays;

public class EqualSumArray
{
	public static int findEvenIndex(int[] array)
	{
		int size = array.length;
		for(int i = 0; i < size; i++)
		{
			int sum = 0;
			int[] left = Arrays.copyOfRange(array, 0, i);
			int[] right = Arrays.copyOfRange(array, i+1, size);
			for(int j = 0; j < left.length; j++) sum += left[j];
			for(int k = 0; k < right.length; k++) sum -= right[k];

			if(sum == 0) return i;
		}

		return -1;
	}

	public static void main(String args[])
	{
		System.out.println("3, " + findEvenIndex(new int[] {1,2,3,4,3,2,1}));
		System.out.println("1, " + findEvenIndex(new int[] {1,100,50,-51,1,1}));
		System.out.println("-1, " + findEvenIndex(new int[] {1,2,3,4,5,6}));
		System.out.println("3, " + findEvenIndex(new int[] {20,10,30,10,10,15,35}));
		System.out.println("-1, " + findEvenIndex(new int[] {-8505, -5130, 1926, -9026}));
		System.out.println("1, " + findEvenIndex(new int[] {2824, 1774, -1490, -9084, -9696, 23094}));
		System.out.println("6, " + findEvenIndex(new int[] {4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4}));
	}
}

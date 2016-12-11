import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int arr[][] = new int[7][6];
        for(int i=0; i < 6; i++){
            for(int j=0; j < 6; j++){
                arr[i][j] = in.nextInt();
            }
        }

        int centerHGx;
        int centerHGy = 1;
        int maxSum = -64;

        for (int x = 1; x < 6 - 2; x++) {
            for (int y = 1; y < 6 - 2; y++) {
                centerHGx = x;
                centerHGy = y;
System.out.println("Dd");
                int topSum = arr[centerHGx - 1][centerHGy -1]
                        + arr[centerHGx][centerHGy - 1]
                        + arr[centerHGx + 1][centerHGy - 1];
                int bottomSum = arr[centerHGx - 1][centerHGy + 1]
                        + arr[centerHGx][centerHGy + 1]
                        + arr[centerHGx + 1][centerHGy + 1];
                int centerSum = arr[centerHGx][centerHGy];

                int sum = topSum + centerSum + bottomSum;

                if (sum > maxSum) maxSum = sum;
            }
        }

        System.out.println(maxSum);
    }
}

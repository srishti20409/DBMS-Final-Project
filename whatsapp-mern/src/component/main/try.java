package com.company;

import java.util.ArrayList;
import java.util.Scanner;

@SuppressWarnings("removal")
public class AD
{
    static int[] dRow = {-1,0,1,0};
    static int[] dCol = {0,-1,0,1};
    static String[][] final_list = new String[501][501];

    static Boolean Valid(boolean[][] grid, int n , int row, int col)
    {
        if (row < 0 || col < 0 || row >= n || col >= n)
            return false;
        return grid[row][col];
    }

    boolean bpm(boolean[][] Grid, int x, int y, ArrayList<Integer> seen, int[][][] pair_point, int N )
    {
        for (int i = 0; i < 4; i++) {
            int u = x + dRow[i];
            int v = y + dCol[i];
            if (Valid(Grid, N, u, v) && seen.contains(u * N + v) )
            {
//                    for (int m = 0 ; m< seen.size();m++)
//                        System.out.println(x +" "+ y +" " + seen.get(m) + " " + (u * N + v));
//                    if (seen.contains(u * N + v))
//                    {
                    seen.remove(new Integer(u * N + v));
                    if (( pair_point[u][v][0] < 0 && pair_point[u][v][1] < 0 ) || bpm(Grid, pair_point[u][v][0], pair_point[u][v][1], seen, pair_point, N)) {
                        pair_point[u][v][0] = x;
                        pair_point[u][v][1] = y;
                        //final_list.add((x) + " " + (y) + " " + (u) + " " + (v));
                        //System.out.println((x) + " " + (y) + " " + (u) + " " + (v));
                        final_list[u][v] = ((x + 1) + " " + (y + 1));
                        return true;
                    }
//                    }
            }
        }
        return false;
    }

    int maxBPM(boolean[][] Grid,int N  , int[][][] pair_point)
    {
        int result = 0;

//        int[][][] pair_point = new int[N][N][2];
        //boolean[][] seen = new boolean[N*N][4];

        ArrayList<Integer> seen = new ArrayList<>();
//        for (int u = 0; u < N; u++) {
//            for (int v = 0; v < N; v++)
//            {
//                for(int i = 0; i < 4; i++) {
//                    int adjx = u + dRow[i];
//                    int adjy = v + dCol[i];
//                    if (Valid(Grid, N, adjx, adjy))
//                        seen.add(N * adjx + adjy);
//                }
////                pair_point[u][v][0] = -1;
////                pair_point[u][v][1] = -1;
//            }
//        }

        for (int u = 0; u < N; u++) {
            if (u % 2 == 0) {
                for (int v = 0; v < N; v = v + 2) {
                    for (int i = 0; i < 4; i++) {
                        int adjx = u + dRow[i];
                        int adjy = v + dCol[i];
                        if (Valid(Grid, N, adjx, adjy))
                            seen.add(N * adjx + adjy);
                    }
                }
            } else {
                for (int v = 1; v < N; v = v + 2) {
                    for (int i = 0; i < 4; i++) {
                        int adjx = u + dRow[i];
                        int adjy = v + dCol[i];
                        if (Valid(Grid, N, adjx, adjy))
                            seen.add(N * adjx + adjy);
                    }
                }
            }
        }


        for (int u = 0; u < N; u++)
        {
            if(u%2 == 0)
            {
                for (int v = 0; v < N; v=v+2)
                {
//                    for(int i = 0; i < 4; i++)
//                    {
//                        int adjx = u + dRow[i];
//                        int adjy = v + dCol[i];
//                        if(Valid(Grid, N, adjx,adjy))
//                            seen.add(N * adjx +adjy);
//                    }
                    if(Grid[u][v])
                        if (bpm(Grid, u, v, seen, pair_point, N ))
                            result++;
                }
            }
            else
            {
                for (int v = 1; v < N; v=v+2)
                {
//                    for(int i = 0; i < 4; i++)
//                    {
//                        int adjx = u + dRow[i];
//                        int adjy = v + dCol[i];
//                        if(Valid(Grid, N, adjx,adjy))
//                            seen.add(N * adjx +adjy);
//                    }
                    if(Grid[u][v])
                        if (bpm(Grid, u, v, seen, pair_point, N ))
                                result++;
                }
            }
        }
        return result;
    }

    public static void main(String[] args)
    {
        AD abc = new AD();
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        if (N == 1)
            System.out.println(0);
        else
        {
            int[][][] pair_point = new int[N][N][2];
            boolean[][] Grid = new boolean[N][N];
            int count1 = 0;
            for (int u = 0; u < N; u++) {
                String str = sc.next();
                for (int v = 0; v < N; v++)
                {
                    pair_point[u][v][0] = -1;
                    pair_point[u][v][1] = -1;

                    int num = Character.getNumericValue(str.charAt(v));

                    if (num == 1) {
                        Grid[u][v] = true;
                        count1++;
                    } else
                        Grid[u][v] = false;
                }
            }

            if (count1 == 0) {
                System.out.println(0);
            } else if (count1 % 2 == 1) {
                System.out.println(0);
            } else {
                int ans = abc.maxBPM(Grid, N , pair_point);
                if (2 * ans < count1)
                    System.out.println(0);
                else {
                    System.out.println(1);
                    System.out.println(ans);
                    for (int u = 0; u < N; u++)
                    {
                        if (u % 2 == 1) {
                            for (int v = 0; v < N; v = v + 2) {
                                if (Grid[u][v])
                                    System.out.println((u + 1) + " " + (v + 1) + " " + final_list[u][v]);
                            }
                        }
                        else {
                            for (int v = 1; v < N; v = v + 2) {
                                if (Grid[u][v])
                                    System.out.println((u + 1) + " " + (v + 1) + " " + final_list[u][v]);
                            }
                        }
                    }
                }
            }
        }
    }
}
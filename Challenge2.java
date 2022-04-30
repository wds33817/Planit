public static void FindHighestNumber(String s) {
    String s1 = s.toLowerCase();
    char[] c = s.toCharArray();
    int max = -1;
    char maxChar = ' ';
    int[] res = new int[256];
    for (int i = 0; i < s1.length(); i++) {
        res[s1.charAt(i)]++;
    }
    for (int i = 0; i < s1.length(); i++) {
        char ch = s1.charAt(i);
        if (max < res[ch]) {
            max = res[ch];
            maxChar = ch;
        }
    }
    System.out.println(maxChar);
}

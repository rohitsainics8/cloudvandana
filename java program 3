public class PangramChecker {
    public static boolean isPangram(String sentence) {
        // Convert the sentence to lowercase to make it case-insensitive
        sentence = sentence.toLowerCase();

        // Create an array of booleans to track the presence of each letter from 'a' to 'z'
        boolean[] alphabet = new boolean[26];

        // Iterate through each character in the sentence
        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);

            // Check if the character is a lowercase letter
            if ('a' <= c && c <= 'z') {
                // Mark the corresponding letter as present in the alphabet array
                alphabet[c - 'a'] = true;
            }
        }

        // Check if all letters from 'a' to 'z' are present in the alphabet array
        for (boolean letterPresent : alphabet) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String inputSentence = "The quick brown fox jumps over the lazy dog";
        boolean result = isPangram(inputSentence);

        if (result) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}

function checkPalindrome() {
    const textInput = document.getElementById('textInput').value;
    const result = document.getElementById('result');

    // Remove non-alphanumeric characters and convert to lowercase
    const cleanString = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedString = cleanString.split('').reverse().join('');

    // Check if the cleaned string is equal to its reversed version
    if (cleanString === reversedString) {
        result.textContent = `"${textInput}" is a palindrome!`;
        result.style.color = 'green';
    } else {
        result.textContent = `"${textInput}" is not a palindrome.`;
        result.style.color = 'red';
    }
}
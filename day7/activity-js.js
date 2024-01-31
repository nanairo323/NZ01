let score = parseInt(prompt("Enter the score"))

switch (true) {
    case score >= 90:
        console.log("Grade A");
        break;
    case score <= 89 && score >= 80:
        console.log("Grade B");
        break;
    case score <= 79 && score >= 70 :
        console.log("Grade C");
        break;
    case score <= 69 && score >= 60 :
        console.log("Grade D");
        break;
    default:
        console.log("Grade F");
        break;
}
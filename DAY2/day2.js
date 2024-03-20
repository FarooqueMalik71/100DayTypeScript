//🚀 *Day 2 Challenge: Start Coding!* 🚀
//*Question 4:* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like //the following, including the quotation marks:
//"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.");
//*Question 5:* Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message //and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, ", once said, \u201CA person who never made a mistake never tried anything new.\u201D ");
console.log(message);
//*Question 6:* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" //(new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
var name3 = "\t\n Farooque Malik \n\t";
console.log(name3);
//is used for remove white space, and line from string;
console.log(name3.trim());

//🚀 *Day 5 Challenge: Start Coding!* 🚀

//*Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and //make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


let transport: string[] = ["Hounda","Tesl car","cycle"]
transport.forEach(transports => {
    console.log(`I would like to own a ${transports}`)
})




//*Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people //you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.



let  invitaion : string [] =["Farooque", "Talha", "salman","Aman"]
invitaion.forEach( invite => {
    console.log(`Mr. ${invite} Sahab  would you like to join me for dinner?"\n `)
} )







//*Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.




let  invitaion1 : string [] =["Farooque", "Talha", "salman","Aman"]
invitaion1.forEach( invite => {
    console.log(`\nMr. ${invite} Sahab  would you like to join me for dinner?"\n `)
} )

let unableToAttend : string = "Talha"
let unableToAttend1 : string = "salman"
 console.log(`${unableToAttend} can't make it to dinner so "Malik Sahab" is new guest`)
 console.log(`${unableToAttend1} can't make it to dinner so "Shaikh Sahab" is new guest\n`)

let newGuest : string = 'Malik sahab'
let newGuest1 : string = 'Shaikh sahab'
invitaion1[invitaion1.indexOf(unableToAttend)] = newGuest;
invitaion1[invitaion1.indexOf(unableToAttend1)] = newGuest1;
invitaion1.forEach(invite => {console.log(`Dear ${invite} would you like to join me for Dinner?`)})

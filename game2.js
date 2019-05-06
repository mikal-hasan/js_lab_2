let answer = prompt("Do you want to play a game?");

while (answer) {

   if (answer === "yes") {
       var user = prompt("Please enter your name");
       game(user);
   }

   else if (answer === "no") {
       break;
   }

   function game(user) {
       let userHealth = 40;
       let grantHealth = 10;
       let winCount = 0;

       //move the while loop up into the function to read variables
       while (winCount <= 3){
           //I don't have to use var in this function because of "let"
            grantHealth = grantHealth - Math.ceil(Math.random() * 2);
           
            userHealth = userHealth - Math.ceil(Math.random() * 2);
          
           console.log(`${user} has ${userHealth} health remaining. 
           Grant the Mighty Chicken has ${grantHealth} health remaining.`);

           if (grantHealth <= 0) {
            console.log(`You killed Grant ${winCount ++} times`);
            winCount ++;
            break
            //move 'Grant' and break' above 'user' to follow function layout
        }
           
           if (userHealth < 1) {
               console.log("Sorry you lose");
           }

           

       }

     }

    }

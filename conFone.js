/*const balance = 1000;

if (balance < 500) {
  console.log("less than 500");

}
 else if (balance < 750) {
  console.log("less than750");

} 
else if (balance < 900) {
  console.log("less than750");
}
 else {
  console.log("less than 1200 ");
}
*/

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromgoogle = false;
const userLoggedInFromgmail = false;

if (userLoggedIn && debitCard && 3 == 2) {
  console.log("allow to buy a course");
}
if (userLoggedInFromgmail || userLoggedInFromgoogle) {
  console.log("user logged In");
}

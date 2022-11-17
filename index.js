console.log("****soru 1******");
function findPrime(...numbers) {

  for (var i = 0; i < numbers.length; i++) {
   
    for (var x = 2; x < numbers[i]; x++) {
      if (numbers[i] % x == 0) { 
        break;
      }
    }
    if (numbers[i] == x) {
      console.log(numbers[i] +  " is prime");

    }
    else
    {
      console.log(numbers[i]+ " is not prime");
    }

  }
}
findPrime(1,2,3,4, 120, 16, 13, 5);

console.log("****soru 4******");
let count=0
let i,number 
for(number=2;number<=1000;number++)
{
for( i=1;i<=number;i++)
{
  if(number%i==0)
  count++
  
}

if(count==2)

console.log(number)
count=0 
}


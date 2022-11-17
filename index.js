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
findPrime(1,2,3,4,16,120,11,7);




console.log("****soru 2*****");
function arkadasSayi(number1,number2)
{
var sum1=0;
var sum2=0;
for(k=0;k<number1;k++)
  {
    if(number1%k==0)
    {
      sum1+=k;
    }
  }
for(k=0;k<number2;k++)
  {
    if(number2%k==0)
    {
      sum2+=k;
    }
  }
if(sum1==number2&&sum2==number1)
{
  console.log("Sayılar arkadaş sayılardır");
}
else
{
  console.log("Sayılar arkadaş sayı değillerdir");
}
}
arkadasSayi(220,284);



console.log("****soru 3******");
var t;
var sayi;

for(sayi=1;sayi<1000;sayi++)
{
var sum=0;
for(t=1; t<sayi; t++)
 {
      if (sayi%t==0)
      {
            sum=sum+t;      
      }
 }
 if (sayi==sum)
 {
      console.log(sayi);      
 }
 
}



console.log("****soru 4******");
let count=0
let i,number 
for(number=2;number<=1000;number++)
{
for(i=1;i<=number;i++)
{
  if(number%i==0)
  count++
  
}

if(count==2)

console.log(number)
count=0 
}



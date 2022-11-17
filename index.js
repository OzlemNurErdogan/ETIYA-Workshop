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
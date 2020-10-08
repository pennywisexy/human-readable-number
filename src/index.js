module.exports =    function toReadable (number) {
    let [ zero, one, two, three, four,five,six,seven,eight,nine,ten,
          eleven,twelve,thirteen,fourteen,fifteen,twenty,thirty,forty,fifty,
          oneHundred
        ] = [
          'zero', 'one', 'two', 'three', 'four','five','six','seven','eight','nine','ten',
          'eleven','twelve','thirteen','fourteen','fifteen','twenty','thirty','forty','fifty',
          'oneHundred'
        ];
    let singleDigit = ['zero', 'one', 'two', 'three', 'four','five','six','seven','eight','nine'];
    let tenToFifteen = ['ten','eleven','twelve','thirteen','fourteen','fifteen']
    
    function beforeHundred(number) {
      if(number < 10) {
      return res = singleDigit[number];
    }
      
    if(number >= 10 && number <= 15) {
      return tenToFifteen[number-10];
    }
     
    if(number >= 16 && number <= 19) {
        if(number === 18) return singleDigit[number-10] + 'een';
      return singleDigit[number-10] + 'teen';
    }
     
    if(number >= 20 && number <= 29) {
      if(number === 20) return twenty
      return twenty + ' ' + singleDigit[number-20];
    }
    
    if(number >= 30 && number <= 39) {
      if(number === 30) return thirty
      return thirty + ' ' + singleDigit[number-30];
    }
     
    if(number >= 40 && number <= 49) {
      if(number === 40) return forty
      return forty + ' ' + singleDigit[number-40];
    }
     
    if(number >= 50 && number <= 59) {
      if(number === 50) return fifty
      return fifty + ' ' + singleDigit[number-50];
    }
     
    if(number >= 60 && number <= 69) {
      if(number === 60) return singleDigit[6] + 'ty'
      return singleDigit[6] + 'ty ' + singleDigit[number-60];
    }
     
    if(number >= 70 && number <= 79) {
      if(number === 70) return singleDigit[7] + 'ty'
      return singleDigit[7] + 'ty ' + singleDigit[number-70];
    }
     if(number >= 80 && number <= 89) {
      if(number === 80) return singleDigit[8] + 'y'
      return singleDigit[8] + 'y ' + singleDigit[number-80];
    }
     if(number >= 90 && number <= 99) {
      if(number === 90) return singleDigit[9] + 'ty'
      return singleDigit[9] + 'ty ' + singleDigit[number-90];
    }
    }
     
     if(number < 100) {
       return beforeHundred(number)
     }
     
     if(number >=100) {
       let str = number.toString()
       let newNumber = str[1] + str[2]
       if (str[1] == 0 && str[2] == 0) {
         return singleDigit[str[0]] + ' hundred'
       } else {
         return singleDigit[str[0]] + ' hundred' + ' ' + beforeHundred(+newNumber);
       }
     }
     
  }

//Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf besar atau tidak.
//Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
//Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’

   
   CheckUp = () => {
    
    let input = prompt("Input Kata");

   //save the character from uppercase "A" to uppercase"Z":
  
    let capital = /[A-Z]/;
  //method@charAt confirm the first character on the input prompt
  //The test() method, tests for a match in a string. This method returns true if it finds a match
    if (capital.test(input.charAt(0)) == true) {
      alert("Huruf pertama adalah huruf besar");
    } else {
      alert("Huruf pertama adalah huruf kecil");
    }
  }


  //src= https://www.it-swarm.dev/id/javascript/huruf-besar-pertama-dari-setiap-kata-dalam-string-javascript/1055786145/
  //https://www.w3schools.com/JSREF/jsref_regexp_test.asp
  //https://www.w3schools.com/JSREF/jsref_regexp_charset_not.asp


   valNumb = () => {
    let input = (prompt("Input Nomor Telepon (10 - 12 digit)"));

   //give limitation for input number

    let telpNumb = /^.{10,12}$/;

    //isNaN method returns true if the value equates to NaN. Otherwise it returns false.
    if (isNaN(input)) {
      alert("jangan input selain angka");
    } else {
      alert(telpNumb.test(input));
    }
  }



  //src = https://www.w3schools.com/icons/fontawesome5_icons_mathematics.asp
  //https://www.w3schools.com/jsref/jsref_isnan.asp

  search = () => {
    let topic = prompt("Search the topic");
  
    let search1 = /^Bagaimana cara memulai usaha bisnis/;
    alert("the result of first search is " + search1.test(topic));


    let search2= /^Bootcamp impact byte/;
    alert("the result of second search is  " + search2.test(topic));


    let search3 = /^Status covid hari ini/;
    alert("the result of third search is " + search3.test(topic));
  }
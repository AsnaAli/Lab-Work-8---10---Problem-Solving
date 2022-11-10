const prompt = require("prompt-sync")({ sigint: true });

var string = prompt("Enter stringing ");
let count= prompt("Enter Key ");

  function cipher(string,count){
    count= count%26;
    var lowerCasestring= string.toLowerCase();
    var alpha= 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newstring= '';
    for (var i=0;i<lowerCasestring.length;i++){
    var currentLetter=lowerCasestring[i];
    if(currentLetter===' '){
      newstring+=currentLetter;
      continue;
    }
    var currentIndex=alpha.indexOf(currentLetter);
    var newIndex=currentIndex+count;
    if(newIndex>25)
    newIndex=newIndex-26;
    if(newIndex<0)
    newIndex=newIndex+26;
    if(string[i]===string[i].toUpperCase()){
      newstring+=alpha[newIndex].toUpperCase();
    }
    else
    newstring+=alpha[newIndex];
  }
  return newstring;
}
console.log(cipher(string,count))
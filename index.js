const readLineSync=require('readline-sync');

let parseIntConverter=(inputValue,base)=>{
 return parseInt(inputValue,base);
}
let toStringConverter=(inputValue,base)=>
{
  //console.log(inputValue.toString(2)+" "+typeof inputValue);
  return inputValue.toString(base);
}
const input=(type)=>
{
  let inputValue=readLineSync.question(`\nEnter the ${type} number: `);
 /* while(!Number.isInteger(inputValue))
  {
    console.log('\nWrong typo!!!,Please Enter only \"DIGITS\":\n');
    inputValue=readLineSync.question(`Enter the ${type} number: `);
  }*/
  return inputValue;
}

function welcomeFunction()
{
console.log('Welcome To  Binary/Decimal/Hex/Octal Converters Application. \n\n');

const services=['Binary to Decimal','Binary to Hex','Binary to Octal','Decimal to Binary','Decimal to Hex','Decimal to Octal','Hex to Binary','Hex to Decimal','Hex to Octal','Octal to Binary','Octal to Decimal','Octal to Hex'];

for(let i=0;i<services.length;i++)
  console.log(`${i+1})${services[i]}`);

return parseInt(readLineSync.question('\nFor Utilising the Service,choose the Particular option: '));

}

function display(inputType,outputType,inputValue,outputValue)
{
  console.log(`\n${outputType} value is :\'${outputValue}\' for given ${inputType} number \'${inputValue}\'`);
}
function mainLogic(selectOption)
{
  let outputValue=0;
  let inputValue=0;
  
  switch(selectOption)
  {
    case 1:
      inputValue=parseInt(input('binary'));
      outputValue=parseIntConverter(inputValue,2);
      display('Binary','decimal',inputValue,outputValue);
    break;
    case 2:
      inputValue=parseInt(input('binary'));
      outputValue=parseIntConverter(inputValue,2);
      outputValue=toStringConverter(outputValue,16).toUpperCase();
      outputValue=outputValue.length==1?`0${outputValue}`:outputValue;
      display('Binary','Hex',inputValue,outputValue);
    break;
    case 3:
      inputValue=parseInt(input('binary'));
      outputValue=parseIntConverter(inputValue,2);
      outputValue=toStringConverter(outputValue,8).toUpperCase();
      display('Binary','Ocatal',inputValue,outputValue);
    break;
    case 4:
      inputValue=parseInt(input('decimal'));
      outputValue=toStringConverter(inputValue,2);
      display('Decimal','Binary',inputValue,outputValue);
    break;
    case 5:
      inputValue=parseInt(input('decimal'));
      outputValue=toStringConverter(inputValue,16);
      outputValue=outputValue.length==1?`0${outputValue}`:outputValue;
      display('Decimal','Hex',inputValue,outputValue);
    break;
    case 6:
      inputValue=parseInt(input('decimal'));
      outputValue=toStringConverter(inputValue,8);
      display('Decimal','Octal',inputValue,outputValue);
    break;
    case 7:
      inputValue=parseInt(input('decimal'));
      outputValue=toStringConverter(inputValue,2);
      display('Hex','Binary',inputValue,outputValue);
    break;
    case 8:
      inputValue=parseInt(input('Hex eg:0XA '));
      outputValue=toStringConverter(inputValue,10);
      display('Hex','Decimal',inputValue,outputValue);
    break;
    case 9:
      inputValue=parseInt(input('Hex Eg:0XA '));
      outputValue=toStringConverter(inputValue,8);
      display('Hex','Octal',inputValue,outputValue);
    break;
    case 10:
      inputValue=(input('Octal Eg:012 '));
      let decimalValue=parseIntConverter(inputValue,8);
      outputValue=toStringConverter(decimalValue,2);
      display('Octal','Binary',inputValue,outputValue);
    break;
    case 11:
      inputValue=(input('Octal Eg:012 '));
      outputValue=parseIntConverter(inputValue,8);
      display('Octal','Decimal',inputValue,outputValue);
    break;
    case 12:
      inputValue=input('Octal Eg:012 ');
      let decimalNumber=parseIntConverter(inputValue,8);
      outputValue=toStringConverter(decimalNumber,16);
      outputValue=outputValue.length==1?`0${outputValue}`:outputValue;
      display('Octal','Hex',inputValue,outputValue);
    break;
    default :
      console.log('enter the options only between 1 to 12');
  }
}

const selectedOption=welcomeFunction();

mainLogic(selectedOption);
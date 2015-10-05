var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии

var newHours, newMinutes, ostatok;

if (hours<24 && minutes<60 && hours>=0 && minutes>=0)
	{ostatok = hours % 10;
if (hours==0) 
	{newHours = '0'}
else{
switch ((hours - ostatok)/10)

{case 0:	newHours ='';		break;
case 1:		newHours ='X';		break;
case 2:		newHours ='XX';		break;
}

switch (ostatok) {
case 1: 	newHours +='I';		break;
case 2:		newHours +='II';	break;
case 3:		newHours += 'III';	break;
case 4:		newHours += 'IV';	break;
case 5:		newHours += 'V';	break;
case 6:		newHours += 'VI';	break;
case 7:		newHours += 'VII';	break; 
case 8:		newHours += 'VIII';	break;
case 9:		newHours += 'IX';	break;
} 
}

if (minutes==0)
	 {newMinutes = '0'}
else { 
ostatok = minutes % 10;
switch ((minutes - ostatok)/10)
{ 
case 0:		newMinutes = '';	break;
case 1:		newMinutes = 'X';	break;
case 2:		newMinutes = 'XX';	break;
case 3:		newMinutes = 'XXX';	break;
case 4:		newMinutes = 'XL';	break;
case 5:		newMinutes = 'L';	break;
}

switch (ostatok) {

case 1:		newMinutes += 'I';		break;
case 2:		newMinutes += 'II';		break;
case 3:		newMinutes += 'III';	break;
case 4:		newMinutes += 'IV';		break;
case 5:		newMinutes += 'V';		break;
case 6:		newMinutes += 'VI';		break;
case 7:		newMinutes += 'VII';	break; 
case 8:		newMinutes += 'VIII';	break;
case 9:		newMinutes += 'IX';		break;
} 
}
console.log(newHours,':',newMinutes);}
else {console.log('error: Время указано неверно');}
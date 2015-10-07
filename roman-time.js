var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии

function tenDigits(number) {	
if (parseInt(number, 10)===0){
	return '-'
}
else {
switch (Math.floor(number/10)) { 
	case 0:		
		return '';	
case 1:	
		return 'X';
	case 2:		
		return 'XX';	
	case 3:		
		return 'XXX';	
	case 4:		
		return 'XL';	
	case 5:		
		return 'L';	
}
}
}
function oneDigits(number) {
if (parseInt(number, 10)===0) {
	return ''
}
else {
switch (number % 10) {
	case 0:		
		return '';	
	case 1: 	
		return'I';		
	case 2:		
		return'II';	
	case 3:		
		return 'III';	
	case 4:		
		return 'IV';	
	case 5:		
		return 'V';	
	case 6:		
		return 'VI';	
	case 7:		
		return 'VII';	
	case 8:		
		return 'VIII';	
	case 9:		
		return 'IX';
} 
}
}

if (hours<24 && minutes<60 && hours>=0 && minutes>=0){
	console.log(tenDigits(hours) + oneDigits(hours),':',tenDigits(minutes) + oneDigits(minutes));
}
else {console.log('error: Время указано неверно');}

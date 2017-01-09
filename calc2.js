var getal= '';
var getal2 = [];
//var op = [];
var getal3 = null;
var dec = false;


function button(num) {
	getal += num;
	document.getElementById('getal1').innerHTML = getal;
	document.getElementById('getal2').innerHTML = getal2;
	console.log(getal);
}

function operator(oper) {
	getal = Number(getal);
	getal2.push(getal);
	getal2.push(oper);
	getal = '';
	console.log(getal2);
	//console.log(op);
	document.getElementById('getal1').innerHTML = getal;
	document.getElementById('getal2').innerHTML = getal2;
}


function clearIO() {
	getal = '';
	getal2 = [];
	//op = [];
	document.getElementById('getal1').innerHTML = '0';
	document.getElementById('getal2').innerHTML = '';
	console.log('clear');
}

function point() {

}

function equals() {
	getal = Number(getal);
	getal2.push(getal);
	for (var i = 1; i < getal2.length; i += 2) {
		var b = getal2[i-1];
		var d = getal2[i+1];
		if (getal2[i] == '*' ) {
			var x = b * d;
			getal2.splice(i-1, 3, x);
			i -= 2 ;	
		} else if (getal2[i] == '/') {
			var x = b / d;
			getal2.splice(i-1, 3, x);
			i -= 2 ;
		}
	}
	for (var i = 1; i < getal2.length; i += 2) {
		var b = getal2[i-1];
		var d = getal2[i+1];
		if (getal[i] == '+' ) {
			var x = b + d;
			getal2.splice(i-1, 3, x);
			i -= 2 ;
		} else if (getal2[i] == '-') {
			var x = b - d;
			getal2.splice(i-1, 3, x);
			i -= 2 ;
		}
	}

	getal3 = getal2;
	getal2 = [];
	getal = '';
	document.getElementById('res').innerHTML = getal3;
}
// i++ --> i=i+1 --> i += 1

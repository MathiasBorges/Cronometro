let sec=0
let min=0
let hours=0
let intervalo
let intervaloAcontecendo=false
/**/
function doisdigitos(digit){
 if (digit<10) {
 	return('0'+digit)
 }else{
 	return(digit)
 }
}

function start(){
	if (!intervaloAcontecendo) {
		clearInterval(intervalo)
		counter()
		intervalo = setInterval(counter,1000) 
		intervaloAcontecendo=true
	}
}

function pause(){
	if (intervaloAcontecendo) {
		clearInterval(intervalo)
		intervaloAcontecendo=false
	}
}

function stop(){

	location.reload()
}


function counter(){
	sec=sec+1
	document.getElementById('timezero').innerText=doisdigitos(hours)+":"+doisdigitos(min)+":"+doisdigitos(sec)
	if (sec==60) {
		min=min+1
		sec=0

		if (min==60) {
			hours++
			min=0
			sec=0
			var alertah = document.getElementById("timezero")
			alertah.style.color="FireBrick"

		}
	}
}
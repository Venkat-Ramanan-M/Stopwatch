//global var
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const rst_btn = document.getElementById("reset");
let mseconds = 0;
let interval = null;

start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
rst_btn.addEventListener('click',reset);
function timer(){
	mseconds++;
	//format
	let hrs = Math.floor(mseconds/3600000);
	let mins = Math.floor((mseconds- (hrs*3600000))/6000);
	let secs = Math.floor((mseconds/100)%60) ;
	let msecs = mseconds % 100;
	if (secs<10) secs = "0" + secs;
	if (mins<10) mins = "0" + mins;
	if (hrs<10) hrs = "0" + hrs;
	if (msecs<10) msecs = "0" + msecs;
	time_el.innerText = `${hrs}:${mins}:${secs}:${msecs}`;
}
function start(){
 	if(interval){
 		return;
 	}
 	interval = setInterval(timer,10);
}
function stop() {
 	clearInterval(interval);
 	interval = null;
}
function reset(){
 	stop();
 	mseconds = 0;
 	time_el.innerText = '00:00:00:00';
}
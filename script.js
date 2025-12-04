//your JS code here. If required.
let currentAudio=null;
const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{
	btn.addEventListner("click",()=>{
		if(btn.classList.contains("stop")){
			if(currentAudio){
				currentAudio.pause();

				currentAudio.currentTime=0;
			}
			return;
		}
		if(currentAudio){
			currentAudio.pause();
			currentAudio.currentTime=0;
		}
		let soundName= btn.getAtrribute("data-sound");
		currentAudio=new Audio("sound/" + soundName + ".mp3");
		currentAudio.play();
	});
});
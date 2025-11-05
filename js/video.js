var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.querySelector(".video")
});

function play(){
	console.log("In play")
	video.play()
}

function pause(){
	console.log("In pause")
	video.pause()
}

function faster(){
	video.playbackRate *= 1.1
	console.log("Playing faster: " + video.playbackRate)
}

function slower(){
	video.playbackRate /= 1.1
	console.log("Playing slower: " + video.playbackRate)
}

function skip(){
	console.log("Skipping")	
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0
	}
	else{
		video.currentTime += 10
	}
	console.log(video.currentTime)
}

function mute(){
	console.log("Muting")
	if (video.muted){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	} else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
}

function changeVolume(){
	let volumeLabel = document.querySelector("#volume")
	let slider = document.querySelector("#slider")
	video.volume = slider.value / 100
	volumeLabel.innerHTML = slider.value + "%"
	console.log("Changing volume: " + slider.value + "%")
}

document.querySelector("#play").addEventListener("click", function(){
	play()
})

document.querySelector("#pause").addEventListener("click", function(){
	pause()
})

document.querySelector("#slower").addEventListener("click", function(){
	slower()
})

document.querySelector("#faster").addEventListener("click", function(){
	faster()
})

document.querySelector("#skip").addEventListener("click", function(){
	skip()
})

document.querySelector("#slider").addEventListener("input", function(){
	changeVolume()	
})

document.querySelector("#mute").addEventListener("click", function(){
	mute()
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
})

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');



var constraints = { audio: false, video: true }; 

function getVideo() {

navigator.mediaDevices.getUserMedia(constraints)
.then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas(){
	const width = videoWidth;
	const height = videoHeight;
	// console.log(width, height);
	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height)
	}, 16)
}

function takePhoto() {
	// play the sound
	snap.currentTime = 0;
	snap.play();

	//take the data out of the canvas

	const data = canvas.toDataUrl('image/jpeg');
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'handsome');
	link.innerHTML = `<img src="${data}" alt="handsome man" /> `
	strip.insertBefore(link, strip.firstChild);
	console.log(data);

}

getVideo();

video.addEventListener('canplay', paintToCanvas);
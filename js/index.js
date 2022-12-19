
let picpos = [0, 1, 2, 3, 4, 5, 6, 7]

window.onload = () =>{

	let left = document.getElementById("left");
	let right = document.getElementById("right");
	listeners();
}

const listeners = () => {
	var pic = [0,
		 document.getElementById("pic1"),
		 document.getElementById("pic2"),
		 document.getElementById("pic3"),
		 document.getElementById("pic4"),
		 document.getElementById("pic5"),
		 document.getElementById("pic6"), 
		 document.getElementById("pic7")];

	let autoSlider = setInterval(() => {
		let slide = new Event("click");
		right.dispatchEvent(slide);
	}, 3000);




	left.addEventListener("click", () =>{
		for (let i = 1; i <=7; i++){
			if (picpos[i] == 1){picpos[i] = 7}
			else{picpos[i] -=1}
		}
		for(let j = 1; j <=7; j++){
			switch (picpos[j]){
				case 1: {pic[j].style.cssText = "transform: translateX(0px) translateZ(210px) rotateX(0deg); filter:saturate(175%); transition:0.5S;"; break;}
				case 2: {pic[j].style.cssText = "transform: translateX(60px) translateZ(170px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 3: {pic[j].style.cssText = "transform: translateX(120px) translateZ(140px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 4: {pic[j].style.cssText = "transform: translateX(180px) translateZ(110px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 5: {pic[j].style.cssText = "transform: translateX(-180px) translateZ(110px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 6: {pic[j].style.cssText = "transform: translateX(-120px) translateZ(140px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 7: {pic[j].style.cssText = "transform: translateX(-60px) translateZ(170px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
			}
		}
	});
	right.addEventListener("click", () =>{
		for (let i = 1; i <=7; i++){
			if (picpos[i] == 7){picpos[i] = 1}
			else{picpos[i] +=1}
		}
		for(let j = 1; j <=7; j++){
			switch (picpos[j]){
				case 1: {pic[j].style.cssText = "transform: translateX(0px) translateZ(210px) rotateX(0deg); filter:saturate(175%); transition:0.5S;"; break;}
				case 2: {pic[j].style.cssText = "transform: translateX(60px) translateZ(170px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 3: {pic[j].style.cssText = "transform: translateX(120px) translateZ(140px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 4: {pic[j].style.cssText = "transform: translateX(180px) translateZ(110px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 5: {pic[j].style.cssText = "transform: translateX(-180px) translateZ(110px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 6: {pic[j].style.cssText = "transform: translateX(-120px) translateZ(140px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
				case 7: {pic[j].style.cssText = "transform: translateX(-60px) translateZ(170px) rotateX(-15deg); filter:grayscale(75%) blur(1px); transition:0.5S;"; break;}
			}
		}
	});
}


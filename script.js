function func() {
	var box = document.getElementById('numberbox');
	box.innerHTML = Math.floor(Math.random() * 10);
	box.style.marginLeft = "43.5%";
	if(box.innerHTML == 0) {
		box.style.color = "orange";
		box.style.background = "brown";
	} else if(box.innerHTML == 1) {
		box.style.color = "blue";
		box.style.background = "aqua";
	} else if(box.innerHTML == 2) {
		box.style.color = "forestGreen";
		box.style.background = "lime";
	} else if(box.innerHTML == 3) {
		box.style.color = "gold";
		box.style.background = "black";
	} else if(box.innerHTML == 4) {
		box.style.color = "red";
		box.style.background = "violet";
	} else if(box.innerHTML == 5) {
		box.style.color = "yellow";
		box.style.background = "darkBlue";
	} else if(box.innerHTML == 6) {
		box.style.color = "beige";
		box.style.background = "gray";
	} else if(box.innerHTML == 7) {
		box.style.color = "violet";
		box.style.background = "purple";
	} else if(box.innerHTML == 8) {
		box.style.color = "green";
		box.style.background = "black";
	} else {
		box.style.color = "orchid";
		box.style.background = "blue";
	}		
}
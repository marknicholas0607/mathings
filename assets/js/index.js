window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById('nav-bar').style.padding = "5px";
		document.getElementById('nav-bar').className = "box-shadow";
	}
	else{
		document.getElementById('nav-bar').style.padding = "15px";
		document.getElementById('nav-bar').className = "nav-bar";
	}
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		document.getElementById('arrow-up').style.visibility = "visible";
	}
	else{
		document.getElementById('arrow-up').style.visibility = "hidden";
	}
}


function showModal() {
	var modal = document.getElementById('modal');

	if (modal.style.display === "block") {
		modal.style.display = "none";
	}
	else{
		modal.style.display = "block";
	}
}

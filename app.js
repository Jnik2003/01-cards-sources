const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {	
	slide.addEventListener('click', setActive);
})

function setActive(){
	slides.forEach(slide => {
		slide.classList.remove('active');
	})	
	this.classList.add('active');
}

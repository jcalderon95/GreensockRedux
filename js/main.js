(() => {
	// variables first
	const badge 		 = document.querySelector('img'),
		  footerText	 = document.querySelector('h3');

	function animImage() {
		TweenMax.to(badge, 1.2, {scaleX: 1.025, scaleY: 1.025, rotation: 50, ease:Elastic.easeInOut, onComplete: animFooterText});
	}

	function animFooterText(){
		TweenMax.to(footerText, 0.7, {scaleX:1.1, scaleY:1.1, ease: Elastic.easeInOut });
	}

	//animImage();

	badge.addEventListener('mouseover', animImage);
})();
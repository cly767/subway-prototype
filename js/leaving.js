'use strict';
function setupLeavingAnimation() {
	let ali = document.getElementsByTagName('a');
	let pageContainer = document.getElementById('pageContainer');
	for( let i of ali )
		i.addEventListener('click', e => {
			e.preventDefault();
			pageContainer.classList.add('transparent');
			setTimeout(() => {
				window.location.assign(e.target.href);
			}, 100);
		});
}

setupLeavingAnimation();

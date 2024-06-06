let navigation= document.getElementById('navigation');
let navigationToggle = document.getElementById('navigationToggle');
let siteLinks = document.getElementById('siteLinks');

function showSiteLinks(linkList) {
	let i = 0;
	let timerid = setInterval(() => {
		linkList[i].classList.remove('prepared');
		if(i >= linkList.length -1) {
			clearInterval(timerid);
			return;
		}
		i++;
	}, 50);
}

function prepareSiteLinks(linkList) {
	for( i of linkList )
		i.classList.add('prepared');
}

function enterNavigation(e) {
	navigation.classList.add('activated');
	navigationToggle.innerText = navigationToggle.dataset.active;
	navigationToggle.removeEventListener('click', enterNavigation);
	navigationToggle.addEventListener('click', leaveNavigation);
	setTimeout(showSiteLinks, 100, siteLinks.children);
}

function leaveNavigation(e) {
	prepareSiteLinks(siteLinks.children);
	setTimeout(() => {
		navigation.classList.remove('activated');
		navigationToggle.innerText = navigationToggle.dataset.inactive;
		navigationToggle.removeEventListener('click', leaveNavigation);
		navigationToggle.addEventListener('click', enterNavigation);
	}, 270);
}

navigationToggle.addEventListener('click', enterNavigation);
navigationToggle.innerText = navigationToggle.dataset.inactive;

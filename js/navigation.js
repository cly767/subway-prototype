'use strict';
let navigation= document.getElementById('navigation');
let navigationToggle = document.getElementById('navigationToggle');
let siteLinks = document.getElementById('siteLinks');
let contents = document.getElementById('contents');
let timerid;

function showSiteLinks(linkList) {
	let i = 0;
	timerid = setInterval(() => {
		linkList[i].classList.remove('prepared');
		if(i >= linkList.length -1) {
			clearInterval(timerid);
			return;
		}
		i++;
	}, 50);
}

function prepareSiteLinks(linkList) {
	for( let i of linkList )
		i.classList.add('prepared');
}

function enterNavigation(e) {
	navigation.classList.add('activated');
	navigationToggle.classList.add('activated');
	navigationToggle.removeEventListener('click', enterNavigation);
	navigationToggle.addEventListener('click', leaveNavigation);
	setTimeout(showSiteLinks, 100, siteLinks.children);
}

function leaveNavigation(e) {
	clearInterval(timerid);
	prepareSiteLinks(siteLinks.children);
	navigationToggle.classList.remove('activated');
	setTimeout(() => {
		navigation.classList.remove('activated');
		navigationToggle.removeEventListener('click', leaveNavigation);
		navigationToggle.addEventListener('click', enterNavigation);
	}, 270);
}

navigationToggle.addEventListener('click', enterNavigation);

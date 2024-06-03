let navigationEnter = document.getElementById('navigationEnter');
let navigation= document.getElementById('navigation');

function enterNavigation() {
	navigation.classList = 'activated';
}

navigationEnter.addEventListener('click', e => {
	enterNavigation();
});

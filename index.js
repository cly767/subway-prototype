function setTileColors() {
	const tileColors = [ "#2c86ee", "#bb1d48", "#00a000", "#643ebe" ];
	let windowNode = document.getElementById("window");
	for( i of windowNode.children ) {
		for( j of i.children ) {
			for ( k of j.children ) {
				k.style.backgroundColor = tileColors[Math.floor(Math.random()*4)];
			}
		}
	}
}

function setGroupHeight() {
	let flowWindow = document.getElementById("window");
	let groups = flowWindow.getElementsByClassName("group");
	let height = window.getComputedStyle(flowWindow).getPropertyValue("height");
	for( i of groups )
		i.style.height = height;
}

setTileColors()
setGroupHeight();

window.onresize = setGroupHeight;

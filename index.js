function setTileColors() {
	let tileColors = [ "#2c86ee", "#bb1d48", "#00a000", "#643ebe" ];
	let windowNode = document.getElementById("window");
	for( i of windowNode.children ) {
		let group = i.children[0];
		for ( j of group.children ) {
			j.style.backgroundColor = tileColors[Math.floor(Math.random()*4)];
		}
	}
}

setTileColors()

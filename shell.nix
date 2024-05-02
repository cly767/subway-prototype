{ pkgs ? import <nixpkgs> {} }:
	pkgs.mkShell {
		name = "subway development";
		nativeBuildInputs = with pkgs.buildPackages; [
			vscode-langservers-extracted
			nodejs
		];
	}

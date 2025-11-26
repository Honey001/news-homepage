const navMenuButton = document.getElementById("openMenu");
const closeNavMenuButton = document.getElementById("closeMenu");
const navMenu = document.querySelector(".navBar-container");

const displayNavMenu = () => {
	navMenu.classList.add("show");
	document.body.classList.add("dimmed");
};

const closeNavMenu = () => {
	setTimeout(() => {
		navMenu.classList.remove("show");
		document.body.classList.remove("dimmed");
	}, 100);
};

navMenuButton.addEventListener("click", displayNavMenu);
closeNavMenuButton.addEventListener("click", closeNavMenu);

import calcScroll from "./calcScroll";

const images = (imgContainer, popUpClass, bigImgClass, AtributeBigImg, imgClass) => {
	const imgPopup = document.createElement('div'),
		workSection = document.querySelector(imgContainer),
		bigImage = document.createElement('img');

	imgPopup.classList.add(popUpClass);
	workSection.appendChild(imgPopup);

	imgPopup.style.cssText = `
		display: none;
		align-items: center;
		justify-content: center;
	`;

	bigImage.classList.add(bigImgClass);

	imgPopup.appendChild(bigImage);

	workSection.addEventListener('click', (e) => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains(imgClass)) {
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = `${calcScroll()}px`;
			imgPopup.style.display = 'flex';
			const path = target.parentNode.getAttribute(AtributeBigImg);
			bigImage.setAttribute('src', path);
		}

		if (target && target.matches(`div.${popUpClass}`)) {
			document.body.style.marginRight = `0px`;
			document.body.style.overflow = "";
			imgPopup.style.display = 'none';
		}
	})
};

export default images;
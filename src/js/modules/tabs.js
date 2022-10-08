const tabs = () => {
	function activateTab(triggerSelectors, TabSelectors, activeClass, display = 'block') {
		const triggers = document.querySelectorAll(triggerSelectors),
			tabs = document.querySelectorAll(TabSelectors);

		tabs[0].style.display = display;

		triggers.forEach((element, i) => {
			element.addEventListener('click', (e) => {
				tabs.forEach(element => {
					element.style.display = 'none';
				});
				triggers.forEach((element, i) => {
					element.classList.remove(activeClass);
				})
				tabs[i].style.display = display;
				element.classList.add(activeClass);
			})
		});
	}

	activateTab('.glazing_block', '.glazing_content', 'active');
	activateTab('.no_click', '.interior_decoration', 'after_click');
	activateTab('.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
}

export default tabs;
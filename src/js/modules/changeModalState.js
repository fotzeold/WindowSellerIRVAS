import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
	const windowsFrom = document.querySelectorAll('.balcon_icons_img'),
		windowWidth = document.querySelectorAll('#width'),
		windowHeight = document.querySelectorAll('#height'),
		windowType = document.querySelectorAll('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');

	function bindActionToElems(event, elem, prop) {
		elem.forEach((item, index) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = index + 1;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
							elem.forEach((e, j) => {
								e.checked = false;
								if (index == j) {
									e.checked = true;
								}
							})
						} else {
							state[prop] = item.value;
						}
						break;
					case 'SELECT':
						state[prop] = item.value;
						break;
				}
				console.log(state);

			})
		})
	}

	bindActionToElems('click', windowsFrom, 'form');
	bindActionToElems('input', windowWidth, 'width');
	bindActionToElems('input', windowHeight, 'height');
	bindActionToElems('change', windowType, 'type');
	bindActionToElems('change', windowProfile, 'profile');

}

export default changeModalState;
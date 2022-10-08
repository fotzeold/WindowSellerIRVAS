import calcScroll from "./calcScroll";

const modals = (state) => {
	function closeModalWindow(modal) {
		modal.style.display = 'none';
		document.body.classList.remove('modal-open');
		document.body.style.marginRight = `0px`;
	}

	function bindModal(triggerSelectors, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelectors),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll();

		trigger.forEach(element => {
			element.addEventListener('click', (e) => {
				if (e.target) e.preventDefault();

				windows.forEach(element => {
					element.style.display = 'none';
				});

				modal.style.display = 'block';
				document.body.classList.add('modal-open');
				document.body.style.marginRight = `${scroll}px`;

				if (element.classList.contains('popup_calc_btn')) {
					state['form'] = 1;
				}
				if (element.classList.contains('popup_calc_button')) {
					state['type'] = 'tree';
				}
				console.log(state);
			})
		})

		close.addEventListener('click', () => closeModalWindow(modal))

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) closeModalWindow(modal);
		})
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.classList.add('modal-open');
		}, time);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	showModalByTime('.popup', 60000)
}

export default modals;
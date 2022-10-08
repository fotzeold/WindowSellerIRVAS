const calc = () => {
	const buttons = document.querySelectorAll('.popup_calc_btn'),
		popUpCalc = document.querySelector('.popup_calc'),
		popUpCalcProfile = document.querySelector('.popup_calc_profile'),
		popUpCalcEnd = document.querySelector('.popup_calc_end ');

	buttons.forEach(btn => {
		btn.addEventListener('click', (event) => {
			event.preventDefault();
			popUpCalc.style.display = 'block';

		})
	})
}

export default calc;
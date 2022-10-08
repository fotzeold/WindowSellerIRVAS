import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
	const formsList = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input');

	checkNumInputs('input[name="user_phone"]')

	const message = {
		loadingSend: 'Отправка...',
		successSend: 'Спасибо! Скоро мы с вами свяжемся!',
		errorSend: 'Что-то пошло не так...Попробуйте позже'
	}

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loadingSend;
		let result = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await result.text();
	}

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		})
	}

	formsList.forEach(form => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			form.appendChild(statusMessage);

			const formData = new FormData(form);
			if (form.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData('assets/server.php', formData)
				.then(result => {
					console.log(result);
					statusMessage.textContent = message.successSend;
				})
				.catch(() => statusMessage.textContent = message.errorSend)
				.finally(() => {
					clearInputs();
					for (const key in state) {
						delete state[key]
					}
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				})
		})
	})
}

export default forms;
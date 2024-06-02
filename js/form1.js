const TOKEN = "7013906513:AAG8qoak_aeFKbqpNHSauy65LckD1igvuaE";
		const CHAT_ID = "-1002153647405";
		const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
		const success = document.getElementById('success');

		document.getElementById("tg").addEventListener("submit", function (e) {
			e.preventDefault();

			let message = `<b>Заявка с сайта!</b>\n`;
			message += `<b>Отправитель: </b> ${this.name.value}\n`;
			message += `<b>Телефон: </b> ${this.tel.value}\n`;

			axios.post(URL_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			})
			.then((res) => {
				this.name.value = "";
				this.tel.value = "";
				success.innerHTML = "Сообщение отправлено!";
				success.style.display = "block";
			})

			.catch((err) => {
				console.warn('err');
			})

			.finally(() => {
				console.log('Конец');
			});
		});

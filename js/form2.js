const TOKEN_2 = "7013906513:AAG8qoak_aeFKbqpNHSauy65LckD1igvuaE";
const CHAT_ID_2 = "-1002153647405";
const URL_API_2 = `https://api.telegram.org/bot${TOKEN_2}/sendMessage`;
const success_2 = document.getElementById("success_2");

document.getElementById("tgComment").addEventListener("submit", function (e) {
	e.preventDefault();

	let messageComment = `<b>Заявка с сайта с вопросом!</b>\n`;
	messageComment += `<b>Отправитель: </b> ${this.name.value}\n`;
	messageComment += `<b>Телефон: </b> ${this.tel.value}\n`;
	messageComment += `<b>Почта: </b> ${this.email.value}\n`;
	messageComment += `<b>Сообщение: </b> ${this.comment.value}`;

	axios.post(URL_API_2, {
			chat_id: CHAT_ID_2,
			parse_mode: "html",
			text: messageComment,
		})
		.then((res) => {
			this.name.value = "";
			this.tel.value = "";
			this.email.value = "";
			this.comment.value = "";
			success_2.innerHTML = "Сообщение отправлено!";
			success_2.style.display = "block";
		})
		.catch((err) => {
			console.warn("err");
		})
		.finally(() => {
			console.log("Конец");
		});
});
const TOKEN = "7013906513:AAG8qoak_aeFKbqpNHSauy65LckD1igvuaE";
const CHAT_ID = "-1002153647405";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');
const form = document.getElementById('tg');
const nameInput = form.querySelector('input[name="name"]');
const telInput = form.querySelector('input[name="tel"]');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    return;
  }

  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отправитель: </b> ${nameInput.value}\n`;
  message += `<b>Телефон: </b> ${telInput.value}\n`;

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
  .then((res) => {
    nameInput.value = "";
    telInput.value = "";
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

nameInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
});

telInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^7-8\d]/g, "").substring(0, 11);
  if (this.value.length < 11 || !/^[7-8]\d{10}$/.test(this.value)) {
    this.setCustomValidity("Введите корректный номер телефона");
  } else {
    this.setCustomValidity("");
  }
});

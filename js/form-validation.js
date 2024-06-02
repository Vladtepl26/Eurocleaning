document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.querySelector("#tg input[name='name']");
  const telInput = document.querySelector("#tg input[name='tel']");
  const emailInput = document.querySelector("#tgComment input[name='email']");
  const commentInput = document.querySelector("#tgComment textarea[name='comment']");
  const success_2 = document.querySelector("#success_2");

  nameInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
  });

  telInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^7-8\d]/g, "").substring(0, 11);
    if (this.value.length < 11 || !/^[7-8]\d{10}$/.test(this.value)) {
      this.setCustomValidity("Введите корректный номер телефона");
    } else {
      this.setCustomValidity("");
    }
  });

  const form = document.querySelector("#tgComment");
  form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const name = nameInput.value;
      const tel = telInput.value;
      const email = emailInput.value;
      const comment = commentInput.value;

      let message = `<b>Заявка с сайта!</b>\n`;
      message += `<b>Отправитель: </b> ${name}\n`;
      message += `<b>Телефон: </b> ${tel}\n`;
      message += `<b>Почта: </b> ${email}\n`;
      message += `<b>Сообщение: </b> ${comment}`;

      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })
      .then((res) => {
        nameInput.value = "";
        telInput.value = "";
        emailInput.value = "";
        commentInput.value = "";
        success_2.innerHTML = "Сообщение отправлено!";
        success_2.style.display = "block";
      })

      .catch((err) => {
        console.warn('err');
      })

      .finally(() => {
        console.log('Конец');
      });
    }
  });
});

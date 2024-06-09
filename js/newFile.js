submitButton.addEventListener("click", function () {
  if (!form.checkValidity()) {
    return;
  }

  let messageComment = `<b>Заявка с сайта с вопросом!</b>\n`;
  messageComment += `<b>Отправитель: </b> ${nameInput.value}\n`;
  messageComment += `<b>Телефон: </b> ${telInput.value}\n`;
  messageComment += `<b>Почта: </b> ${emailInput.value}\n`;
  messageComment += `<b>Сообщение: </b> ${commentInput.value}`;

  axios
    .post(URL_API_2, {
      chat_id: CHAT_ID_2,
      parse_mode: "html",
      text: messageComment,
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
      console.warn("err");
    })
    .finally(() => {
      console.log("Конец");
    });
});

const $buttons = document.querySelectorAll(".trigger-button");

$buttons.forEach(($el) => {
  $el.addEventListener("click", ({currentTarget}) => {
    const targetAuthor = currentTarget.getAttribute("data-author");
    const $dialog = document.querySelector(`dialog[data-author=${targetAuthor}]`);
    $dialog.showModal();
  }, false);
});

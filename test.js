const button = document.querySelector('.button2');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', handleLinkClick);

function handleLinkClick () {
    const appendedDiv = `<div class = "text">Текст, который выводится</div>`;
    wrapper.insertAdjacentHTML("beforeend", appendedDiv);
}
var button = document.querySelector('.button2')
var h1 = document.querySelector('.text')

button.addEventListener('click', handleLinkClick)

function handleLinkClick (event) {
    const appendedDiv = `
        <div class = "text">Текст, который выводится</div>
    `;

    if (h1.style.display === 'none') {
        h1.style.display = 'flex'
        h1.innerHTML = 'Текст, который выводится'
    } else {
        h1.insertAdjacentHTML("afterend", appendedDiv);
    }
}
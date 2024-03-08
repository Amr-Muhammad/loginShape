let container = document.getElementById('container')

document.querySelectorAll('.overlay-container button').forEach(el => {
    el.addEventListener('click', () => {
        container.classList.toggle('test')
        console.log('tmam');
    })
})
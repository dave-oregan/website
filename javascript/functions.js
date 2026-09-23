function closeMobileMenu() {
    document.getElementById('mobile_navigation').classList.add('hidden')
    document.getElementById('mobile_menu').classList.remove('hidden')
    document.body.classList.remove('disabled')
}

function openMobileMenu() {
    document.getElementById('mobile_navigation').classList.remove('hidden')
    document.getElementById('mobile_menu').classList.add('hidden')
    document.body.classList.add('disabled')
}

function rotateToggle(element) {
    const card = element.classList.contains('card')
        ? element
        : element.closest('.card')

    if (!card || card._rotateLock) return

    card._rotateLock = true
    card.classList.toggle('rotate')

    // Nested onclick handlers bubble; ignore extras from the same tap
    setTimeout(() => {
        card._rotateLock = false
    }, 0)
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.card a')) {
        event.stopPropagation()
    }
}, true)
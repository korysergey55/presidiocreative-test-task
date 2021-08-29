const mobileMenuButton = document.querySelector('.mobile-menu-icon')
const headerMenu = document.querySelector('.mobile-menu')

mobileMenuButton.addEventListener('click', openMenu)

function openMenu() {
  const isOpen = headerMenu.style.display
  if (!isOpen || isOpen === 'none') {
    headerMenu.style.display = 'block'
  }
  if (isOpen === 'block') {
    headerMenu.style.display = 'none'
  }
}

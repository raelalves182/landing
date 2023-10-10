function showMenu() {
  var openBtn = document.querySelector('.open-menu');
  var closeBtn = document.querySelector('.close-menu');
  var myLinks = document.querySelector('.menu-links');

  openBtn.addEventListener('click', () => {
    myLinks.style.display = 'block';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  })

  closeBtn.addEventListener('click', () => {
    myLinks.style.display = 'none';
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  })
}

showMenu();
document.querySelector('form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Сообщение отправлено!');
});
const cards = document.querySelectorAll('.card')
const btns = document.querySelectorAll('.btn')
btns[0].classList.add('current')
btns.forEach(btn=>btn.addEventListener('click', handleBtn))
function handleBtn(e){
  hideaAllCards()
  deactivateBtns()
  let target = e.currentTarget
  target.classList.add('current')
  let brand = target.getAttribute('data-brand')
  if (brand === 'all'){
    showAllCards()
    return
  }
  cards.forEach(card=>{
    if(card.getAttribute('data-brand') === brand){
      card.classList.remove('hidden')
    }
  })
}
function hideaAllCards(){
  cards.forEach(card=>card.classList.add('hidden'))
}
function showAllCards(){
  cards.forEach(card=>card.classList.remove('hidden'))
}
function deactivateBtns(){
  btns.forEach(btn=>btn.classList.remove('current'))
}

// Управление темой
        document.getElementById('themeToggle').addEventListener('click', function() {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            
            const icon = this.querySelector('i');
            icon.className = newTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
            
            this.setAttribute('aria-label', 
                newTheme === 'dark' 
                    ? 'Переключить на светлую тему' 
                    : 'Переключить на тёмную тему');
        });

        document.addEventListener('keydown', function(e) {

            if ((e.key === 'Enter' || e.key === ' ') && 
                e.target.getAttribute('role') === 'button') {
                e.preventDefault();
                e.target.click();
            }
            
            if (e.key === 'Escape') {
                const navbar = document.querySelector('.navbar-collapse.show');
                if (navbar) {
                    const toggler = document.querySelector('.navbar-toggler');
                    if (toggler) toggler.click();
                }
            }
        });
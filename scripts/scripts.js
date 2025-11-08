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



(async function App(){
 const input = document.querySelector('input#input__city')
  const button = document.querySelector('button.button__submit')
  const form = document.querySelector('form.container__form')


  const getText = (event)=>{
    const id = getId(event.target.value)   
  }


  input.addEventListener('input',change)
  button.addEventListener('click', getText)
  form.addEventListener('submit', (event)=>{event.preventDefault()})
})();





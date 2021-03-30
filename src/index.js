
import { getData } from './utils/getData';




(async function App(){
  const input = document.querySelector('input#input__city')
  const button = document.querySelector('button.button__submit')
  const form = document.querySelector('form.container__form')
  const render = document.querySelector('.render')

  const getText = async (event)=>{
    const cityName = input.value;
    const view = await getData(cityName) ;
    render.append(view)
  }

  button.addEventListener('click', getText)
  form.addEventListener('submit', (event)=>{event.preventDefault()})
})();





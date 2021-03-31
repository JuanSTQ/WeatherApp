
import { getData } from './utils/getData';
import {getValidNameCity} from './utils/getValidNameCity';

(async function App(){
  const input = document.querySelector('input#input__city')
  const button = document.querySelector('button.button__submit')
  const form = document.querySelector('form.container__form')
  const render = document.querySelector('.render')
  let beforeCity = []
  const getText = async (event)=>{
    const cityName = input.value;
    const validName = getValidNameCity(cityName);

    if(beforeCity.indexOf(validName)>=0){
      return console.log("repetido")
    }else if(validName){
      const view = await getData(validName);
      beforeCity.push(validName);
      view ? render.append(view) : input.value = ""
      return console.log('sucessfull')
    }else{
      input.value=""
      return window.alert('Ingresa de nuevo tu Ciudad')
    }    
  }

  button.addEventListener('click', getText)
  form.addEventListener('submit', (event)=>{event.preventDefault()})
})();





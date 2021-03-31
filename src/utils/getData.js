
const APIKEY = process.env.APIKEY;


//const API =`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIKEY}`;
//const urlimg =  'http://openweathermap.org/img/w/09d.png'
const getCelcius = (temp)=>{
  return parseInt((temp- 273.15).toFixed(2))
}
const getFarenheit = (temp)=>{
  return parseInt(((temp - 273.15 )* 9/5) + 32)
}
const getContainer = ({description,icon},{temp},cityName)=>{
  const container = document.createElement('article');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const grados = document.createElement('p');
  grados.textContent = getCelcius(temp) + "°C" + " / " + getFarenheit(temp) + "°F"
  h2.textContent = cityName;
  container.className = "container__weather"
  p.textContent = description;
  img.src = `http://openweathermap.org/img/w/${icon}.png`;
  container.append(h2,grados,img,p)
  return container

}

export const getData = async(cityName)=>{
  
  try{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`).then((response) => response.json())
    const {weather, main} = data;
    if(weather){
      const view = getContainer(weather[0],main,cityName);
      return view
    }else{
      return window.alert(`ERROR 404 Esa ciudad no existe, escribiste: ${cityName}`) 
    }
  }catch(error){
    console.log(error)
  }

}
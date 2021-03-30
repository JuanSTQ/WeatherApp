
const APIKEY = 'ce0e89ec2f86acf06f37f79c70c53467';
const city = "London";
let id = 3654870;
const API =`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIKEY}`;
const urlimg =  'http://openweathermap.org/img/w/09d.png'

const getContainer = (weather)=>{
  const container = document.createElement('div');
  const h2 = document.createElement('h2');
  const img = document.createElement('img')
  const p = document.createElement('p')
  console.log(weather)
  container.append(h2,img,p)
  return container

}

export const getData = async(cityName)=>{
  try{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`).then((response) => response.json())
    const {weather} = data;
    const view = getContainer(weather);
    return view
  }catch(error){
    console.log(error)
  }

}
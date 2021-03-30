
const APIKEY = 'ce0e89ec2f86acf06f37f79c70c53467';
const city = "London";
let id = 3654870;
const API =`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=ce0e89ec2f86acf06f37f79c70c53467`;
const urlimg =  'http://openweathermap.org/img/w/09d.png'


export const getWeather = async()=>{
  try{
    const data = await fetch(API).then((response) => response.json())
    return data.weather
  }catch(error){
    console.log(error)
  }

}
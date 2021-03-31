
export const getValidNameCity = (nameCity)=>{

  nameCity = nameCity.toLowerCase();
  if((/[\d|(/\-_.,+*!?)]+/gi).test(nameCity)){
    return window.alert('No son correctos caracteres para una ciudad')
  }else{
    let str = nameCity.match(/[a-zA-Z|ū]+/gi)
    if(str){
      str= str.map((word,index)=>{
      let letter = word[0].toUpperCase();
      let newWord = letter + word.slice(1) 
      return newWord
      }).join(' ')
      return str
    }else{
      return ""
    }
  }
}

import axios from 'axios';


class Api{
    static async getCidade(cidade){
    const response =  new cidadeTempo((await axios.get(`https://api.hgbrasil.com/weather?key=2033cfdb&city_name=${cidade}`)).data.results);
    
    //http://api.hgbrasil.com/weather?chave=2033cfdb&city_name=${cidade}
    //http://api.hgbrasil.com/weather/?format=json&cid=BRXX0198
    //https://github.com/angelogluz/ES6/issues/3
    return response
    }
}

class cidadeTempo{
    constructor({city_name,temp,date,description}){// so que eu quero desse objeto
    this.city_name = city_name,   
    this.temp=temp,
    this.date=date,
    this.description= description
    
    }
}

Api.getCidade('Piratini').then(v=>{console.log(v)});// como é um metodo estatico não preciso instanciar minha classe
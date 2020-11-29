 import { error , defaultModules} from '@pnotify/core/dist/PNotify.js';
  
import '@pnotify/core/dist/BrightTheme.css';
import articlesTpl from './articles.hbs'
 



const listRef = document.querySelector('.articles')
const debounce = require('lodash.debounce');
const inpSerch = document.querySelector('.serchCauntries')
let nameCitie;


const serchCities = debounce(event=> {
 
    (nameCitie = event.target.value)
    listRef.innerHTML = '';
    
    fetch(`https://restcountries.eu/rest/v2/name/${nameCitie}`).then(resp => resp.json()).then(data => {
        console.log(data.name)
        if (data.length <= 10) {
            
            const qwe = articlesTpl(data) 
            listRef.insertAdjacentHTML('beforeend', qwe)
            
        } else {
        
            error({
                text: 'Too many matches found.Please enter a more specific query!',
                hide: false,
                sticker: false,
                closer: false,
                hide: true,
                delay: 2000,
                });
           
            
 }
})}, 2000)
inpSerch.addEventListener('input', serchCities)


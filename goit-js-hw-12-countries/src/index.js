import './styles.css';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries';
import countriesTpl from './countries.hbs'


const debounce = require('lodash.debounce');
const inputRef = document.querySelector('.serchCauntries')
const listRef = document.querySelector('.articles')
   
inputRef.addEventListener('input', debounce(event => {
    const inputValue = event.target.value
    
         fetchCountries(inputValue).then(updateCountries)

    },500))

function updateCountries(countrie) {
    const markupTittle = countrie.map(elem => `<li>${ elem.name }</li>`)
    
    listRef.innerHTML = '';
    if (countrie.length < 10 && countrie.length > 1) {
       
        listRef.insertAdjacentHTML('beforeend', ...markupTittle.join(''))
    }
      
    else if (countrie.length === 1) {
       const markup = countriesTpl(countrie)
        listRef.insertAdjacentHTML('beforeend', markup)
        } 
    else {
        
        error({
            text: 'Too many matches found.Please enter a more specific query!',
            hide: false,
            sticker: false,
            closer: false,
            hide: true,
            delay: 350,
        })
    }
}

class ServisSerchCountie(countrie) {
    updateCountries(countrie) {
        
},


}
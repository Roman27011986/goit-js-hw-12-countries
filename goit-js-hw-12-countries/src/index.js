import './styles.css';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries';
import countriesTpl from './countries.hbs'
import tittleTpl from './tittle.hbs'

const debounce = require('lodash.debounce');
const inputRef = document.querySelector('.serchCauntries')
const listRef = document.querySelector('.articles')
   
inputRef.addEventListener('input', debounce(event => {
    const inputValue = event.target.value
    if (inputValue) {
         fetchCountries(inputValue).then(updateCountries)
}
    },500))

function updateCountries(countrie) {
    listRef.innerHTML = '';
    if (countrie.length < 10 && countrie.length > 1) {
       const markup = tittleTpl(countrie)
        listRef.insertAdjacentHTML('beforeend', markup)
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


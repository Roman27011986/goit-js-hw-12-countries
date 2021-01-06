function fetchCountries(searchQuery)  {
   const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
   return fetch(url)
      .then(resp => {
         if (searchQuery) {
            return resp.json()
         } else {
            return
         }
      });
}
 
   export default fetchCountries;

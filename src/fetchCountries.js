export function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(url)
    .then(responce => {
      if (!responce.ok) {
        if (responce.status === 404) {
          return [];
        }
        throw new Error(responce.status);
      }
      return responce.json();
    })
    .catch(error => {
      console.error(error);
    });
}
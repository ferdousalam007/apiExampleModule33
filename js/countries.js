
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = counties => {
    // for (const country of counties) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="getDetail('${country.name}')">country detail</button>
           
        `;
        countriesDiv.appendChild(div);
    });
}
const getDetail = countryname => {
    // console.log(countryname);
    const url = `https://restcountries.eu/rest/v2/name/${countryname}`;
    fetch(url)
    .then(res => res.json())
    .then(data=> displayDetail(data[0]));
}
const displayDetail = country =>{
 console.log(country);
 const countriesDiv2 = document.getElementById('country-detail'); 
countriesDiv2.innerHTML = `<h5>${country.name}</h4>
<img width="200px" src="${country.flag}">
`;
}
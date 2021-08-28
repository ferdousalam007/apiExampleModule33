const searchFood = () => {
    const searhField = document.getElementById('search-field');
    const searchText = searhField.value;
    searhField.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearhResult(data.meals));
}
const displaySearhResult = meals => {
    //  console.log(meals);
    const allElementsArea = document.getElementById('all-elements');
    meals.forEach(meal=>{
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col-4');
        div.innerHTML=`
        <div class="col">
                <div class="card h-100 mb-3">
                    <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                    </div>
                </div>
            </div>
        `;
        
        allElementsArea.appendChild(div);
        
    })
}









// console.log(444)
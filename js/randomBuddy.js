const randomBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => getdata(data));
}
randomBuddy();
const getdata = (buddyData) => {
    const buddyAll = buddyData.results;
    const dataBlock = document.getElementById('random-buddy');
    for (const buddy of buddyAll) {
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email} location : ${buddy.location.country}`;
        dataBlock.appendChild(p);
    }

}
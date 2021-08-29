const searchPlayer = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);
    // after search for empty field

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}

    `;
    searchField.value = '';

    console.log(url)

    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => {
            console.log(data)
            displaySearchResult(data.teams)

        })
}



const displaySearchResult = players => {
    console.log(players)
    const searchResult = document.getElementById('search-result');
    for (const player of players) {
        // console.log(player);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card h-100">
                              <img src="${player.strStadiumThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${player.strTeam.strCountry}</h5>
                                <h6 class="card-description">${player.strDescriptionEN.slice(0, 10)} <h6> 
                               <p class="card-text">${player.strTeamBanner}.</p>
            </div>
        </div>`;
        searchResult.appendChild(div);


    }
}

// players.forEach(player => {
//     console.log(player);
// });

const loadPlayerDetail = playerId => {
    console.log(playerId);
}
// http://www.omdbapi.com/?t=avengers&apikey=488f0688
// built-in function
// fetch('http://www.omdbapi.com/?t=avengers&apikey=488f0688')
    // .then((response) => {
    //     // success callback
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);

    //     // what we want to do with the data
    //     let title = document.getElementById('title');
    //     title.textContent = data.Title;

    //     let image = document.getElementById('image');
    //     image.setAttribute('src', data.Poster);
    //     image.style.width = '200px';
    // })
    // .catch(() => {
    //     // failure callback
    //     console.log('Error getting the movie data');
// });
    
 async function fetchMovies() {
    let response =  await fetch('http://www.omdbapi.com/?t=avengers&apikey=488f0688');
    let movieDetails = await response.json();
     
    // console.log(movieDetails);

    //  js object
    //  easy to process
    //  console.log(movieDetails.Title);
     
    //  console.log(JSON.stringify(movieDetails));
     
     /*
        `{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Zak Penn","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson","Plot":"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian","Country":"United States","Awards":"Nominated for 1 Oscar. 43 wins & 81 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.0","imdbVotes":"1,586,756","imdbID":"tt0848228","Type":"movie","DVD":"N/A","BoxOffice":"$623,357,910","Production":"N/A","Website":"N/A","Response":"True"}`
     */
     
     //  console.log(typeof (`{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Zak Penn","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson","Plot":"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian","Country":"United States","Awards":"Nominated for 1 Oscar. 43 wins & 81 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.0","imdbVotes":"1,586,756","imdbID":"tt0848228","Type":"movie","DVD":"N/A","BoxOffice":"$623,357,910","Production":"N/A","Website":"N/A","Response":"True"}`));
     
     let JSONString = JSON.stringify(movieDetails);

     //  console.log(JSONString.slice(2, 7));
     
     let JSONObject = JSON.parse(JSONString);

     console.log(JSONObject.Title);
}

fetchMovies();
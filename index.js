// http://www.omdbapi.com/?t=avengers&apikey=488f0688
// built-in function
fetch('http://www.omdbapi.com/?t=avengers&apikey=488f0688')
    .then((response) => {
        // success callback
        return response.json();
    })
    .then((data) => {
        console.log(data);

        // what we want to do with the data
        let title = document.getElementById('title');
        title.textContent = data.Title;

        let image = document.getElementById('image');
        image.setAttribute('src', data.Poster);
        image.style.width = '200px';
    })
    .catch(() => {
        // failure callback
        console.log('Error getting the movie data');
    });
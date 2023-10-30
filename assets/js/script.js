function cardDetails(movie) {
    window.location.href = `profile.html?index=${movie.id}`;
}

fetch('data/movies.json')
    .then(response => response.json())
    .then(data => {
        let infos = document.querySelector('#infos');
        for (const movie of data.results) {
            let movieElement = document.createElement('div');
            movieElement.classList.add('col-md-2', 'mb-4');
            movieElement.innerHTML = `
                <div class="card movie-card" >
                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top myId" alt="Movie 1 Poster " id="${movie.id}" style="height:514px;">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">Release Date: ${movie.release_date}</p>
                        <p class="card-text">Rating: ${movie.vote_average * 10}%</p>
                    </div>
                </div>
            `;

            movieElement.addEventListener('click', function() {
                cardDetails(movie);
            });

            infos.appendChild(movieElement);
        }
    });

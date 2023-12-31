const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
console.log(index);

fetch('data/movies.json')
    .then(response => response.json())
    .then(data => {
        const movie = data.results.find(movie => movie.id == index);
        let infos = document.querySelector('#infos');

                    // movieElement.classList.add('col-md-2', 'mb-4');
                    infos.innerHTML = `
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
                <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="img-fluid movie-poster" alt="Movie Poster">
            </div>
            <div class="col-md-8">
                <div class="card movie-details">
                    <div class="card-body">
                        <h2 class="card-title">${movie.original_title}</h2>
                        <p class="card-text">Release Date: ${movie.release_date}</p>
                        <p class="card-text">Rating: ${movie.vote_average * 10}%</p>
                        
                    </div>
                    
                </div>
                <div class="col-md-12 mt-5 text-light">
                <h3>Overview</h3>
                <p class="overview">${movie.overview}</p>
            </div>
            </div>
            
        </div>
    </div>
`;

document.body.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';



    });




// fetch('data/movies.json')
//     .then(response => response.json())
//     .then(data => {

//         for (const movie of data.results) {
//             let movieElement = document.createElement('div');
//             movieElement.classList.add('col-md-2', 'mb-4');
//             movieElement.innerHTML = `
//                 <div class="card movie-card" >
//                     <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top myId" alt="Movie 1 Poster " id="${movie}" style="height:514px;">
//                     <div class="card-body">
//                         <h5 class="card-title">${movie.original_title}</h5>
//                         <p class="card-text">Release Date: ${movie.release_date}</p>
//                         <p class="card-text">Rating: ${movie.vote_average * 10}%</p>
//                     </div>
//                 </div>
//             `;

//             movieElement.addEventListener('click', function() {
//                 cardDetails(movie);
//             });

//             infos.appendChild(movieElement);
//         }
//     });










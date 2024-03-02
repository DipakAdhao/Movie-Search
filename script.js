

function searchMovie() {
    var searchInput = document.getElementById("searchInput");
    var searchValue = searchInput.value.trim();
  
    if (searchValue === "") {
      alert("Please enter a movie title");
      return;
    }
  
    var url = "https://www.omdbapi.com/?t=" + encodeURIComponent(searchValue) + "&apikey=40fbffdb"+"&plot=full";
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayMovieDetails(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  function displayMovieDetails(movieData) {
    var movieDetailsDiv = document.getElementById("movieDetails");
  
    if (movieData.Response === "False") {
      movieDetailsDiv.innerHTML = "<p>No movie found with that title</p>";
    } else {
      let title = "<h2>" + movieData.Title + "</h2>";
      let poster = "<img src='" + movieData.Poster + " alt='Movie Poster'>";
      let genre = "<p>Genre " + movieData.Genre + "</p>";
      let actors = "<p>Actors: " +movieData.Actors + "</p>";
      let plot = "<p>" + movieData.Plot + "</p>";
      let rating = "<p>Rating: " + movieData.imdbRating + "</p>";
      let year = "<p>Year: " + movieData.Year + "</p>";
      let rated = "<p>Rated: " + movieData.Rated + "</p>";
      let released = "<p>Release Date : " + movieData.Released + "</p>";
      let boxoffice = "<p> Box Office " + movieData.BoxOffice + "</p>"; 
           
      let view = title + poster + plot + rating + year + rated + released + actors + genre + boxoffice;

      movieDetailsDiv.innerHTML= view;

    }
  }
  
  var searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchMovie);
  

  // adding enter keyboard key (adding eventlistener to document means it'll work for entire page)

  document.addEventListener("keydown", function(event){

    if(event.key==="Enter"){
       
        searchMovie();  

    }
          


  }) 


  ///new
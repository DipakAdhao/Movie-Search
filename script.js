

function searchMovie() {
    var searchInput = document.getElementById("searchInput");
    var searchValue = searchInput.value.trim();
  
    if (searchValue === "") {
      alert("Please enter a movie title");
      return;
    }
  
    var url = "http://www.omdbapi.com/?t=" + encodeURIComponent(searchValue) + "&apikey=40fbffdb";
  
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
      var title = "<h2>" + movieData.Title + "</h2>";
      var poster = "<img src='" + movieData.Poster + "' alt='Movie Poster'>";
      var plot = "<p>" + movieData.Plot + "</p>";
      var rating = "<p>Rating: " + movieData.imdbRating + "</p>";
  
      movieDetailsDiv.innerHTML = title + poster + plot + rating;
    }
  }
  
  var searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchMovie);
  
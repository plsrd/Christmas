const christmasMovies = ['Elf', 
			 'Home Alone', 
			 'A Christmas Story', 
			 'Love Actually', 
			 'Christmas Vacation', 
			 'The Santa Clause', 
			 'Scrooged', 
			 'Mixed Nuts', 
			 'The Holiday', 
			 'Bad Santa', 
			 'Gremlins', 
			 'Christmas in Connecticut', 
			 'Holiday Inn', 
			 "I'll Be Home for Christmas", 
			 'White Christmas', 
			 'Die Hard', 
			 'How the Grinch Stole Christmas', 
			 'The Family Man', 
			 'Just Friends', 
			 'Kiss Kiss, Bang Bang', 
			 'The Night Before', 
			 'Jingle All the Way', 
			 'Arthur Christmas'];

const pickMovie = () => {
	let movieChoice = christmasMovies[Math.floor(Math.random() * (christmasMovies.length - 1))];
	return document.getElementById("movie-pick").innerHTML = movieChoice;
}

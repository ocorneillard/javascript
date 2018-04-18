
let movies = [
    {
        title : "Quand tu me parles tout bas",
        rating : 4.5,
        hasWatched : true
    },
    {
        title : "Pulp fiction",
        rating : 5,
        hasWatched : true
    },
    {
        title : "La vie en rose",
        rating : 0.5,
        hasWatched : false
    },
    {
        title : "Mad Max Fury Road",
        rating : 4,
        hasWatched : true
    },
    {
        title : "In Bruges",
        rating : 3,
        hasWatched : false
    }
]

for (movie in movies) {
    if (movies[movie].hasWatched == true) {
        console.log(`You have watched ${movies[movie].title} 
        - ${movies[movie].rating} stars`)
    } else {
        console.log(`You haven't seen ${movies[movie].title} 
        - ${movies[movie].rating} stars`)
    }
}

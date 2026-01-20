const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
// 1.Sci-Fi movies
const sciFi=movies.filter(m=>m.genre==="Sci-Fi");
console.log(sciFi);
// 2.Title + rating
const movieList=movies.map(m=>`${m.title}(${m.rating})`);
console.log(movieList);
// 3.Average rating
const avgRating=movies.reduce((sum,m)=>sum+m.rating,0)/movies.length;
console.log(avgRating);
// 4.Find Joker
console.log(movies.find(m=>m.title==="Joker"));
// 5.Index of Avengers
console.log(movies.findIndex(m=>m.title==="Avengers"));

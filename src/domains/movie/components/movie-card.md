MovieCard Example: 

```jsx
const movies = [
  {
    posterUrl: "https://image.tmdb.org/t/p/w780/7M0uwPgwvPONdFG0jk8TPK09xJU.jpg", 
    title: "Black Widow"
  }, 
  {
    posterUrl: "https://image.tmdb.org/t/p/w780/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg", 
    title: "Encanto"
  },
  {
    posterUrl: "https://image.tmdb.org/t/p/w780/jKuDyqx7jrjiR9cDzB5pxzhJAdv.jpg", 
    title: "Finch"
  }];

<div className="grid lg:grid-cols-5 gap-10 m-8">
  {movies.map(movie => <MovieCard data={movie} />)}
</div>
```
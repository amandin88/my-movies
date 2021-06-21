class Movie {
  constructor(
    id,
    title,
    category,
    imageUrl,
    director,
    year,
    description,
    watched,
    favorite
  ) {
    (this.id = id),
      (this.title = title),
      (this.category = category),
      (this.imageUrl = imageUrl),
      (this.director = director),
      (this.year = year),
      (this.description = description),
      (this.watched = watched),
      (this.favorite = favorite);
  }
}

export default Movie;

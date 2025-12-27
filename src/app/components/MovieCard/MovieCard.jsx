import s from './MovieCard.module.scss'
import ContentRatingTag from "../ContentRatingTag/ContentRatingTag"
import MovieCategoryTag from "../MovieCategoryTag/MovieCategoryTag"
import LinkComponent from "../Link/LinkComponent"

const MovieCard = ({
  title = 'Bob Esponja En Busca de los Pantalones Cuadrados',
  rating = 'AA',
  minutes = 120, 
  category = 'Estreno',
  image = 'https://m.media-amazon.com/images/M/MV5BZTBiZDQ2MWEtYzE1MC00YmMyLTg1NjUtNzE2YTZlMjI3MGUxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'}) => (
  <article className={s?.['movie-card']}>
    <div className={s?.['movie-poster']}>
      <img
        className={s?.poster}
        src={image}
      />
    </div>
    <header className={s?.header}>
      <div className={s?.left}>
        <ContentRatingTag type={rating}/>
        <time className={s?.minutes}>{minutes} min</time>
      </div>
      <MovieCategoryTag type={category} />
    </header>
    <p className={s?.title}><strong>{title}</strong></p>
    <LinkComponent />
  </article>
)

export default MovieCard
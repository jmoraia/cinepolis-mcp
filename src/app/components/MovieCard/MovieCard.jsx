import Link from "next/link"
import s from './MovieCard.module.scss'
import ContentRatingTag from "../ContentRatingTag/ContentRatingTag"
import MovieCategoryTag from "../MovieCategoryTag/MovieCategoryTag"

const MovieCard = ({
  title = 'Bob Esponja En Busca de los Pantalones Cuadrados',
  rating = 'AA',
  minutes = 120, 
  category = 'Estreno',
  image = 'https://tickets-static-content.cinepolis.com/pimcore/7851/assets/Mexico/Tickets/Movies/BobEsponjaEnBuscaDeLosPantalonesCuadrados/Es/SBSP_Desktop_Poster_720x1022_8/resource.jpg'}) => (
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
    <Link className={s?.link} href="#">Ver detalle</Link>
  </article>
)

export default MovieCard
import { clsx } from 'clsx'
import s from './MovieCategoryTag.module.scss'

const MovieCategoryTag = ({ type = 'Estreno' }) => {
  const movieCategory = ['Estreno', 'Concierto', 'Exclusivo Cinépolis', 'Festivales', 'Garantía', 'Preventa', 'Sala de arte', '+QueCine'].find(e => type === e)

  return (
    <span
      className={clsx(s?.['movie-category-tag'], s?.[movieCategory.replace('+', '').toLowerCase()])}
    >
      {movieCategory}
    </span>
  )
}

export default MovieCategoryTag
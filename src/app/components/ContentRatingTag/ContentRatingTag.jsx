import s from './ContentRatingTag.module.scss'
import { clsx } from 'clsx'

const ContentRatingTag = ({type = 'AA'}) => {
  const contentRating = ['AA', 'A', 'B', 'B15', 'C', 'D'].find(e => type === e)

  return (
    <span 
      className={clsx(s?.['content-rating-tag'], s?.[`${contentRating}`])}
    >
      {contentRating}
    </span>
  )
}

export default ContentRatingTag
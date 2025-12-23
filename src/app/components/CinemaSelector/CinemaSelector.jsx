import CinemaSelectorItem from '@/app/components/CinemaSelectorItem/CinemaSelectorItem'
import s from './CinemaSelector.module.scss'

const CinemaSelector = () => {
  return (
    <section>
      <div className={s?.scroll}>
        <CinemaSelectorItem isActive isVip />
        <CinemaSelectorItem />
        <CinemaSelectorItem />
      </div>
    </section>
  )
}

export default CinemaSelector
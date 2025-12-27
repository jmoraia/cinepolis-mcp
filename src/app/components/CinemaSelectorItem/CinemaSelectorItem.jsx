import s from './CinemaSelectorItem.module.scss'
import ExperienceTag from '@/app/components/ExperienceTag/ExperienceTag'
import { clsx } from 'clsx'
import CrossIcon from '../Icons/CrossIcon'

const CinemaSelectorItem = (
  {
    cinemaName = 'Andares',
    isActive,
    isVip,
  },
) => {
  return (
    <label className={clsx(s?.['cinema-selector-item'], isActive && s?.['is-active'])}>
      <span>{cinemaName}</span>
      {isVip && <ExperienceTag />}
      <CrossIcon />
    </label>
  )
}

export default CinemaSelectorItem
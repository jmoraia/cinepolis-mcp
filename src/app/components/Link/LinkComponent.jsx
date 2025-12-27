import s from './Link.module.scss'
import InformationCircleIcon from '../Icons/InformationCircleIcon'
import Link from 'next/link'

const LinkComponent = ({ href = '#', className = '', children }) => (
    <Link className={s?.link} href="#">
      <InformationCircleIcon />
      Ver detalle
    </Link>
)

export default LinkComponent
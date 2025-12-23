import s from './TabItem.module.scss'
import { clsx } from 'clsx'

const TabItem = ({children, isActive}) => (
    <button className={clsx(s?.['tab-item'], isActive && s?.['is-active'])}>{children}</button>
)

export default TabItem
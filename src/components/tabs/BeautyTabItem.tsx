import styles from './BeautyTabItem.module.scss'

export default function BeautyTabItem({ children, selected, onClick }: any) {
  return (
    <button
      className={`${styles.beautyTabItem} ${selected ? styles.selected : ''}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

import styles from './requireId.module.scss'

const RequireId = () => {
  return (
    <div className={styles.messageWrapper}>
      아이디 입력이 필요합니다. <br />홈 화면에서 검색어를 입력해주세요.
    </div>
  )
}

export default RequireId

import clsx from 'clsx';
import styles from './Chat.module.css';

const Chat = ({ img, roomName, message, time, active }) => {
  return (
    <div className={clsx(styles.chat, {
        [styles.active]: active
    })}>
        <div className={clsx(styles.rightWrapper)}>
            <img src={img} alt="Avatar" className={clsx(styles.avatar)} />
            <div className={clsx(styles.messageWrapper)}>
                <h3 className={styles.roomName}>{roomName}</h3>
                <h4 className={styles.messagePreview}>{message}</h4>
            </div>
        </div>
        <span className={styles.time}>{time}</span>
    </div>
  )
}

export default Chat
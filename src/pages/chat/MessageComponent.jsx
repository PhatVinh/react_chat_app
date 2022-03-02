import clsx from 'clsx';
import styles from './MessageComponent.module.css';

const MessageComponent = ({ message, avatar, right }) => {
  return (
      <div className={clsx({[styles.messageWrapperRight]: right, [styles.messageWrapper]: !right})}>
          <img src={avatar} alt='Avatar' className={clsx(styles.avatar)}/>
          <span className={clsx(styles.message)}>{message}</span>
      </div>
  )
}

export default MessageComponent
import clsx from "clsx";
import styles from './Member.module.css';
import { ReactComponent as InfoIcon } from '../../assets/icons/more-horizontal.svg';

const Member = ({ username, avatar, addedBy, isAdmin }) => {
    return (
        <div className={clsx(styles.memberWrapper)}>
            <div className={clsx(styles.rightSection)}>
                <img src={avatar} alt="Avatar" className={clsx(styles.avatar)} />
                <div className={clsx(styles.usernameWrapper)}>
                    <h4 className={styles.username}>{username}</h4>
                    {
                        !isAdmin ? <h5 className={styles.addedBy}>Added By {addedBy}</h5> : ''
                    }
                </div>
            </div>
            {
                !isAdmin ? 
                <div className={clsx(styles.leftSection)}>
                    <InfoIcon />
                </div> 
                :
                ''
            }
        </div>
    )
}

export default Member
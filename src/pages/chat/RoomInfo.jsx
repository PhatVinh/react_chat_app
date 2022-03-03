import clsx from 'clsx';
import styles from './RoomInfo.module.css';
import avatar_1 from '../../assets/images/avatar_1.jpg';
import avatar_2 from '../../assets/images/avatar_2.jpg';
import avatar_3 from '../../assets/images/avatar_3.jpg';
import avatar_4 from '../../assets/images/avatar_4.jpg';
import MemberComponent from './MemberComponent';

const roomMembers = [
    {
        username: "Nguyễn Thành Tâm",
        avatar: avatar_1,
        addedBy: "Phát",
    },
    {
        username: "Nguyễn Thành Long",
        avatar: avatar_3,
        addedBy: "Phát",
    },
    {
        username: "Đặng Ánh Tuyết",
        avatar: avatar_2,
        addedBy: "Phát",
    },
];

const roomAdmins = [
    {
        username: "Huỳnh Vinh Phát",
        avatar: avatar_4,
        addedBy: "Phát",
    },
];

const RoomInfo = () => {
    return (
        <>
            <div className={clsx(styles.header)}>
                <div className={clsx(styles.headerLinkWrapper, styles.active)}>
                    <span className={clsx(styles.headerLink)}>Chat Members</span>
                </div>
                <div className={clsx(styles.headerLinkWrapper)}>
                    <span className={clsx(styles.headerLink)}>Shared Files</span>
                </div>
            </div>
            <div className={clsx(styles.body)}>
                <h4 className={styles.title}>MEMBERS</h4>
                <div className={clsx(styles.memberWrapper)}>
                    {
                        roomMembers.map((member, index) => (
                            <MemberComponent
                                username={member.username}
                                avatar={member.avatar}
                                addedBy={member.addedBy}
                                key={index}
                            />)
                        )
                    }
                </div>
                <h4 className={styles.title}>ADMINS</h4>
                <div className={clsx(styles.adminWrapper)}>
                    {
                        roomAdmins.map((member, index) => (
                            <MemberComponent
                                username={member.username}
                                avatar={member.avatar}
                                addedBy={member.addedBy}
                                key={index}
                                isAdmin
                            />)
                        )
                    }
                </div>
            </div>
            <div className={clsx(styles.footer)}>
                <a href='#'>Privacy and Support</a>
                <h6>Get immediate support</h6>
            </div>
        </>
    )
}

export default RoomInfo
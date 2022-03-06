import clsx from "clsx";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import avatar_1 from '../../assets/images/avatar_1.jpg';
import avatar_2 from '../../assets/images/avatar_2.jpg';
import avatar_3 from '../../assets/images/avatar_3.jpg';
import { Chat } from "../";

import styles from './ChatList.module.css';

const chats = [
    {
        roomName: "Nhóm Java",
        avatar: avatar_2,
        message: 'Phát: Helo bitch',
        time: '12:34',
        isActive: true
    },
    {
        roomName: "Nhóm PHP",
        avatar: avatar_1,
        message: 'Phát: Helo bitch',
        time: '12:30',
        isActive: false
    },
    {
        roomName: "Nhóm HTML",
        avatar: avatar_3,
        message: 'Phát: Helo bitch',
        time: '12:34',
        isActive: false
    },
    {
        roomName: "Nhóm PHP",
        avatar: avatar_1,
        message: 'Phát: Helo bitch',
        time: '12:30',
        isActive: false
    },
    {
        roomName: "Nhóm HTML",
        avatar: avatar_3,
        message: 'Phát: Helo bitch',
        time: '12:34',
        isActive: false
    },
    {
        roomName: "Nhóm PHP",
        avatar: avatar_1,
        message: 'Phát: Helo bitch',
        time: '12:30',
        isActive: false
    },
    {
        roomName: "Nhóm HTML",
        avatar: avatar_3,
        message: 'Phát: Helo bitch',
        time: '12:34',
        isActive: false
    },
    {
        roomName: "Nhóm PHP",
        avatar: avatar_1,
        message: 'Phát: Helo bitch',
        time: '12:30',
        isActive: false
    },
    {
        roomName: "Nhóm HTML",
        avatar: avatar_3,
        message: 'Phát: Helo bitch',
        time: '12:34',
        isActive: false
    },
];

const ChatList = () => {
    return (
        <div className={clsx('col', 'l-3')}>
            <div className={clsx(styles.chatList)}>
                {/* Header */}
                <div className={clsx(styles.header)}>
                    <span className={clsx(styles.title)}>Chats</span>
                    <span>
                        <SearchIcon className={clsx(styles.icon)} />
                        <PlusIcon className={clsx(styles.icon, styles.plusIcon)} />
                    </span>
                </div>
                <div className={clsx(styles.filter)}>
                    <span className={clsx(styles.filterOption, styles.filterOptionActive)}>All</span>
                    <span className={clsx(styles.filterOption, styles.filterOption)}>Unread</span>
                </div>
                {/* Chat list section */}
                <div className={clsx(styles.chatListWrapper)}>
                    {
                        chats.map(
                            (chat, index) => (
                                <Chat
                                    key={index}
                                    img={chat.avatar}
                                    roomName={chat.roomName}
                                    message={chat.message}
                                    time={chat.time}
                                    active={chat.isActive}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatList
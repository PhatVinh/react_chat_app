import clsx from "clsx";
import styles from './Chat.module.css';
import avatar_2 from '../../assets/images/avatar_2.jpg';
import { ReactComponent as InfoIcon } from '../../assets/icons/more-horizontal.svg';
import { ReactComponent as PaperClipIcon } from '../../assets/icons/paperclip.svg';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import MessageComponent from "./MessageComponent";

const user = "Phát";
const messages = [
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Phát",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Phát",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Phát",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Phát",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum leo nec erat porta, eu aliquet urna pulvinar.",
	},
];

const Chat = () => {
	return (
		<div className={clsx('col', 'l-8')}>
			<div className={clsx(styles.header)}>
				<div className={clsx(styles.avatarWrapper)}>
					<img src={avatar_2} alt="avatar" className={clsx(styles.avatar)} />
					<span className={clsx(styles.roomName)}>Nhóm Java</span>
				</div>
				<InfoIcon className={clsx(styles.infoIcon)} />
			</div>
			<div className={clsx(styles.body)}>
				{
					messages.map((message, index) => 
						<MessageComponent 
							avatar={message.avatar}
							message={message.message}
							key={index}
							right={user === message.username}
						/>
					)
				}
			</div>
			<div className={clsx(styles.messageInputWrapper)}>
				<label htmlFor="message-input-file" className={clsx(styles.iconWrapper)}>
					<PaperClipIcon />
				</label>
				<input type="file" id="message-input-file" className={clsx(styles.inputFile)} />
				<textarea type="text" placeholder="Write a message..." className={clsx(styles.inputMessage)}/>
				<button className={clsx(styles.sendButton)}>
					<SendIcon />
				</button>
			</div>
		</div>
	)
}

export default Chat
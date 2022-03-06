import clsx from "clsx";
import styles from './Chat.module.css';
import avatar_2 from '../../assets/images/avatar_2.jpg';
import { ReactComponent as InfoIcon } from '../../assets/icons/more-horizontal.svg';
import { ReactComponent as PaperClipIcon } from '../../assets/icons/paperclip.svg';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import { Message, RoomInfo } from "../../components";

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
		message: "Lorem ipsum dolor sit amet.",
	},
	{
		username: "Phát",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac elit sem. Fusce dapibus sapien quis tellus posuere, quis facilisis nunc eleifend. Nunc id dui nec dolor aliquet porttitor. Proin pretium risus ut lacus elementum pharetra. Morbi sit amet diam enim. Ut id elit vel ipsum maximus cursus. Ut ornare quam sit amet tellus tincidunt, eu vestibulum erat cursus. ",
	},
	{
		username: "Phát",
		avatar: avatar_2,
		message: "Lorem ipsum dolor sit amet.",
	},
	{
		username: "Hồng",
		avatar: avatar_2,
		message: "Lorem ipsum.",
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
		<>
			<div className={clsx('col', 'l-5', styles.chatWrapper)}>
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
							<Message
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
					<textarea type="text" placeholder="Write a message..." className={clsx(styles.inputMessage)} />
					<button className={clsx(styles.sendButton)}>
						<SendIcon />
					</button>
				</div>
			</div>
			
			<div className={clsx('col', 'l-3', styles.infoSectionWrapper)}>
				<RoomInfo />
			</div>
		</>
	)
}

export default Chat
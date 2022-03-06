import clsx from 'clsx';
import { useState, useContext } from 'react';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/message-square.svg';
import { ReactComponent as LogOutIcon } from '../../assets/icons/log-out.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import avatar_1 from '../../assets/images/avatar_1.jpg';
import styles from './SideBar.module.css';
import { ThemeContext } from '../../services/context';
import { ThemeAction } from '../../services/actions';


const SideBar = () => {
	const [theme, dispatch] = useContext(ThemeContext);
	const {DARK_THEME_ACTION, LIGHT_THEME_ACTION} = ThemeAction;

	return (
		<div className={clsx('col', 'l-1', styles.sideBarWrapper)}>
			<div className={clsx(styles.sideBar)}>
				<LogoIcon className={clsx(styles.logo)} />
				<ul className={clsx(styles.sideBarList)}>
					<li className={clsx(styles.sideBarListItem, styles.sideBarListItemActive)}>
						<MessageIcon />
					</li>
					<li className={clsx(styles.sideBarListItem)} onClick={() => { theme === 'theme-mode-light' ? dispatch(DARK_THEME_ACTION) : dispatch(LIGHT_THEME_ACTION)}} >
						{
							theme === 'theme-mode-light' ? <MoonIcon/> : <SunIcon/>
						}
					</li>
				</ul>
				<ul className={clsx(styles.sideBarList)}>
					<li className={clsx(styles.sideBarListItem)}>
						<LogOutIcon />
					</li>
					<li className={clsx(styles.sideBarListItem)}>
						<img className={clsx(styles.sideBarAvatar)} src={avatar_1} alt='avatar' />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SideBar
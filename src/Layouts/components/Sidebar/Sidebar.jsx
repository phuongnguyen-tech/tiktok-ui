import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />}></MenuItem>
                <MenuItem title="Folowing" to={config.routes.following} icon={<UserGroupIcon />}></MenuItem>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />}></MenuItem>
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;

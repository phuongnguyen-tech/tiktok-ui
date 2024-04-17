import classNames from 'classnames/bind';
import styles from './SettingPopup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SettingPopup({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('setting')}>
                <FontAwesomeIcon className={cx('icon')} icon={children.icon} />
                <p className={cx('title')}>Log out</p>
            </div>
        </div>
    );
}

export default SettingPopup;

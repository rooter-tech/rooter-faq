import { h } from 'preact';
// import { logEventGA } from '../../../analytics';
import styles from './styles.css';

const DownloadAppCard = () => (
    <a
        href="https://rooter.app.link/PWADownload"
    >
        <div class={`box ${styles.downloadAppRoot}`}>
            <div class={styles.downloadContent}>
                <img class={styles.rooterLogoStyles} src="https://s3-ap-southeast-1.amazonaws.com/rooter-live-assets/Rooter-Brand.png" />
                <div class={styles.statContent}>
                    Connect with <span>4,00,000+</span> sports fans now!
                </div>
                <a class={`button ${styles.downloadBtnStyles}`} >
                    <span class="icon">
                        <i class="fa fa-download" />
                    </span>
                    <span>Download App</span>
                </a>
            </div>
            <div>
                <img class={styles.appScreenshotStyles} src="https://s3-ap-southeast-1.amazonaws.com/rooter-live-assets/app-screenshot.png" />
            </div>
        </div>
    </a>
);

export default DownloadAppCard;

import { h } from 'preact';
// import { logEventGA } from '../../../analytics';
import styles from './styles.css';
import { logEventGA } from '../../analytics';

const DownloadAppCard = (props) => (
    <a
        href="https://rooter.app.link/PWADownload"
		onClick={() => {
            // GA Event - When user downloads the app from the detail news page
			logEventGA({
				category: 'Download',
				action: 'Detail_news',
				label: `${props.newsId}`
			});
		}}
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

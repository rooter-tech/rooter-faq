import { h, Component } from 'preact';
import bowser from 'bowser';
import styles from './styles.css';

export default class SocialShare extends Component {
	handleTwitterShare = () => {
		window.open(`https://twitter.com/intent/tweet?text=${this.props.title}&url=${this.props.url}`, 'Twitter');
	}
	handleFacebookShare = (event) => {
		event.nativeEvent.stopPropagation();
		window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`, 'Facebook');
	}
	handleWhatsappShare = () => {
		window.open(`whatsapp://send?text=${this.props.title} ${this.props.url}`, 'Whatsapp');
	}
	handleLinkCopy = () => {
		const UrlInput = document.getElementById("copyUrl");
		UrlInput.select();
		document.execCommand("copy");
	}
	render (props) {
		const { isLabel } = props;
		return (
			<div class={`${styles.socialShareContainer}`}>
				{/* <input id="copyUrl" type="text" value={props.url} /> */}
				<span class={`button ${styles.shareBtnStyles}`} onClick={this.handleFacebookShare}>
					<span class="icon is-small">
						<i class="fa fa-facebook-official" />
					</span>
					{isLabel && <span>Facebook</span>}
				</span>
				<span class={`button ${styles.shareBtnStyles}`} onClick={this.handleTwitterShare}>
					<span class="icon is-small">
						<i class="fa fa-twitter" />
					</span>
					{isLabel && <span>Twitter</span>}
				</span>
				{bowser.mobile && <span class={`button ${styles.shareBtnStyles}`} onClick={this.handleWhatsappShare}>
					<span class="icon is-small">
						<i class="fa fa-whatsapp" />
					</span>
					{isLabel && <span>WhatsApp</span>}
				</span>}
				{/* <span class={`button ${styles.shareBtnStyles}`} onClick={this.handleLinkCopy}>
					<span class="icon is-small">
						<i class="fa fa-clone" />
					</span>
					{isLabel && <span>Link</span>}
				</span> */}
			</div>
		);
	}
}

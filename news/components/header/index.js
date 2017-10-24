import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
	state = {
		showMobileNavMenu: false
	}
	toggleMobileNav = () => {
		this.setState(prevState => ({ ...prevState, showMobileNavMenu: !prevState.showMobileNavMenu }));
	}
	render(props,state) {
		return (
			<header>
				<nav class="navbar">
					<div class="navbar-brand">
						<a class="navbar-item" href=''><img src="https://s3-ap-southeast-1.amazonaws.com/rooter-live-assets/Rooter-Brand.png" alt="Rooter" /></a>
						<div class={`navbar-burger ${state.showMobileNavMenu && 'is-active'}`} onClick={this.toggleMobileNav}>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div class={`navbar-menu ${state.showMobileNavMenu && 'is-active'}`}>
						<div class="navbar-start">
							<Link href="/news" className='nav-item'>News</Link>
						</div>
						<div class="navbar-end">
							<div class='nav-item' />
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

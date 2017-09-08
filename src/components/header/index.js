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
						<a class="navbar-item" href=''><img src="/img/logo/rooter.png" alt="Rooter" /></a>
						<div class={`navbar-burger ${state.showMobileNavMenu && 'is-active'}`} onClick={this.toggleMobileNav}>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div class={`navbar-menu ${state.showMobileNavMenu && 'is-active'}`}>
						<div class="navbar-start">
							<Link href="/web/howtoplay" className='nav-item'>How to Play</Link>
							<Link href="/web/faq" className='nav-item'>FAQ</Link>
							<Link href="/web/rules" className='nav-item'>Rules</Link>
							<Link href="/web/termsconditions" className='nav-item'>Terms and Conditions</Link>
						</div>
						<div class="navbar-end">
							<div class='nav-item'>
									<a class="button is-danger" href='mailto:support@rooter.io' style={{ padding: '15px' }}>
										<span>Report</span>
										<span class="icon" style={{ marginRight: '0px' }}>
											<i class="fa fa-bug" />
										</span>
									</a>
							</div>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

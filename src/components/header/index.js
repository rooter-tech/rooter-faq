import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
	render() {
		return (
			<header>
				<nav className='nav'>
					<div class="nav-left">
						<Link href="/web/howtoplay" className='nav-item'>How to Play</Link>
						<Link href="/web/faq" className='nav-item'>FAQ</Link>
						<Link href="/web/rules" className='nav-item'>Rules</Link>
						<Link href="/web/termsconditions" className='nav-item'>T&amp;C</Link>
					</div>
					<div class="nav-right">
						<div class='nav-item'>
								<a class="button is-danger" href='mailto:support@rooter.io' style={{ padding: '15px' }}>
									<span>Report</span>
									<span class="icon" style={{ marginRight: '0px' }}>
										<i class="fa fa-bug" />
									</span>
								</a>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

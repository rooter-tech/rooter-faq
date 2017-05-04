import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
	render() {
		return (
			<header>
				<nav className='nav'>
					<div class="nav-left">
						<Link href="/faq" className='nav-item'>FAQ</Link>
						<Link href="/rules" className='nav-item'>Rules</Link>
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

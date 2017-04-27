import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
	render() {
		return (
			<header>
				<nav className='nav'>
					<div class="nav-left" />
					<div class="nav-center is-centered">
						<Link href="/faq" className='nav-item'>FAQ</Link>
						<Link href="/rules" className='nav-item'>Rules</Link>
					</div>
					<div class="nav-right" />
				</nav>
			</header>
		);
	}
}

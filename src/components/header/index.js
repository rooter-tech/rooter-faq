import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
	render() {
		return (
			<header>
				<nav className='nav'>
					<div class="nav-left">
						<a href="http://rooter.io/" class="nav-item is-primary">
							<span class="icon">
							<i class="fa fa-chevron-left" aria-hidden="true" />
							</span>
							<span>Back to website</span>
						</a>
					</div>
					<div class="nav-center is-centered">
						<Link href="/" className='nav-item'>FAQ</Link>
						<Link href="/rules" className='nav-item'>Rules</Link>
					</div>
					<div class="nav-right" />
				</nav>
			</header>
		);
	}
}

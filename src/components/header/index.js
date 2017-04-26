import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header>
				<nav className='nav'>
					<div class="nav-left">
						<h1 className='nav-item'>Rooter FAQ</h1>
					</div>
					<div class="nav-center">
						<a href="http://rooter.io/" className='nav-item'>Home</a>
						<Link href="/" className='nav-item'>FAQ</Link>
						<Link href="/rules" className='nav-item'>Rules</Link>
					</div>
				</nav>
			</header>
		);
	}
}

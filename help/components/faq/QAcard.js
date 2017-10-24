import { h } from 'preact';
import style from './styles.css';

const QAcard = (props) => (
	<div className="card" class={style.cardStyle}>
		<header className="card-header">
			<p className="card-header-title">
			{props.question}
			</p>
		</header>
		<div className="card-content">
			<div className="content" style={{ wordWrap: 'break-word' }}>
				<div dangerouslySetInnerHTML={{__html: `${props.answer}`}} />
			</div>
		</div>
	</div>
);

export default QAcard;

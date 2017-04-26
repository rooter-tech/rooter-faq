import { h } from 'preact';

const RulesContainer = (props) => (
	<section className="section">
		<div className="container">
			<div className="heading">
				<h1 className="title">{props.rulesType}</h1>
				<hr />
			</div>
			<div class='content' style={{ marginTop: '20px' }}>
				<ol>
					{
						props.containerData.map((rule) => <li>{rule}</li>)
					}
				</ol>
			</div>
		</div>
	</section>
);

export default RulesContainer;

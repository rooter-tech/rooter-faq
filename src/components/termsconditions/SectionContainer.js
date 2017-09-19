import { h } from 'preact';
import _ from 'lodash';

const SectionContainer = (props) => (
	<section className="section" id={props.anchoredTag || _.kebabCase(props.sectionName)}>
		<div className="container">
			<div className="heading">
				<h1 className="title">{props.sectionName}</h1>
				<hr />
			</div>
			<div class='content' style={{ marginTop: '20px' }}>
				{props.sectionContent}
			</div>
		</div>
	</section>
);

export default SectionContainer;

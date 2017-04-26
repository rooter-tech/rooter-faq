import { h } from 'preact';
import _ from 'lodash';
import QAcard from './QAcard';


const SectionContainer = (props) => (
	<section className="section">
		<div className="container">
			<div className="heading">
				<h1 className="title">{props.sectionType}</h1>
				<hr />
			</div>
			<div style={{ marginTop: '20px' }}>
				{
					props.containerData.length > 0 ?
						_.chunk(props.containerData, 3).map((rowData) =>
						<div className='columns'>
							{
								rowData.map((qaObj) => (
									<div className='column'><QAcard question={qaObj.question} answer={qaObj.answer} /></div>
								))
							}
						</div>
						)
						:
						<h2 class="subtitle">No results found !</h2>
				}
			</div>
		</div>
	</section>
);

export default SectionContainer;

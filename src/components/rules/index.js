import { h, Component } from 'preact';
import RulesContainer from './RulesContainer';
import rulesData from '../../assets/rulesData.json';

export default class Rules extends Component {
	render() {
		return (
			<div>
				<RulesContainer rulesType='General' containerData={rulesData.general} />
				<RulesContainer rulesType='Cricket' containerData={rulesData.cricket} />
			</div>
		);
	}
}

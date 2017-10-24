import { h, Component } from 'preact';
import RulesContainer from './RulesContainer';

export default class Rules extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rulesData: undefined,
			isLoadingRules: true,
			errorMessage: ''
		};
	}
	componentDidMount() {
		fetch("https://s3-ap-southeast-1.amazonaws.com/rooter-faq/rulesData.json")
		.then((response) => response.json())
		.then((data) => {
			this.setState(() => {
				return {
					isLoadingRules: false,
					errorMessage: '',
					rulesData: data
				};
			});
		})
		.catch(() => {
			this.setState({
				errorMessage: 'Some error occured',
				isLoadingRules: false
			});
		});
	}
	render(props,state) {
		return (
			state.isLoadingFaqs ?
				<h4 style={{ textAlign: 'center' }}>Loading...</h4>
				:
				<div>
					{
						state.rulesData && !state.errorMessage ?
							<div>
								<RulesContainer rulesType='General' containerData={state.rulesData.general} />
								<RulesContainer rulesType='Cricket' containerData={state.rulesData.cricket} />
							</div>
						:
						<h3 style={{ color: 'red', textAlign: 'center' }}>{state.errorMessage}</h3>
					}
				</div>
		);
	}
}

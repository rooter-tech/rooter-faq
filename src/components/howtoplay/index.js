import { h, Component } from 'preact';
import QAcard from '../faq/QAcard';
import _ from 'lodash';

export default class HowToPlay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			howToPlayData: undefined,
			isLoadingJSON: true,
			errorMessage: ''
		};
	}
	componentDidMount() {
		fetch("https://s3-ap-southeast-1.amazonaws.com/rooter-faq/howToPlay.json")
		.then((response) => response.json())
		.then((data) => {
			this.setState(() => {
				return {
					isLoadingJSON: false,
					errorMessage: '',
					howToPlayData: data
				};
			});
		})
		.catch(() => {
			this.setState({
				errorMessage: 'Some error occured',
				isLoadingJSON: false
			});
		});
	}
	render(props,state) {
		return (
			state.isLoadingJSON ?
				<h4 style={{ textAlign: 'center' }}>Loading...</h4>
				:
				<div>
					{
						state.howToPlayData && !state.errorMessage ?
						<section className="section">
							<div class='container'>
								{
									state.howToPlayData.map(sport => <div>
										<QAcard question={_.startCase(sport.name)} answer={sport.howtoplay} />
										<hr />
									</div>)
								}
							</div>
						</section>
						:
						<h3 style={{ color: 'red', textAlign: 'center' }}>{state.errorMessage}</h3>
					}
				</div>
		);
	}
}

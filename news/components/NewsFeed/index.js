import { h, Component } from 'preact';
// import _ from 'lodash';

export default class NewsFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			NewsFeedData: undefined,
			isLoadingJSON: true,
			errorMessage: ''
		};
	}
	// componentDidMount() {
	// 	fetch("https://s3-ap-southeast-1.amazonaws.com/rooter-faq/NewsFeed.json")
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		this.setState(() => {
	// 			return {
	// 				isLoadingJSON: false,
	// 				errorMessage: '',
	// 				NewsFeedData: data
	// 			};
	// 		});
	// 	})
	// 	.catch(() => {
	// 		this.setState({
	// 			errorMessage: 'Some error occured',
	// 			isLoadingJSON: false
	// 		});
	// 	});
	// }
	render(props, state) {
		return (
			<div>Here</div>
		);
	}
}

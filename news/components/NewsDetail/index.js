import { h, Component } from 'preact';
import axios from 'axios';
import styles from './styles.css';
import API from '../api';
// import _ from 'lodash';

export default class NewsDetail extends Component {
	state = {
		newsDetails: undefined,
		isFetchingNewsDetails: true
	}
	componentDidMount() {
		this.fetchNewsDetails(this.props.newsid);
	}
	fetchNewsDetails = (newsId) => {
		axios.get(`${API.baseURL}News/${newsId}/details`).then((response) => {
			this.setState(() =>
				({ newsDetails: response.data, isFetchingNewsDetails: false }));
		});
	}
	render(props, state) {
		const { newsDetails } = state;
		return (
			state.isFetchingNewsDetails ?
				<div>Loading</div>
				:
				<div>
					<div class={styles.rootContainer}>
						<div class="content">
							<h1>{newsDetails.title}</h1>
						</div>
					</div>
					<figure class="image">
						<img class={styles.headerImageStyles} src={newsDetails.media[0].href} alt="News Header Image" />
					</figure>
					<div class={styles.rootContainer}>
						<div dangerouslySetInnerHTML={{__html: newsDetails.description }} />
					</div>
				</div>
		);
	}
}

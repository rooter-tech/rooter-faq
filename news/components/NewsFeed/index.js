import { h, Component } from 'preact';
import axios from 'axios';
import styles from './styles.css';
import API from '../api';
import { newsFeedPageSize } from '../constants';
import NewsCard from './NewsCard';
// import _ from 'lodash';

export default class NewsFeed extends Component {
	state = {
		newsData: [],
		currentPageNum: 1
	}
	componentDidMount() {
		this.fetchNewsItems();
	}
	fetchNewsItems = () => {
		axios.get(`${API.baseURL}News/feed`, {
			params: {
				pageNo: this.state.currentPageNum,
				pageSize: newsFeedPageSize
			}
		}).then((response) => {
			this.setState(prevState =>
				({ newsData: response.data, currentPageNum: prevState.currentPageNum + 1 }));
		});
	}
	render(props, state) {
		console.log(state.newsData);
		return (
			<div class={styles.rootContainer}>
				<div class="columns is-multiline">
					{
						state.newsData.map(news => (
							<div class="column is-half">
								<NewsCard newsData={news} />
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

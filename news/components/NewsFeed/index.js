import { h, Component } from 'preact';
import axios from 'axios';
import styles from './styles.css';
import API from '../api';
import { newsFeedPageSize } from '../constants';
import NewsCard from './NewsCard';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../common/Loading';

export default class NewsFeed extends Component {
	state = {
		newsData: [],
		currentPageNum: 1,
		hasMoreItems: true
	}
	fetchNewsItems = () => {
		axios.get(`${API.baseURL}News/feed`, {
			params: {
				pageNo: this.state.currentPageNum,
				pageSize: newsFeedPageSize
			}
		}).then((response) => {
			const newsItems = response.data;
			this.setState(prevState => ({
				newsData: prevState.newsData.concat(newsItems),
				currentPageNum: prevState.currentPageNum + 1,
				hasMoreItems: !(newsItems.length < newsFeedPageSize)
			}));
		});
	}
	render(props, state) {
		console.log(state.newsData);
		return (
			<div class={styles.rootContainer}>
				<InfiniteScroll
					pageStart={1}
					loadMore={this.fetchNewsItems}
					hasMore={state.hasMoreItems}
					loader={<Loading />}
				>
					<div class="columns is-multiline">
						{
							state.newsData.map(news => (
								<div class="column is-half">
									<NewsCard newsData={news} />
								</div>
							))
						}
					</div>
				</InfiniteScroll>
			</div>
		);
	}
}

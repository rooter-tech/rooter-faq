import { h, Component } from 'preact';
import { Helmet } from "react-helmet";
import axios from 'axios';
import styles from './styles.css';
import API from '../api';
import Loading from '../common/Loading';
import DownloadAppCard from '../common/DownloadAppCard';
import NewsAuthor from '../common/NewsAuthor';
import { logPageView, logEventGA } from '../analytics';

export default class NewsDetail extends Component {
	state = {
		newsDetails: undefined,
		isFetchingNewsDetails: true
	}
	componentDidMount() {
		console.log(this.props);
		this.fetchNewsDetails(this.props.newsid);
		logPageView();
		// GA Event - When unique user lands on the news website
		logEventGA({
			category: 'Universal',
			action: 'User_detail_landing',
			label: `${this.props.newsid}, ${this.props.utm_source || 'Direct'}`
		});
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
				<Loading />
				:
				<div>
					<Helmet>
						<title>{newsDetails.title}</title>
						{/* Open graph meta tags */}
						<meta property="og:url" content={`https://www.rooter.io/news/${newsDetails.id}/${newsDetails.slug || ''}`} />
						<meta property="og:type" content="article" />
						<meta property="og:title" content={newsDetails.title} />
						<meta property="og:description" content={newsDetails.summary} />
						<meta property="og:image" content={newsDetails.media[0].href} />
					</Helmet>
					<div class={styles.rootContainer}>
						<div class="content">
							<h1>{newsDetails.title}</h1>
						</div>
						<NewsAuthor
							author={newsDetails.author}
							createdAt={new Date(newsDetails.createdAt)}
						/>
						<figure class="image">
							<img src={newsDetails.media[0].href} alt="News Header Image" />
						</figure>
						<div class={styles.newsContentStyles}>
						{
							newsDetails.description ?
							<div  dangerouslySetInnerHTML={{__html: newsDetails.description }} />
							:
							<p>{newsDetails.summary}</p>
						}
						</div>
						<DownloadAppCard newsId={newsDetails.id}/>
					</div>
				</div>
		);
	}
}

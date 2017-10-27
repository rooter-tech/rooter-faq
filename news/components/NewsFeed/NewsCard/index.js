import { h } from 'preact';
import { Link } from 'preact-router';
import SocialShare from '../../common/SocialShare';
import NewsAuthor from '../../common/NewsAuthor';
import { logEventGA } from '../../analytics';

const NewsCard = (props) => {
	const { newsData } = props;
	return (
	<div class="card">
		<Link
			onClick={() => {
				// GA Event - When user clicks on news
				logEventGA({
					category: 'News_Summary',
					action: 'News_Click',
					label: `${newsData.id}`
				});
			}}
			style={{ color: '#000' }} href={`/news/${newsData.id}/${newsData.slug || ''}`}
		>
			<div class="card-image">
				<figure class="image is-4by3">
					<img src={newsData.media[0].href} alt={newsData.title} />
				</figure>
			</div>
			<div class="card-content">
				<div class="content">
					<h3>{newsData.title}</h3>
					<p>{newsData.summary}</p>
					<NewsAuthor
						author={newsData.author}
						createdAt={new Date(newsData.createdAt)}
					/>
				</div>
			</div>
		</Link>
		<footer class="card-footer">
		<SocialShare
			title={newsData.title}
			url={`https://www.rooter.io/news/${newsData.id}/${newsData.slug || ''}`}
		/>
		</footer>
	</div>
	);
};

export default NewsCard;

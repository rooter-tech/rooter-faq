import { h } from 'preact';
import SocialShare from '../../common/SocialShare';

const newsDateFormat = {
	day: 'numeric',
	month: 'numeric',
	year: 'numeric',
	hour: 'numeric',
	minute:'numeric',
	hour12: true
};


const NewsCard = (props) => {
	const { newsData } = props;
	return (
	<div class="card">
		<a style={{ color: '#000' }} href={`/news/${newsData.id}/${newsData.slug || ''}`} >
			<div class="card-image">
				<figure class="image is-4by3">
					<img src={newsData.media[0].href} alt="News Header Image" />
				</figure>
			</div>
			<div class="card-content">
				<div class="content">
					<h3>{newsData.title}</h3>
					<p>{newsData.summary}</p>
					<div class="content is-small">{`${newsData.author} | ${new Date(newsData.createdAt).toLocaleString('en-IN', newsDateFormat)}`}</div>
				</div>
			</div>
		</a>
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

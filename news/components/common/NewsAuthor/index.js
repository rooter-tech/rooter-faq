import { h } from 'preact';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import addMinutes from 'date-fns/add_minutes';

const NewsAuthor = ({ author, createdAt }) => (
	<div class="content is-small">{`${author} | ${distanceInWordsToNow(addMinutes(createdAt, 330))} ago`}</div>
);

export default NewsAuthor;

import { h, Component } from 'preact';
import lunr from 'lunr';
import _ from 'lodash';
import faqData from '../../assets/faqData.json';
import SectionContainer from './SectionContainer';

const idx = lunr(function () {
	this.ref('id');
	this.field('question');
	this.field('answer');
	faqData.forEach(function (qa) {
		this.add(qa);
	}, this);
});
const faqByKey = _.keyBy(faqData, 'id');

const computeFilteredFAQ = (matchedIDs, searchStr) => {
	if (searchStr && searchStr.length > 3) {
		if (matchedIDs.length > 0) {
			return matchedIDs.map((qaID) => faqByKey[qaID]);
		}
		return [];
	}
	return faqData;
};

export default class FAQ extends Component {
	constructor (props) {
		super(props);
		this.state = {
			faqs: faqData,
			searchQuery: ''
		};
		_.bindAll(this, ['onChangeSearchText']);
	}
	onChangeSearchText(event) {
		const newStr = event.target.value;
		this.setState(() => {
			return {
				searchQuery : newStr,
				faqs: computeFilteredFAQ(idx.search(newStr).map(item=>item.ref), newStr)
			};
		});
	}
	render(props, state) {
		const groupedFaqs = _.groupBy(state.faqs, 'type');
		return (
			<div>
				<section className="section">
					<div className="container">
						<p class="control has-icons-left">
							<input value={state.searchQuery} className="input" type="text" placeholder="Search..." onInput={this.onChangeSearchText} />
							<span class="icon is-small is-left">
							<i class="fa fa-search" />
							</span>
						</p>
					</div>
				</section>
				<SectionContainer queryStr={state.searchQuery} sectionType='Prizes' containerData={groupedFaqs.prize || []} />
				<SectionContainer queryStr={state.searchQuery} sectionType='Redeem and Refund' containerData={groupedFaqs.redeem_refund || []} />
				<SectionContainer queryStr={state.searchQuery} sectionType='Tech Support' containerData={groupedFaqs.tech_support || []} />
			</div>
		);
	}
}

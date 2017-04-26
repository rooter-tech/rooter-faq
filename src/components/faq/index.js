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

const computeFilteredFAQ = (faqCollection, matchedIDs, searchStr) => {
	if (searchStr) {
		if (matchedIDs.length > 0) {
			const faqByKey = _.keyBy(faqCollection, 'id');
			return matchedIDs.map((qaID) => faqByKey[qaID]);
		}
		return [];
	}
	return faqCollection;
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
				faqs: computeFilteredFAQ(faqData, idx.search(newStr).map(item=>item.ref), newStr)
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
				<SectionContainer sectionType='Prizes' containerData={groupedFaqs.prize || []} />
				<SectionContainer sectionType='Redeem and Refund' containerData={groupedFaqs.redeem_refund || []} />
				<SectionContainer sectionType='Tech Support' containerData={groupedFaqs.tech_support || []} />
			</div>
		);
	}
}

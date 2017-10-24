import { h, Component } from 'preact';
import lunr from 'lunr';
import _ from 'lodash';
import SectionContainer from './SectionContainer';

const computeFilteredFAQ = (faqData,faqByKey,matchedIDs, searchStr) => {
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
			isLoadingFaqs: true,
			errorMessage: '',
			allFaqs: undefined,
			faqsByKey: undefined,
			filteredFaqs: undefined,
			searchQuery: ''
		};
		_.bindAll(this, ['onChangeSearchText']);
	}
	componentDidMount() {
		fetch("https://s3-ap-southeast-1.amazonaws.com/rooter-faq/faqData.json")
		.then((response) => response.json())
		.then((data) => {
			this.setState(() => {
				return {
					isLoadingFaqs: false,
					errorMessage: '',
					allFaqs: data,
					faqsByKey: _.keyBy(data, 'id'),
					filteredFaqs: data,
					searchQuery: ''
				};
			});
			this.idx = lunr(function () {
				this.ref('id');
				this.field('question');
				this.field('answer');
				data.forEach(function (qa) {
					this.add(qa);
				}, this);
			});
		})
		.catch(() => {
			this.setState({
				errorMessage: 'Some error occured',
				isLoadingFaqs: false
			});
		});
	}
	onChangeSearchText(event) {
		const newStr = event.target.value;
		this.setState((prevState) => {
			return {
				searchQuery : newStr,
				filteredFaqs: computeFilteredFAQ(prevState.allFaqs,prevState.faqsByKey,this.idx.search(newStr).map(item=>item.ref), newStr)
			};
		});
	}
	render(props, state) {
		const groupedFaqs = state.filteredFaqs ? _.groupBy(state.filteredFaqs, 'type') : undefined;
		return (
			state.isLoadingFaqs ?
				<h4 style={{ textAlign: 'center' }}>Loading...</h4>
				:
				<div>
					{
						groupedFaqs && !state.errorMessage ?
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
						:
						<h3 style={{ color: 'red', textAlign: 'center' }}>{state.errorMessage}</h3>
					}
				</div>
		);
	}
}

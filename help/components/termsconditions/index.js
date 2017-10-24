import { h, Component } from 'preact';
import SectionContainer from './SectionContainer';
import GroupTable from './groupTable';

export default class TermsConditions extends Component {
	render() {
		return (
			<div>
				<SectionContainer
					sectionName='Terms and Conditions'
					sectionContent={
						<div>
							<p>Rooter reserves the right of opening and closing a round based on match’s current situation.</p>
							<p>A timer always denotes the duration of an active round - A user is expected to submit their card during that time frame, cards will not be opened for any individual user.</p>
							<p>Rooter reserves the right of marking cards based on the official stats for a LIVE and Pre Match. Any 3rd party stat presented as proof will not be accepted.</p>
							<p>Content on the app is subject to change without any prior notice. Adding or removing matches is Rooter’s decision and it is subject to LIVE TELECAST, Stats Availability and Timing.</p>
							<p>Entire content material on our platform is either owned by us or licensed to us. This material includes the design, layout, look, appearance and graphics which are not to be reproduced without any accordance with the copyright notice. Unauthorized use of the content may lead to a criminal offense. If you any content on our app or website belongs to someone else, please contact at <a href="mailto:support@rooter.io">support@rooter.io</a>.</p>
							<p>You should not post violent, nude, partially nude, discriminatory, unlawful or hateful messages in the LIVE MATCH FORUMS, which may lead to a DIRECT BAN from the app.</p>
							<p>You are responsible to keep your login method, password, redeemed codes and any discrete details safe.</p>
							<p>Rooter reserves the right to BAN/DEACTIVATE any user for spreading spam links or use abusive language in the LIVE MATCH FORUM.<br />
							Cards for one particular round will never be carried forward to the next round.</p>
						</div>
					}
				/>
				<SectionContainer
					sectionName='How to Play'
					sectionContent={
						<div>
							<p>Our Cricket game is divided into different rounds based on sessions/ overs/ days. Users are expected to select 4 cards for each session when prediction window opens.</p>
							<p>Once your prediction comes true, you win coins and get into leaderboard.  Top 10 winners on leaderboard win prizes for both any LIVE and Pre Matches, however, all the Day wise test matches have 25 winners.</p>
							<p>Our Football game is divided into two sessions of 45 mins each. Please select 4 cards for each session when prediction window opens.</p>
							<p>Once your prediction comes true, you win coins and get into leaderboard. Once your prediction comes true, you win coins and get into leaderboard.  Top 10 winners on leaderboard win prizes for both any LIVE and Pre Matches.</p>
						</div>
					}
				/>
				<SectionContainer
					sectionName='Coupons & Prize Money Distribution'
					anchoredTag='prize-money-distribution'
					sectionContent={
						<div>
							<ul>
							<li>
							<p>All the prize money are sent within 3-4 days of a match’s end. You need to have a registered PayTM account and you are required to update your PayTM registered number on the app. Homepage &gt; Menu &gt; Edit Profile</p>
							<p>Prize money is divided among users finishing in the same position.<br />
							Example - If 3 people have stood first then prize money will be :<br />
							(250+200+150)/3 = 200 INR each.</p>
							<p>Users will need to verify their phone number by submitting a 6-digit OTP which they will receive on their registered phone number with Rooter.</p>
							</li>
							<li>
							<p>Rooter reserves the right to distribute coupons subjected to its availability or other unavoidable circumstances.</p>
							</li>
							</ul>
						</div>
					}
				/>
				<SectionContainer
					sectionName='Game Rules'
					sectionContent={
						<div>
							<ul>
							<li>If a player has not featured (Batsman batted, bowler bowled or a football player not on the pitch) in a particular round, all cards related to him/her will be void and card will be marked FALSE.</li>
							<li>If a player is not playing / starting in the match, we will not be changing or replacing the cards.</li>
							<li>In case of a “Most Card” a player has to score more runs, pick more wickets, take more catches than everyone else. If the figures are tied, card will be marked FALSE.</li>
							<li>In case of a “Comparison Card - A vs B”, even if one player has taken to the field and other hasn’t, card will be marked CORRECT.</li>
							<li>In case of a rain or any other delay in the match, cards will remain open till the match starts.</li>
							<li>Cards will only remain open till the countdown is running, users are requested to not only pick their cards but submit their cards as well. Once the countdown is OVER, we will not be opening the cards again.</li>
							<li>For a cricket round to be counted valid, at least 25% of the round must be played.Example - 2.3 overs of a T-20 match round, 6.1 overs of an ODI match round, 7.3 overs of a session wise Test Match round and 22.3 overs of a day wise Test Match round. In case of a rained-out or canceled round, we will refund all the coins within 4 days.</li>
							<li>Users cannot change their cards after submission.</li>
							<li>Strike rate for a batsman is counted at the end of a round or after he gets out. Strike rate for a batsman is calculated only for the number of deliveries faced in a particular round.</li>
							<li>If a player gets out during the LIVE or previous round, his cards will not be changed or replaced.</li>
							<li>Boundaries include both fours (4’s) and sixes (6’s).</li>
							<li>Caught and Bowled means, catch taken by the bowler of his own bowling.</li>
							<li>If a card reads between X and Y overs, X and Y will be included as well. Example - If card reads, catch taken between 11th to 15th over, then it means from 10.1 to 14.6 over mark.</li>
							<li>Leg-bye and bye will be counted as a dot ball for the bowler. Which also means that an over consisting of only a leg-bye will be considered as a maiden over.</li>
							</ul>
						</div>
					}
				/>
				<SectionContainer
					sectionName='Groups Rulebook'
					sectionContent={
						<div>
							<p>A group is similar to WhatsApp groups with added functionality like streaming match commentary and play prediction game along with friends. The group admin reserve the rights to add a LIVE match to a group for prediction based on the request of the group members. Once the match is added by the admin</p>
							<ul>
								<li>The other members have the right to accept or reject a match</li>
								<li>Minimum 5 team members are needed to accept a match in order to play the prediction game within the group</li>
								<li>A user can be a part of group prediction till the first slot for LIVE match prediction is open</li>
							</ul>
							<p>Percentage distribution of rooter coins:</p>
							<GroupTable />
							<p><strong>Note</strong>:</p>
							<ul>
								<li>In case of draw the coins will be distributed equally among the draw members e.g. If user A and B stand first then both will get (44+24)/2% and then the 3rd winner will get his/her own specified coins i.e. 14%.</li>
								<li>Rooter reserve the rights to take the coins back in case any fraud is detected.</li>
								<li>Rooter is not responsible for any illegal or financial transaction happening within the private group.</li>
							</ul>
						</div>
					}
				/>
			</div>
		);
	}
}

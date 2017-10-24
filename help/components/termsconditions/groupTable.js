import { h } from 'preact';

const GroupTable = () => (
	<div class='groupDistTable'>
		<table class='table is-bordered'>
			<thead>
				<tr>
					<th>Group Rank</th>
					<th>Distribution of coins</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>44.00%</td>
				</tr>
				<tr>
					<td>2</td>
					<td>24.00%</td>
				</tr>
				<tr>
					<td>3</td>
					<td>14.00%</td>
				</tr>
				<tr>
					<td>4</td>
					<td>9.00%</td>
				</tr>
				<tr>
					<td>5</td>
					<td>9.00%</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default GroupTable;

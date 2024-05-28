import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import * as moment from 'moment'
import mtaApi from '../../../../api/mtaApi';
import { numberWithCommas } from "../../../../api/utilities/helpers";


const BalanceSheet = () => {
	const thisstyle = { border: "none" };

	const [asset_accounts, setAssetsAccounts] = React.useState([]);
	const [totalAssets, setAssetTotal] = useState([]);

	const [liability_accounts, setLiabilityAccounts] = React.useState([]);
	const [totalLiability, setLiabilityTotal] = useState([]);

	const [equity_accounts, setEquityAccounts] = React.useState([]);
	const [totalEquity, setEquityTotal] = useState([]);

	const [profitLoss, setProfitLoss] = React.useState([]);
	const [shareHolderEquity, setShareHolderEquity] = useState([]);
	const [shareHolderFunds, setShareHolderFunds] = useState([]);

	const handleSubmit = (account_number) => {


		const this_end_date = new Date();
		let this_enddate = this_end_date.toLocaleString();
		const enddate = moment(this_enddate).format('DD-MM-YYYY')


		const startdate = moment().subtract(30, 'days').format('DD-MM-YYYY');
		// let this_startdate = this_start_date.toLocaleString();
		// const startdate = moment(this_startdate, 'DD-MM-YYYY')

		history.push({
			pathname: '/account-statement/',
			state: {
				account_number: account_number,
				start_date: startdate,
				end_date: enddate
			}
		});
	};

	const params = { 'status': '1' }

	useEffect(() => {

		const fetchActiveAssetAccounts = async () => {
			//   setLoading(true);
			// try {


			const { data } = await mtaApi.finance_reports.fetchAssetAccounts(params)
			if (data.status == 200) {
				setAssetsAccounts(data.response[0]);
				setAssetTotal(data.response[1]);

				// setLoading(false);
			}
			else {
				console.log(data.description)
				// setLoading(false);
			}
			// } catch (error) {
			//   window.location = "/login"
			// }
		};
		fetchActiveAssetAccounts();

		const fetchActiveLiabilitiesAccounts = async () => {
			// setLoading(true);
			// try {
			const { data } = await mtaApi.finance_reports.fetchLiabilitiesAccounts(params);
			if (data.status == 200) {
				setLiabilityAccounts(data.response[0]);
				setLiabilityTotal(data.response[1]);

				// setLoading(false);
			}
			else {
				console.log(data.description)
				// setLoading(false);
			}
		};

		fetchActiveLiabilitiesAccounts();

		const fetchActiveEquityAccounts = async () => {
			// setLoading(true);
			// try {
			const { data } = await mtaApi.finance_reports.fetchEquityAccounts(params);
			if (data.status == 200) {
				setEquityAccounts(data.response[0]);
				setEquityTotal(data.response[1]);

				//   setLoading(false);
			}
			else {
				console.log(data.description)
				//   setLoading(false);
			}
			// } catch (error) {
			//   window.location = "/login"
			// }
		};

		fetchActiveEquityAccounts();

		const fetchProfitLossBalance = async () => {
			// setLoading(true);
			// try {
			const { data } = await mtaApi.finance_reports.fetchIncomeStatementBalance(params);
			if (data.status == 200) {
				setProfitLoss(data.response);

				//   setLoading(false);
			}
			else {
				console.log(data.description)
				//   setLoading(false);
			}
			// } catch (error) {
			//   window.location = "/login"
			// }
		};

		fetchProfitLossBalance();

		const fetchActiveShareholderFundsBalance = async () => {
			//   setLoading(true);
			// try {
			const { data } = await mtaApi.finance_reports.fetchShareHolderFunds(params);
			if (data.status == 200) {
				setShareHolderFunds(data.response);

				// setLoading(false);
			}
			else {
				console.log(data.description)
				// setLoading(false);
			}
			// } catch (error) {
			//   window.location = "/login"
			// }
		};

		fetchActiveShareholderFundsBalance();

		const fetchActiveShareholderEquityBalance = async () => {
			//   setLoading(true);
			// try {
			const { data } = await mtaApi.finance_reports.fetchShareHolderEquity(params);
			if (data.status == 200) {
				setShareHolderEquity(data.response);

				// setLoading(false);
			}
			else {
				console.log(data.description)
				// setLoading(false);
			}
			// } catch (error) {
			//   window.location = "/login"
			// }
		};

		fetchActiveShareholderEquityBalance();
	}, []);

	return (
		<div>
			<PageHeader currentpage="Balance Sheet Statement" href="/reports/finance-reports" activepage="Finance Reports" mainpage="Finance Reports" />

			<div className="grid grid-cols-12 gap-12">


				<div className="col-span-12 xl:col-span-12">
					<div className="box">
						<div className="box-header">
							<h2 className="text-gray-800 text-center dark:text-white/70 my-3 font-semibold">Balance Sheet As of 12-12-2024</h2>
						</div>
						<div className="box-body">

							<table className="table borderless" style={thisstyle}>
								<thead>
									<tr>
										<th data-priority="1"><b>Account Number</b></th>
										<th><b>Account Name</b></th>
										<th className="text-right"><b>Account Balance</b></th>
									</tr>
								</thead>

								<tbody>
									<tr style={thisstyle}><td style={thisstyle}><b>ASSETS</b></td></tr>

									{asset_accounts.map((item) => (
										<tr className="gradeC" key={item.id}>
											<td style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}> <b>{item.accountnumber} </b></td>
											<td style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}>{item.accountname}</td>
											<td className="text-right" style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}> {numberWithCommas(item.balance)}</td>
										</tr>
									))}

									{totalAssets.map((item) => (
										<tr className="gradeC">
											<td style={thisstyle}><u><b>TOTAL ASSETS</b></u></td>
											<td style={thisstyle}></td>
											<td className="text-right" style={thisstyle}><u><b>{numberWithCommas(item.totalAssets)}</b></u></td>

										</tr>
									))}


									<tr style={thisstyle}><td style={thisstyle}><b>LIABILITIES</b></td></tr>

									{liability_accounts.map((item) => (
										<tr className="gradeC" key={item.id}>
											<td style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}>{item.accountnumber}</td>
											<td style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}>{item.accountname}</td>
											<td className="text-right" style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}>{numberWithCommas(item.balance)}</td>
										</tr>
									))}

									{totalLiability.map((item) => (
										<tr className="gradeC">
											<td style={thisstyle}><u><b>TOTAL LIABILITIES</b></u></td>
											<td style={thisstyle}></td>
											<td className="text-right" style={thisstyle}><u><b>{numberWithCommas(item.totalLiability)}</b></u></td>

										</tr>
									))}

									<tr style={thisstyle}><td style={thisstyle}><b>EQUITY</b></td></tr>
									{equity_accounts.map((item) => (
										<tr className="gradeC" key={item.id}>
											<td style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}>{item.accountnumber}</td>
											<td style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}>{item.accountname}</td>
											<td className="text-right" style={thisstyle} onClick={() => handleSubmit(item.accountnumber)}>{numberWithCommas(item.balance)}</td>
										</tr>
									))}

									<tr className="gradeC" >
										<td style={thisstyle}>Profit and Loss</td>
										<td style={thisstyle}></td>
										<td className="text-right" style={thisstyle}>{numberWithCommas(profitLoss.net_income)}</td>
									</tr>

									<tr className="gradeC">
										<td style={thisstyle}><u><b>TOTAL EQUITY</b></u></td>
										<td style={thisstyle}></td>
										<td className="text-right" style={thisstyle}><u><b>{numberWithCommas(shareHolderEquity)}</b></u></td>

									</tr>

									<tr className="gradeC">
										<td style={thisstyle}><u><b>SHARE HOLDER FUNDS</b></u></td>
										<td style={thisstyle}></td>
										<td className="text-right" style={thisstyle}><u><b>{numberWithCommas(shareHolderFunds)}</b></u></td>

									</tr>


								</tbody>
							</table>
						</div>
					</div>
				</div>


			</div>
		</div>
	);
};
export default BalanceSheet;

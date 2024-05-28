import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import * as moment from 'moment'
import mtaApi from '../../../../api/mtaApi';
import { numberWithCommas } from "../../../../api/utilities/helpers";


const IncomeStatement = () => {
	const thisstyle = { border: "none" };

	const [revenue_accounts, setRevenueAccounts] = React.useState([]);
	const [totalRevenue, setRevenueTotal] = useState([]);

	const [discount_accounts, setDiscountAccounts] = React.useState([]);
	const [totalDiscount, setDiscountTotal] = useState([]);

	const [netSales, setNetSales] = useState(0);

	const [cog_accounts, setCogAccounts] = React.useState([]);
	const [totalCog, setCogTotal] = useState([]);

	const [gross_margin, setGrossMargin] = useState(0);

	const [expenses_accounts, setExpensesAccounts] = React.useState([]);
    const [totalExpenses, setExpensesTotal] = useState([]); 

	const [operating_income, setOperatingIncome] = useState(0);

	const [otherincome_accounts, setOtherIncomeAccounts] = React.useState([]);
    const [totalOtherIncome, setOtherIncomeTotal] = useState([]);

	const [otherexpense_accounts, setOtherExpenseAccounts] = React.useState([]);
    const [totalOtherExpense, setOtherExpenseTotal] = useState([]);
	
	const [net_income, setNetIncome] = useState(0);


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

		const fetchActiveRevenueAccounts = async () => {
			// setLoading(true);
			try {

				const { data } = await mtaApi.finance_reports.fetchRevenueAccounts(params)
				if (data.status == 200) {
					setRevenueAccounts(data.response[0]);
					setRevenueTotal(data.response[1][0]['totalrevenue']);

					//   setLoading(false);
				}
				else {
					console.log(data.description)
					//   setLoading(false);
				}
			} catch (error) {
				window.location = "/login"
			}
		};

		fetchActiveRevenueAccounts();

		const getDiscountAccounts = async () => {
			// setLoading(true);
			try {

				const { data } = await mtaApi.finance_reports.fetchDiscountAccounts(params)
				if (data.status == 200) {
					setDiscountAccounts(data.response[0]);
					setDiscountTotal(data.response[1][0]['totaldiscount']);

					//   setLoading(false);
				}
				else {
					console.log(data.description)
					//   setLoading(false);
				}
			} catch (error) {
				window.location = "/login"
			}
		};

		getDiscountAccounts();

		const fetchActiveCogAccounts = async () => {
			// setLoading(true);
			try {
			const { data } = await mtaApi.finance_reports.fetchCogAccounts(params);
			if (data.status == 200){
			  setCogAccounts(data.response[0]);
			  setCogTotal(data.response[1][0]['totalcog']);
		   
			//   setLoading(false);
			}
			else{
			  console.log(data.description)
			//   setLoading(false);
			}
		  } catch (error) {
			window.location = "/login"
		  }
		  };

		  fetchActiveCogAccounts();

		  const fetchActiveExpensesAccounts = async () => {
			// setLoading(true);
			try {
			const { data } = await mtaApi.finance_reports.fetchExpensesAccounts(params);
			if (data.status == 200){
			  setExpensesAccounts(data.response[0]);
			  setExpensesTotal(data.response[1][0]['totalexpense']);
			
			//   setLoading(false);
			}
			else{
			  console.log(data.description)
			//   setLoading(false);
			}
		  } catch (error) {
			window.location = "/login"
		  }
		  };
			  
		  fetchActiveExpensesAccounts();

		  const fetchActiveOtherIncomeAccounts = async () => {
			// setLoading(true);
			try {
			const { data } = await mtaApi.finance_reports.fetchOtherIncomeAccounts(params);
			if (data.status == 200){
			  setOtherIncomeAccounts(data.response[0]);
			  setOtherIncomeTotal(data.response[1][0]['totalotherincome']);
		   
			//   setLoading(false);
			}
			else{
			  console.log(data.description)
			//   setLoading(false);
			}
		  } catch (error) {
			window.location = "/login"
		  }
		  };
	  
		  fetchActiveOtherIncomeAccounts();

		  const fetchActiveOtherExpenseAccounts = async () => {
			// setLoading(true);
			try {
			const { data } = await mtaApi.finance_reports.fetchOtherExpenseAccounts(params);
			if (data.status == 200){
			  setOtherExpenseAccounts(data.response[0]);
			  setOtherExpenseTotal(data.response[1][0]['totalotherexpense']);
		   
			//   setLoading(false);
			}
			else{
			  console.log(data.description)
			//   setLoading(false);
			}
		  } catch (error) {
			window.location = "/login"
		  }
		  };
	  
		  fetchActiveOtherExpenseAccounts();

		
		

	}, []);

	useEffect(() => {
        // Calculate net sales whenever totalRevenue or totalDiscount changes
        const calculatedNetSales = totalRevenue - totalDiscount;
        setNetSales(calculatedNetSales);

		const calculatedGrossMargin = (calculatedNetSales - totalCog)
		setGrossMargin(calculatedGrossMargin);

		const calculatedOperatingIncome = (gross_margin - totalExpenses) 
		setOperatingIncome(calculatedOperatingIncome);

		const calculatedNetIncome = (operating_income + (totalOtherIncome - totalOtherExpense))
		setNetIncome(calculatedNetIncome);

    }, [totalRevenue, totalDiscount, totalDiscount, totalCog, gross_margin, totalExpenses, operating_income, totalOtherIncome, totalOtherExpense]);

	return (
		<div>
			<PageHeader currentpage="Profit and Loss / Income Statement" href="/reports/finance-reports" activepage="Finance Reports" mainpage="Finance Reports" />

			<div className="grid grid-cols-12 gap-12">


				<div className="col-span-12 xl:col-span-12">
					<div className="box">
						<div className="box-header">
							<h2 className="text-gray-800 text-center dark:text-white/70 my-3 font-semibold">Income Statement For The Year Ending 12-12-2024</h2>
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
									<tr style={thisstyle}><td style={thisstyle}><b>REVENUE</b></td></tr>

									{revenue_accounts.map((item) => (
										<tr className="gradeC" key={item.accountid}>
											<td style={thisstyle}>{item.accountnumber}</td>
											<td style={thisstyle}>{item.accountname}</td>
											<td className="text-right" style={thisstyle}>{numberWithCommas(item.balance)}</td>
										</tr>
									))}

									<tr className="gradeC">
										<td style={thisstyle}><u><b>TOTAL REVENUE</b></u></td>
										<td style={thisstyle}></td>
										<td className="text-right" style={thisstyle}><u><b>{numberWithCommas(totalRevenue)}</b></u></td>

									</tr>

									<tr style={thisstyle}><td style={thisstyle}><b>DISCOUNT GIVEN</b></td></tr>

									{discount_accounts.map((item) => (
										<tr className="gradeC" key={item.accountid}>
											<td style={thisstyle}>{item.accountnumber}</td>
											<td style={thisstyle}>{item.accountname}</td>
											<td className="text-right" style={thisstyle}>{numberWithCommas(item.balance)}</td>
										</tr>
									))}

									<tr className="gradeC">
										<td style={thisstyle}><u><b>TOTAL DISCOUNTS GIVEN</b></u></td>
										<td style={thisstyle}></td>
										<td className="text-right" style={thisstyle}><u><b>{numberWithCommas(totalDiscount)}</b></u></td>

									</tr>

									<tr className="gradeC">
                                        <td style={thisstyle}><u><b>NET SALES</b></u></td>
                                        <td style={thisstyle}></td>
                                        <td className="text-right" style={thisstyle}><u><b>{numberWithCommas(netSales)}</b></u></td>
                                    </tr>

									<tr style={thisstyle}><td style={thisstyle}><b>COST OF GOODS SOLD</b></td></tr>

                            {cog_accounts.map((item) => (                    
                            <tr className="gradeC" key={item.accountid}>
                                <td style={thisstyle}>{item.accountnumber}</td>
                                <td style={thisstyle}>{item.accountname}</td>
                                <td className ="text-right" style={thisstyle}>{numberWithCommas(item.balance)}</td>
                            </tr>
                            ))}

                                        
                              <tr className="gradeC">
                                  <td style={thisstyle}><u><b>TOTAL COST OF GOODS SOLD</b></u></td> 
                                  <td style={thisstyle}></td>
                                  <td className ="text-right" style={thisstyle}><u><b>{numberWithCommas(totalCog)}</b></u></td>

                              </tr>

							  <tr className="gradeC">
                                  <td style={thisstyle}><u>GROSS MARGIN</u></td> 
                                  <td style={thisstyle}></td>
                                  <td className ="text-right" style={thisstyle}><u>{numberWithCommas(gross_margin)}</u></td>

                              </tr>

							  <tr style={thisstyle}><td style={thisstyle}><b>OPERATING EXPENSES</b></td></tr>
                            {expenses_accounts.map((item) => (                    
                            <tr className="gradeC" key={item.accountid}>
                                <td style={thisstyle}>{item.accountnumber}</td>
                                <td style={thisstyle}>{item.accountname}</td>
                                <td className ="text-right" style={thisstyle}>{numberWithCommas(item.balance)}</td>
                            </tr> 
                 ))} 

<tr className="gradeC">
                                  <td style={thisstyle}><u><b>TOTAL OPERATING EXPENSES</b></u></td> 
                                  <td style={thisstyle}></td>
                                  <td className ="text-right" style={thisstyle}><u><b>{numberWithCommas(totalExpenses)}</b></u></td>

                              </tr>
                              <tr className="gradeC">
                                  <td style={thisstyle}><u>OPERATING INCOME</u></td> 
                                  <td style={thisstyle}></td>
                                  <td className ="text-right" style={thisstyle}><u>{numberWithCommas(operating_income)}</u></td>

                              </tr> 

							  <tr style={thisstyle}><td style={thisstyle}><b>OTHER INCOME</b></td></tr>
                            {otherincome_accounts.map((item) => (                    
                            <tr className="gradeC" key={item.accountid}>
                                <td style={thisstyle}>{item.accountnumber}</td>
                                <td style={thisstyle}>{item.accountname}</td>
                                <td className ="text-right" style={thisstyle}>{numberWithCommas(item.balance)}</td>
                            </tr>
                            ))}
							<tr className="gradeC">
                                  <td style={thisstyle}><u><b>TOTAL OTHER INCOME</b></u></td> 
                                  <td style={thisstyle}></td>
                                  <td className ="text-right" style={thisstyle}><u><b>{numberWithCommas(totalOtherIncome)}</b></u></td>

                              </tr>

							  <tr style={thisstyle}><td style={thisstyle}><b>OTHER EXPENSES</b></td></tr>
                              {otherexpense_accounts.map((item) => (                    
                              <tr className="gradeC" key={item.accountid}>
                                  <td style={thisstyle}>{item.accountnumber}</td>
                                  <td style={thisstyle}>{item.accountname}</td>
                                  <td className ="text-right" style={thisstyle}>{numberWithCommas(item.balance)}</td>
                              </tr>
                              ))}

                                <tr className="gradeC">
                                    <td style={thisstyle}><u><b>TOTAL OTHER EXPENSES</b></u></td> 
                                    <td style={thisstyle}></td>
                                    <td className ="text-right" style={thisstyle}><u><b>{numberWithCommas(totalOtherExpense)}</b></u></td>

                                </tr> 

								 <tr className="gradeC">
                                  <td style={thisstyle}><u><b>NET INCOME</b></u></td>
                                  <td style={thisstyle}></td>
                                  <td className ="text-right" style={thisstyle}><u><b>{numberWithCommas(net_income)}</b></u></td>

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
export default IncomeStatement;

import React, { useState, useEffect } from 'react';
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import mtaApi from '../../../../api/mtaApi';
import Alert from '../../../../components/Alert';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, format } from 'date-fns';

const Create_capital_injection = () => {
    const { register, handleSubmit, formState: { errors, isValid }, setValue } = useForm();
    const [alert, setAlert] = useState(null);
    const [shareholder_accounts, setShareholderAccounts] = useState([]);
    const [bank_accounts, setBankAccounts] = useState([]);
    const [valueDate, setValueDate] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchShareholderAccounts = async () => {
            const params = {'type':'16', 'status':'1'}
            await mtaApi.accounts.list_account_by_type(params)
                .then(data => {
                    if(data.status === 200){
                        setShareholderAccounts(data.data.response)
                    }
                }).catch(error => {
                    const message = error.response?.data?.error ?? error.message;
                    setAlert({ type: "error", message });
                });
        };
        fetchShareholderAccounts();

        const fetchBankAccounts = async () => {
            const params = {'type':'1', 'status':'1'}
            await mtaApi.accounts.list_account_by_type(params)
                .then(data => {
                    if(data.status === 200){
                        setBankAccounts(data.data.response)
                    }
                }).catch(error => {
                    const message = error.response?.data?.error ?? error.message;
                    setAlert({ type: "error", message });
                });
        };
        fetchBankAccounts();
    }, []);

    const onSubmit = async (values) => {
        try {
            const { data } = await mtaApi.capital_injection.create_capital_injection(values);
            if (data.status === 200) {
                navigate("/finance/new-unapproved-capital-injection");
            } else {
                const message = data.description;
                setAlert({ type: "error", message });
            }
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    };

    const formatAmount = (value) => {
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };
    
    const handleAmountChange = (event) => {
        const inputValue = event.target.value.replace(/,/g, '');
        const formattedValue = formatAmount(inputValue);
        setValue("amount", formattedValue);
    };

    const handleDateChange = (date) => {
        const formattedDate = format(date, "yyyy-MM-dd HH:mm");
        setValueDate(date);
        setValue('value_date', formattedDate);
    };

    return (
        <div>
            <PageHeader currentpage="Create Capital Injection" href="/finance/accouting/" activepage="Accounting" mainpage="Create Capital Injection Entry" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title text-center">Transaction Details</h5>
                        </div>
                        <div className="box-body">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Bank Account Number</label>
                                    <select type="text" {...register("bank_account_number", { required: true })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        {bank_accounts.map((mode, index) => (
                                            <option key={index} value={mode.account_number}>{mode.account_name}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Shareholder Account Number</label>
                                    <select type="text" {...register("shareholder_account_number", { required: true })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        {shareholder_accounts.map((mode, index) => (
                                            <option key={index} value={mode.account_number}>{mode.account_name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Amount</label>
                                    <input type="text" {...register("amount")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter amount" onChange={handleAmountChange}/>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Transaction ID</label>
                                    <input type="text" {...register("transaction_id")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter transaction ID" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Reference</label>
                                    <input type="text" {...register("reference")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter reference" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Value Date</label>
                                    <DatePicker
                                        selected={valueDate}
                                        onChange={handleDateChange}
                                        maxDate={addDays(new Date(), 0)}
                                        showTimeSelect
                                        dateFormat="yyyy-MM-dd HH:mm"
                                        className="form-control"
                                        placeholderText="Select Value Date"
                                    />
                                </div>
                               
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Narrative</label>
                                    <input type="text" {...register("narrative")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter narrative" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-12">
                                <div className="box !bg-transparent border-0 shadow-none">
                                    <div className="box-footer text-center border-t-0 px-0">
                                        <button type="submit" onClick={handleSubmit(onSubmit)} className={`ti-btn ti-btn-primary ti-custom-validate-btn ${!isValid && 'opacity-50 cursor-not-allowed'}`} disabled={!isValid}>Submit Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {alert && <Alert alert={alert} />}
                </div>
            </div>
        </div>
    );
}

export default Create_capital_injection;
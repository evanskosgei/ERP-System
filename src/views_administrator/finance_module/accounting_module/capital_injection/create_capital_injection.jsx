import React, { useState, useEffect } from 'react';
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import mtaApi from '../../../../api/mtaApi';
import Alert from '../../../../components/Alert';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, format } from 'date-fns';

const CreateCapitalInjection = () => {
    const { register, handleSubmit, formState: { errors, isValid }, setValue } = useForm();
    const [alert, setAlert] = useState(null);
    const [shareholderAccounts, setShareholderAccounts] = useState([]);
    const [bankAccounts, setBankAccounts] = useState([]);
    const [valueDate, setValueDate] = useState(null);
    const [amount, setAmount] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchShareholderAccounts = async () => {
            const params = { 'type': '16', 'status': '1' };
            try {
                const { data } = await mtaApi.accounts.list_account_by_type(params);
                if (data.status === 200) {
                    setShareholderAccounts(data.response);
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        };
        fetchShareholderAccounts();

        const fetchBankAccounts = async () => {
            const params = { 'type': '1', 'status': '1' };
            try {
                const { data } = await mtaApi.accounts.list_account_by_type(params);
                if (data.status === 200) {
                    setBankAccounts(data.response);
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
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
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const handleAmountChange = (event) => {
        const inputValue = event.target.value.replace(/,/g, '');
        const formattedValue = formatAmount(inputValue);
        setAmount(formattedValue);
        setValue("amount", formattedValue);
    };

    const handleDateChange = (date) => {
        const formattedDate = format(date, "yyyy-MM-dd HH:mm");
        setValueDate(date);
        setValue('value_date', formattedDate);
    };

    return (
        <div>
            <PageHeader currentpage="Create Capital Injection" href="/finance/accounting/" activepage="Accounting" mainpage="Create Capital Injection Entry" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title text-center">Transaction Details</h5>
                        </div>
                        <div className="box-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Bank Account Number</label>
                                        <select {...register("bank_account_number", { required: true })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            {bankAccounts.map((mode, index) => (
                                                <option key={index} value={mode.account_number}>{mode.account_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Shareholder Account Number</label>
                                        <select {...register("shareholder_account_number", { required: true })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            {shareholderAccounts.map((mode, index) => (
                                                <option key={index} value={mode.account_number}>{mode.account_name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Amount</label>
                                        <input type="text" {...register("amount", { required: true })} value={amount} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter amount" onChange={handleAmountChange}/>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Transaction ID</label>
                                        <input type="text" {...register("transaction_id", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter transaction ID" />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Reference</label>
                                        <input type="text" {...register("reference", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter reference" />
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
                                        <input type="text" {...register("narrative", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter narrative" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-x-6 mt-6">
                                    <div className="col-span-12">
                                        <div className="box !bg-transparent border-0 shadow-none">
                                            <div className="box-footer text-center border-t-0 px-0">
                                                <button type="submit" className={`ti-btn ti-btn-primary ti-custom-validate-btn ${!isValid && 'opacity-50 cursor-not-allowed'}`} disabled={!isValid}>
                                                    Submit Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {alert && <Alert alert={alert} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCapitalInjection;

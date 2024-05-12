import React, { useState, useEffect } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import mtaApi from '../../../api/mtaApi';
import Alert from '../../../components/Alert';
import { useNavigate } from 'react-router-dom';

const Create_capital_injection = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const { data } = await mtaApi.finance_module.create_finance_injection(values)
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

    return (
        <div>
            <PageHeader currentpage="Create New Finance Injection" href="/finance/expenses/" activepage="Dashboard" mainpage="Add new Finance Injection" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title text-center">Injected Capital Details</h5>
                        </div>
                        <div className="box-body">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Bank Account Number</label>
                                    <input type="text" {...register("bank_account_number", { required: true })} className="my-auto ti-form-input" placeholder="Enter bank account number" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Shareholder Account Number</label>
                                    <input type="number" {...register("shareholder_account_number")} className="my-auto ti-form-input" placeholder="Enter shareholder account number" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Amount</label>
                                    <input type="number" {...register("amount")} className="my-auto ti-form-input" placeholder="Enter amount" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Transaction ID</label>
                                    <input type="text" {...register("transaction_id")} className="my-auto ti-form-input" placeholder="Enter transaction ID" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Reference</label>
                                    <input type="text" {...register("reference")} className="my-auto ti-form-input" placeholder="Enter reference" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Value Date</label>
                                    <input type="datetime-local" {...register("value_date")} 
                                    className="my-auto ti-form-input" placeholder="Enter value date" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Narrative</label>
                                    <input type="text" {...register("narrative")} className="my-auto ti-form-input" placeholder="Enter narrative" />
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
    )
}

export default Create_capital_injection;

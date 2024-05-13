import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/Alert';
import mtaApi from '../../../api/mtaApi';

const Create_accounts = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState([]);
    const [accountCategory, setAccountCategory] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            await mtaApi.Accounts_model.list_account_categories('1')
                .then(data => {
                    if(data.status === 200){
                    setAccountCategory(data.data.response)
                    }
                }).catch(error => {
                    const message = error.response?.data?.error ?? error.message;
                    setAlert({ type: "error", message });
                })
                await mtaApi.Accounts_model.list_account_types("1")
                .then(data =>{
                    if(data.status === 200){
                    setAccountType(data.data.response)
                    }
                }).catch(error =>{
                    const message = error.response?.data?.error ?? error.message;
                    setAlert({ type: "error", message });
                })
        }
        getDetails();
    }, [])

    const onSubmit = async (values) => {
        try {
            const { data } = await mtaApi.Accounts_model.create_account(values)
            if (data.status === 200) {
                navigate("/finance/unapproved-accounts");
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
            <PageHeader currentpage="Create New Account" href="/finance/accouting/" activepage="Dashboard" mainpage="Add new Account" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title text-center">Business Account Details</h5>
                        </div>
                        <div className="box-body">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Account Name</label>
                                    <input type="text" {...register("name", { required: true })} className="my-auto ti-form-input" placeholder="Enter name" />
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Account Type</label>
                                    <select type="number" {...register("accountType", { required: true })} className="my-auto ti-form-input" >
                                        <option value="" >...Select account type</option>
                                        {accountType.map((type, index) => (
                                            <option key={index} value={type.account_id}>{type.name}</option>
                                        ))}
                                        
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Account Category</label>
                                    <select type="number" {...register("accountCategory", { required: true })} className="my-auto ti-form-input">
                                        <option value="">...Select Account category</option>
                                        {accountCategory.map((cat, index) => (
                                            <option key={index} value={cat.category_id}>{cat.name}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Account Subcategory</label>
                                    <input type="number" {...register("accountSubCategory")} className="my-auto ti-form-input" placeholder="Enter account subcategory" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Main Account</label>
                                    <input type="number" {...register("main_account")} className="my-auto ti-form-input" placeholder="Enter main account" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Opening Balance</label>
                                    <input type="number" {...register("opening_balance")} className="my-auto ti-form-input" placeholder="Enter opening balance" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Owner ID</label>
                                    <input type="number" {...register("owner_id")} className="my-auto ti-form-input" placeholder="Enter owner ID" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Entity ID</label>
                                    <input type="number" {...register("entity_id")} className="my-auto ti-form-input" placeholder="Enter entity ID" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Notes</label>
                                    <input type="text" {...register("notes")} className="my-auto ti-form-input" placeholder="Enter notes" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Description</label>
                                    <input type="text" {...register("description")} className="my-auto ti-form-input" placeholder="Enter description" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Reference Number</label>
                                    <input type="number" {...register("reference_number")} className="my-auto ti-form-input" placeholder="Enter reference number" />
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

export default Create_accounts;

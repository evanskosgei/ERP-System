import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Alert from "../../../../components/Alert";
import mtaApi from "../../../../api/mtaApi";

const Create_accounts = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState([]);
  const [accountCategory, setAccountCategory] = useState([]);
  const [accountTypeId, setAccountTypeId] = React.useState(0); 
  const [allowedAccountCategories, setAllowedAccountCategories] = React.useState([]);

  useEffect(() => {
    const getDetails = async () => {
        await mtaApi.accounts.list_account_categories('1')
            .then(data => {
                if(data.status === 200){
                setAccountCategory(data.data.response)
                }
            }).catch(error => {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            })
            await mtaApi.accounts.list_account_types("1")
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
        const { data } = await mtaApi.accounts.create_account(values)
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
                                    <input type="text" {...register("name", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter name" />
                                </div>

                <div className="space-y-2">
                  <label className="ti-form-label mb-0">Account Type</label>
                  <select
                    {...register("accountType", { required: true })}
                    className="custom-select my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={accountTypeId}
                    onChange={(e) => {
                      const selectedTypeId = e.currentTarget.value;
                      setAccountTypeId(selectedTypeId);
                      setAllowedAccountCategories(
                        accountCategory.filter(
                          (cat) => cat.type_id === parseInt(selectedTypeId)
                        )
                      );
                    }}
                  >
                    <option value="">Select Account Type</option>
                    {accountType.map((accounttype) => (
                      <option key={accounttype.account_id} value={accounttype.account_id}>
                        {accounttype.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="ti-form-label mb-0">Account Category</label>
                  <select
                    {...register("accountCategory", { required: true })}
                    className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">...Select Account category</option>
                    {allowedAccountCategories.map((cat, index) => (
                      <option key={index} value={cat.category_id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Account Subcategory</label>
                                    <input type="number" {...register("accountSubCategory")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter account subcategory" />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Opening Balance</label>
                                    <input type="number" {...register("opening_balance")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter opening balance" />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Notes</label>
                                    <input type="text" {...register("notes")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter notes" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Description</label>
                                    <input type="text" {...register("description")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter description" />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Reference Number</label>
                                    <input type="number" {...register("reference_number")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter reference number" />
                                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12">
                <div className="box !bg-transparent border-0 shadow-none">
                  <div className="box-footer text-center border-t-0 px-0">
                    <button
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                      className={`ti-btn ti-btn-primary ti-custom-validate-btn ${!isValid && 'opacity-50 cursor-not-allowed'}`}
                      disabled={!isValid}
                    >
                      Submit Details
                    </button>
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
};

export default Create_accounts;

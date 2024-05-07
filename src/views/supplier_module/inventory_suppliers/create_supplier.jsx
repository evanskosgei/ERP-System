import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import mtaApi from '../../../api/mtaApi';
import { useNavigate } from 'react-router-dom';
import Alert from '../../../component/components/alerts/alerts';
import Select from 'react-select';
import { Availability, Brand, Category, Color, Gender, ProductStatus, ProductVisibility, Size } from "../../../common/select2data";

const CreateSupplier = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async values => {
        try {
            const { data } = await mtaApi.suppliers.createSupplier(values);
            document.getElementById('loader').style.display = 'block';
            navigate("/supplier/approve-suppliers")
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        } finally {
            document.getElementById('loader').style.display = 'none';
        }
    };

    return (
        <div>
            <PageHeader currentpage="Create New Supplier" href="/supplier/dashboard/" activepage="Dashboard" mainpage="Add new supplier" />
            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title text-center">Supplier Business Details</h5>
                        </div>
                        <div className="box-body">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Business Name</label>
                                    <input type="text" {...register("business_name", { required: true })} id='business_name' className="my-auto ti-form-input" placeholder=" ... Enter business name" />
                                    {errors.business_name && <span className="text-red-500 text-xs">Business Name is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Trading Name</label>
                                    <input type="text" {...register("trading_name", { required: true })} id='trading_name' className="my-auto ti-form-input" placeholder=" ... Enter trade name" required />
                                    {errors.trading_name && <span className="text-red-500 text-xs">Trade Name is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Mobile Number</label>
                                    <input type="text" {...register("company_mobile_number", { required: true })} id='company_mobile_number' className="my-auto ti-form-input" placeholder=" ... Enter mobile number" required />
                                    {/* {errors.company_mobile_number && <span className="text-red-500 text-xs">Trade Name is required</span>} */}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Alternative Mobile Number</label>
                                    <input type="text" {...register("company_alternative_mobile_number", { required: true })} id='company_alternative_mobile_number' className="my-auto ti-form-input" placeholder=" ... Enter alternative mobile number" required />
                                    {/* {errors.company_alternative_mobile_number && <span className="text-red-500 text-xs">Trade Name is required</span>} */}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Business Address</label>
                                    <input type="text" {...register("address", { required: true })} id='address' className="my-auto ti-form-input" placeholder=" ... sample, P O Box 00000" required />
                                    {errors.address && <span className="text-red-500 text-xs">Address Number is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Postal code</label>
                                    <input type="number" {...register("postal_code", { required: true })} id='postal_code' className="my-auto ti-form-input" placeholder="00100" required />
                                    {errors.postal_code && <span className="text-red-500 text-xs">Postal Code is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Country</label>
                                    <input type="text" {...register("country")} id='country' className="my-auto ti-form-input" placeholder="Kenya" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">City</label>
                                    <input type="text" {...register("city")} id='city' className="my-auto ti-form-input" placeholder="Enter city or town name" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Business Registration Number</label>
                                    <input type="text" {...register("registration_number", { required: true })} id='registration_number' className="ti-form-input" placeholder=" ... Enter business registration number" required />
                                    {/* {errors.registration_number && <span className="text-red-500 text-xs">Business Number is required</span>} */}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Tax ID</label>
                                    <input type="text" {...register("tax_id", { required: true })} id='tax_id' className="ti-form-input" placeholder=" ... Enter supplier tax ID or Vat number" required />
                                    {/* {errors.tax_id && <span className="text-red-500 text-xs">Business Number is required</span>} */}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Company Email</label>
                                    <input type="email" {...register("company_email", { required: true })} id='company_email' className="ti-form-input" placeholder=" ... sample, info@example.com" required />
                                    {/* {errors.company_email && <span className="text-red-500 text-xs">Company Email is required</span>} */}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Company Website</label>
                                    <input type="text" {...register("company_website", { required: true })} id='company_website' className="ti-form-input" placeholder=" ... sample, example.com" required />
                                    {/* {errors.company_website && <span className="text-red-500 text-xs">Company Website is required</span>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title  text-center">Contact Person Details</h5>
                        </div>
                        <div className="box-body">

                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">First Name</label>
                                    <input type="text" {...register("first_name", { required: true })} id='first_name' className="ti-form-input" placeholder=" ... first name" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Other Names</label>
                                    <input type="text" {...register("other_names", { required: true })} id='other_names' className="ti-form-input" placeholder=" ... other names" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Mobile Number</label>
                                    <input type="text" {...register("contact_mobile_number", { required: true })} id='contact_mobile_number' className="ti-form-input" placeholder=" ... Enter supplier tax ID or Vat number" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Email Address</label>
                                    <input type="email" {...register("contact_email_address", { required: true })} id='contact_email_address' className="ti-form-input" placeholder=" ... Enter supplier tax ID or Vat number" required />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12">
                    <div className="box !bg-transparent border-0 shadow-none">
                        <div className="box-footer text-center border-t-0 px-0">
                            {/* <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`} className="ti-btn ti-btn-primary"><i className="ri-add-line"></i>Add Product</Link>
							<Link to='#' className="ti-btn ti-btn-secondary"><i className="ri-file-download-line"></i>Save Product</Link>
							<Link to='#' className="ti-btn ti-btn-danger"><i className="ri-delete-bin-line"></i>Discard Product</Link> */}
                            <button type="submit" onClick={handleSubmit(onSubmit)} className={`ti-btn ti-btn-primary ti-custom-validate-btn ${!isValid && 'opacity-50 cursor-not-allowed'}`} disabled={!isValid}>Submit Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="loader" style={{ display: 'none' }}>
                <span className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </span>
            </div>

            {/* {alert && <Alert alert={alert} />} */}
        </div >
    );
}

export default CreateSupplier;

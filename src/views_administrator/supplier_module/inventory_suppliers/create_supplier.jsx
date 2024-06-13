import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import mtaApi from '../../../api/mtaApi';
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/Alert';

const CreateSupplier = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [contactPersons, setContactPersons] = useState([{ id: 1 }]);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const formattedData = {
            business_name: data.business_name,
            trading_name: data.trading_name,
            company_mobile_number: data.company_mobile_number,
            company_alternative_mobile_number: data.company_alternative_mobile_number,
            address: data.address,
            postal_code: data.postal_code,
            country: data.country,
            city: data.city,
            registration_number: data.registration_number,
            tax_id: data.tax_id,
            company_email: data.company_email,
            company_website: data.company_website,
            contact_persons: contactPersons.map((person, index) => ({
                title: person.title || data[`title_${index}`],
                first_name: person.first_name || data[`first_name_${index}`],
                last_name: person.last_name || data[`last_name_${index}`],
                mobile_number: person.mobile_number || data[`mobile_number_${index}`],
                alternative_mobile_number: person.alternative_mobile_number || data[`alternative_mobile_number_${index}`],
                email: person.email || data[`email_${index}`],
            }))
        };
        try {
            const { data } = await mtaApi.suppliers.create_supplier(formattedData);
            document.getElementById('loader').style.display = 'block';
            navigate("/supplier/approve-suppliers");
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        } finally {
            document.getElementById('loader').style.display = 'none';
        }
    };

    const addContactPerson = () => {
        setContactPersons([...contactPersons, { id: contactPersons.length + 1 }]);
    };
    const removeContactPerson = (id) => {
        setContactPersons(contactPersons.filter(person => person.id !== id));
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
                                    <label className="ti-form-label mb-0">Company Mobile Number</label>
                                    <input type="text" {...register("company_mobile_number", { required: true })} id='company_mobile_number' className="my-auto ti-form-input" placeholder=" ... Enter mobile number" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Company Alternative Mobile Number</label>
                                    <input type="text" {...register("company_alternative_mobile_number", { required: true })} id='company_alternative_mobile_number' className="my-auto ti-form-input" placeholder=" ... Enter alternative mobile number" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Business Address</label>
                                    <input type="text" {...register("address", { required: true })} id='address' className="my-auto ti-form-input" placeholder=" ... sample, P O Box 00000" required />
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
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Tax ID</label>
                                    <input type="text" {...register("tax_id", { required: true })} id='tax_id' className="ti-form-input" placeholder=" ... Enter supplier tax ID or Vat number" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Company Email</label>
                                    <input type="email" {...register("company_email", { required: true })} id='company_email' className="ti-form-input" placeholder=" ... sample, info@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Company Website</label>
                                    <input type="text" {...register("company_website", { required: true })} id='company_website' className="ti-form-input" placeholder=" ... sample, example.com" required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {contactPersons.map((person, index) => (
                    <div className="col-span-12">
                        <div className="box">
                            <div className="box-header flex justify-between items-center">
                                <h5 className="box-title text-center">Contact Person Details</h5>
                                <button 
                                onClick={() => removeContactPerson(person.id)} 
                                className="... text-indigo-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                </button>

                            </div>
                            <div className="box-body">
                                <div key={person.id} className="grid lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Title</label>
                                        <input type="text"{...register(`title_${index}`, { required: true })} className="ti-form-input" placeholder=" ... Title" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">First Name</label>
                                        <input type="text" {...register(`first_name_${index}`, { required: true })} className="ti-form-input" placeholder=" ... first name" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Last Names</label>
                                        <input type="text"{...register(`last_name_${index}`, { required: true })} className="ti-form-input" placeholder=" ... last names" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Mobile Number</label>
                                        <input type="number"{...register(`mobile_number_${index}`, { required: true })} className="ti-form-input" placeholder=" ... Enter supplier mobile number" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Alternative Mobile Number</label>
                                        <input type="number"{...register(`alternative_mobile_number_${index}`, { required: true })} className="ti-form-input" placeholder=" ... Enter supplier alt. mobile number" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="ti-form-label mb-0">Email Address</label>
                                        <input type="email" {...register(`email_${index}`, { required: true })} className="ti-form-input" placeholder=" ... Enter supplier email address" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={addContactPerson} className="... text-indigo-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>

            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12">
                    <div className="box !bg-transparent border-0 shadow-none">
                        <div className="box-footer text-center border-t-0 px-0">
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

            {alert && <Alert alert={alert} />}
        </div >
    );
}

export default CreateSupplier;

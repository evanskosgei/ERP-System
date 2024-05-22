import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import mtaApi from '../../../api/mtaApi';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState, reset } = useForm();
    const [category, setCategory] = useState([])
    const [distribution_centers, setDistributionCenters] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getCategories = async () => {
            await mtaApi.users.list_categories("1")
                .then(response => {
                    setCategory(response.data.response)
                }).catch(error => {
                    console.log(error)
                })
        }
        getCategories();

        const getDistributionCenters = async () => {
            await mtaApi.distributions.list_distribution("1")
                .then(response => {
                    setDistributionCenters(response.data.response)
                }).catch(error => {
                    console.log(error)
                })
        }
        getDistributionCenters();
        
    }, [])

    const onSubmit = async values => {
        try {
            const {data} = await mtaApi.users.create_user(values)
            if(data.status === 200){
                navigate("/users/new-user")
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <PageHeader currentpage="Add a New User" href="/users/dashboard" activepage="Users" mainpage="Create a New User" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title  text-center">User Details</h5>
                        </div>
                        <div className="box-body">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">First Name</label>
                                    <input type="text" {...register("first_name", { required: true })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... first name" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Middle Name</label>
                                    <input type="text" {...register("middle_name", { required: false })}className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... middle name" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Last Name</label>
                                    <input type="text" {...register("last_name", { required: true })} id='last_name' className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... last name" required />
                                </div>
                                <div className="space-y-2">
                                <label className="ti-form-label mb-0">Username</label>
                                <input type="text" {...register("username", { required: false })}className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter username" />
                            </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="user_categories" className="ti-form-label mb-0">User type</label>
                                    <select className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("user_categories", { required: true })} required>
                                        <option value="">Select a user type</option>
                                        {category.map((cat, index) => (
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="distribution_center_id" className="ti-form-label mb-0">Distribution Center</label>
                                    <select className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("distribution_center_id", { required: true })} required>
                                        <option value="">Select Distribution</option>
                                        {distribution_centers.map((cat, index) => (
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                <label className="ti-form-label mb-0">ID/Passport Number</label>
                                <input type="number" {...register("id_number", { required: true })} id='id_number' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter id or passport number" />
                            </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Gender</label>
                                    <select type="text" {...register("gender", { required: false })} id='gender' className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                        <option value="">Select a Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Other</option>

                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Marital Status</label>
                                    <select type="text" {...register("marital_status", { required: false })} id='marital_status' className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                        <option value="">Select Marital Status</option>
                                        <option value="1">Married</option>
                                        <option value="2">Single</option>
                                        <option value="3">Divorced</option>
                                        <option value="4">Separated</option>

                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Mobile Number</label>
                                    <input type="text" {...register("mobile_number", { required: true })} id='mobile_number' className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter user phone number" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Email Address</label>
                                    <input type="email" {...register("email_address", { required: false })} id='email_address' className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter user Email Address" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Alternative Mobile Number</label>
                                    <input type="text" {...register("alternative_mobile_number", { required: false })} id='alternative_mobile_number' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter alternative mobile number" required />
                                    {errors.alternative_mobile_number && <span className="text-red-500 text-xs">Trade Name is required</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Other User Details</h5> 
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">

                        <div className="space-y-2">
                                <label className="ti-form-label mb-0">Date of Birth</label>
                                <input type="text" {...register("date_of_birth", { required: false })} id='date_of_birth' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" Select Date of Birth" required />
                                {errors.address && <span className="text-red-500 text-xs">Address Number is required</span>}
                            </div>
                            
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Address Number</label>
                                <input type="text" {...register("address", { required: false })} id='address' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... sample, P O Box 00000" required />
                                {errors.address && <span className="text-red-500 text-xs">Address Number is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Postal code</label>
                                <input type="number" {...register("postal_code", { required: false })} id='postal_code' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="00100" required />
                                {errors.postal_code && <span className="text-red-500 text-xs">Postal Code is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Country</label>
                                <input type="text" {...register("country")} id='country' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Kenya" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">County</label>
                                <input type="text" {...register("county")} id='county' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter country name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Sub County</label>
                                <input type="text" {...register("sub_county")} id='sub_county' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter sub country name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">City</label>
                                <input type="text" {...register("city")} id='city' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter city or town name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">KRA PIN Number</label>
                                <input type="text" {...register("kra_pin", { required: false })} id='kra_pin' className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter user kra pin" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">NHIF Number</label>
                                <input type="text" {...register("nhif_number", { required: false })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter user nhif number" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">NSSF Number</label>
                                <input type="text" {...register("nssf_number", { required: false })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter user nssf number" />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Enter password</label>
                                <input type="password" {...register("password", { required: false })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... enter a password" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Confirm password</label>
                                <input type="password" {...register("confirm_password", { required: true })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... confirm password" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">ID and Profile Image</h5>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title">Upload ID Front</h5>
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <div className="box-body">
                                    <div>
                                        <label className="block">
                                            <span className="sr-only">Choose Profile photo</span>
                                            {/* <input type="file" {...register("id_front", { required: false })} className="block w-full text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary focus-visible:outline-none" /> */}
                                            <input type="text" {...register("id_front", { required: false })} className="block w-full text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary focus-visible:outline-none" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title">Upload ID Back</h5>
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <div className="box-body">
                                    <div>
                                        <label className="block">
                                            <span className="sr-only">Choose Profile photo</span>
                                            {/* <input type="file"{...register("id_back", { required: false })} className="block w-full text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary focus-visible:outline-none" /> */}
                                            <input type="text"{...register("id_back", { required: false })} className="block w-full text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary focus-visible:outline-none" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title">Upload Selfie</h5>
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <div className="box-body">
                                    <div>
                                        <label className="block">
                                            <span className="sr-only">Choose Profile photo</span>
                                            {/* <input type="file" {...register("selfie", { required: false })} className="block w-full text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary focus-visible:outline-none" /> */}
                                            <input type="text" {...register("selfie", { required: false })} className="block w-full text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary focus-visible:outline-none" />
                                        </label>
                                    </div>
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


        </div>
    )
}

export default CreateUser;

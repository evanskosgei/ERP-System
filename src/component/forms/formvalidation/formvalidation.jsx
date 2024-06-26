import React, { useState } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import DatePicker from 'react-datepicker';
import { useForm } from "react-hook-form";

const Formvalidation = () => {
  const [startDate, setStartDate] = useState(new Date());
 
  const { register, handleSubmit, formState: { errors }, formState } = useForm();

  const onSubmit = async data => {
    console.log(data)
  };

  return (
    <div>
      <PageHeader currentpage="Add Supplier" activepage="Forms" mainpage="Add Supplier" />
      <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Business Details</h5>
              </div>
              <div className="box-body">

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Bussiness Name</label>
                    <input type="text" {...register("businessname")} id='businessname' className="my-auto ti-form-input" placeholder="Businessname" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Trade Name</label>
                    <input type="text" {...register("tradename")} id='tradename' className="my-auto ti-form-input" placeholder="trade name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Address Number</label>
                    <input type="text" {...register("addressnumber")}  id='addressnumber' className="my-auto ti-form-input" placeholder=" 7 Floor, Chiromo Lane, Westlands, Nairobi" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Postal code</label>
                    <input type="number" {...register("postalcode")} id='postalcode' className="my-auto ti-form-input" placeholder="00100" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Country</label>
                    <input type="text" {...register("country")} id='country' className="my-auto ti-form-input" placeholder="Kenya" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Business Number</label>
                    <input type="number" {...register("businessnumber")}  id='businessnumber' className="ti-form-input" placeholder="Business No." required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Company Email</label>
                    <input type="email" {...register("companyemail")}  id='companyemail' className="ti-form-input" placeholder="biz@example.com" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-header">
                <h5 className="box-title">Personal Details</h5>
              </div>
              <div className="box-body">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">First Name</label>
                    <input type="text" {...register("fname")} className="firstName my-auto ti-form-input" placeholder="John" required />
                    <span className="firstNameError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Middle Name(Optional)</label>
                    <input type="text" {...register("middlename")} className="lastName my-auto ti-form-input" placeholder="Pombe" required />
                    <span className="lastNameError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Last Name</label>
                    <input type="text" {...register("lname")} className="lastName my-auto ti-form-input" placeholder="Magufuli" required />
                    <span className="lastNameError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Mobile Number</label>
                    <input type="number" {...register("mobilenumber")} className="phonenumber my-auto ti-form-input" placeholder="+91 123-456-789" required />
                    <span className="phoneError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Alternative Mobile Number(Optional)</label>
                    <input type="number" {...register("alternativemobilenumber")} className="phonenumber my-auto ti-form-input" placeholder="+91 123-456-789" required />
                    <span className="phoneError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Email Address</label>
                    <input type="email" {...register("emailaddress")} className="email-address my-auto ti-form-input" placeholder="jpombe@example.com" required />
                    <span className="emailError text-red-500 text-xs hidden">error</span>
                  </div>

                  <div className="space-y-2">
                    <label className="ti-form-label mb-0">Gender</label>
                    <ul className="flex flex-col sm:flex-row">
                      <li className="ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-11" {...register("gender")} name="ti-radio-validation" type="radio" className="ti-form-radio" defaultChecked required />
                          </div>
                          <label htmlFor="ti-radio-validation-11" className="ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                            Female
                          </label>
                        </div>
                      </li>
                      <li className="ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-12" {...register("gender")} name="ti-radio-validation" type="radio" className="ti-form-radio" required />
                          </div>
                          <label htmlFor="ti-radio-validation-12" className="ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                            Male
                          </label>
                        </div>
                      </li>

                      <li className="ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-13" {...register("gender")}name="ti-radio-validation" type="radio" className="ti-form-radio" required />
                          </div>
                          <label htmlFor="ti-radio-validation-13" className="ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                            Others
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-5">
                  <input type="checkbox" className="validationCheckbox ti-form-checkbox mt-0.5" id="hs-checkbox-group-12" required />
                  <span className="checkboxError text-red-500 text-xs hidden">error</span>
                  <label htmlFor="hs-checkbox-group-12" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">I agree with the <a href="#" className="text-primary hover:underline">terms and conditions</a></label>
                </div>
                <button type="submit" onClick={handleSubmit(onSubmit)} className="ti-btn ti-btn-primary ti-custom-validate-btn">Submit</button>
              </div>
            </div>
          </div>
      </div>
    </div >
  )
}
export default Formvalidation;
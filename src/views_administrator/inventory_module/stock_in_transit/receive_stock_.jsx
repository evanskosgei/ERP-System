import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from "react-hook-form"
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import mtaApi from '../../../api/mtaApi';
import Alert from '../../../components/Alert';

const Receivestock = () => {
  const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
  const navigate = useNavigate();
  const [distributions, setDistributions] = useState([]);
  const [model, setModel] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const get_distributions = async () => {
      try {
        const { data } = await mtaApi.distributions.list_distribution('1')
        if (data.status === 200) {
          setDistributions(data.response)
        }
      } catch (error) {
        const message = error.response?.data?.error ?? error.message;
        setAlert({ type: "error", message });
      }
      try {
        const { data } = await mtaApi.product_models.list_mobile_phone_model("1")
        if (data.status === 200) {
          setModel(data.response)
        }
      } catch (error) {
        const message = error.response?.data?.error ?? error.message;
        setAlert({ type: "error", message });
      }
      try {
        const { data } = await mtaApi.stock_in_transit.list_stock_in_transit("1")
        if (data.status === 200) {
          setStocks(data.response)
        }
      } catch (error) {
        const message = error.response?.data?.error ?? error.message;
        setAlert({ type: "error", message });
      }
    }
    get_distributions()
  }, [])
  
  const onSubmit = async (values) => {
    try {
      const { data } = await mtaApi.receive_stock.receive_phone_models(values)
      if (data.status === 200) {
        navigate("/inventory/approve-receive-stock")
      }
    } catch (error) {
      const message = error.response?.data?.error ?? error.message;
      setAlert({ type: "error", message });
    }
  }
  return (
    <div>
      <PageHeader currentpage="Receive Stock" href="/inventory/dashboard/" activepage="Inventory" mainpage="Receive Stock in Transit" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title text-center">Receive Stock</h5>
            </div>
            <div className="box-body">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="ti-form-label mb-0">Distribution Center</label>
                  <select {...register("distribution_center_id", { required: true })} className="my-auto ti-form-input">
                    <option value="">...select distribution center</option>
                    {distributions.map((dist, index) => (
                      <option key={index} value={dist.id}>{dist.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="ti-form-label mb-0">Phone Model</label>
                  <select {...register("model_id", { required: true })} className="my-auto ti-form-input">
                    <option value="">...select phone model</option>
                    {model.map((mod, index) => (
                      <option key={index} value={mod.id}>{mod.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="ti-form-label mb-0">Products In transit</label>
                  <select {...register("products_in_transit_id", { required: true })} className="my-auto ti-form-input">
                    <option value="">...select stock in transit</option>
                    {stocks.map((stock, index) => (
                      <option key={index} value={stock.id}>{stock.transporter_name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="ti-form-label mb-0">IMEI 1</label>
                  <input type="number" {...register("imei_1", { required: true })} className="my-auto ti-form-input" placeholder='...Enter IMEI 1' />   
                </div>
                <div className="space-y-2">
                  <label className="ti-form-label mb-0">IMEI 2</label>
                  <input type="number" {...register("imei_2", { required: false })} className="my-auto ti-form-input" placeholder='...Enter IMEI 2' />   
                </div>
                <div className="space-y-2">
                  <label className="ti-form-label mb-0">QR Code ID</label>
                  <input type="text" {...register("qr_code_id", { required: false })} className="my-auto ti-form-input" placeholder='...Enter QR Code' />   
                </div>
                <div className="space-y-2">
                  <label className="ti-form-label mb-0">Date Received</label>
                  <input type="date" {...register("received_date", { required: false })} className="my-auto ti-form-input" placeholder='...Enter Received Date' />   
                </div>
              </div>
              <div className="space-y-2">
                  <label className="ti-form-label mb-0">Remarks</label>
                  <textarea {...register("remarks", { required: false })} className="my-auto ti-form-input" placeholder='...Enter your remarks' />   
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Receivestock

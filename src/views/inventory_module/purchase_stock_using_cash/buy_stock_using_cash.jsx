import React, { useState, useEffect } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from 'react-hook-form'
import '@ag-grid-community/styles/ag-grid.css'
import '@ag-grid-community/styles/ag-theme-alpine.css'
import mtaApi from '../../../api/mtaApi'
import Alert from '../../../components/Alert'
import { useNavigate } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const BuyUsingCash = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [rowData, setRowData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRows, setSelectedRows] = useState([])
  const [modalData, setModalData] = useState({})
  const [selectedSupplierId, setSelectedSupplierId] = useState('')
  const [alert, setAlert] = useState(null)
  const navigate = useNavigate()
  const [bankAccounts, setBankAccounts] = useState([])
  const [supplierAccounts, setSupplierAccounts] = useState([])
  const [selectedSupplierAccounts, setSelectedSupplierAccounts] = useState([])
  const [quantities, setQuantities] = useState({})
  const [amount, setAmount] = useState({})

  const handleMinusClick = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0), // Ensure the quantity doesn't go below 0
    }))
  }

  const handleCheckboxChange = (event, data) => {
    const isChecked = event.target.checked
    if (isChecked) {
      setSelectedRows([...selectedRows, data])
    } else {
      setSelectedRows(selectedRows.filter((row) => row !== data))
    }
  }
  const handleAmountMinusClick = (productId) => {
    setAmount((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }))
  }
  const handleAmountChange = (event, productId) => {
    const value = parseInt(event.target.value, 10)
    if (!isNaN(value) && value >= 0) {
      setAmount((prevAmounts) => ({
        ...prevAmounts,
        [productId]: value,
      }))
    }
  }
  const handleQuantityChange = (event, productId) => {
    const value = parseInt(event.target.value, 10)
    if (!isNaN(value) && value >= 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: value,
      }))
    }
  }

  // Function to handle quantity change when the plus button is clicked
  const handlePlusClick = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }))
  }

  const handleAmountPlusClick = (productId) => {
    setAmount((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }))
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const suppliersResponse = await mtaApi.suppliers.get_suppliers('1')
        setSuppliers(suppliersResponse.data.response)

        const bankAccountsResponse = await mtaApi.accounts.list_account_by_type({ type: '1', status: '1' })
        setBankAccounts(bankAccountsResponse.data.response)

        const supplierAccountsResponse = await mtaApi.accounts.list_account_by_type({ type: '9', status: '1' })
        setSupplierAccounts(supplierAccountsResponse.data.response)
      } catch (error) {
        const message = error.response?.data?.error ?? error.message
        setAlert({ type: 'error', message })
      }
    }
    fetchData()
  }, [])

  const handleSearchChange = (event) => {
    const query = event.target.value
    setSearchQuery(query)
    if (query) {
      const filtered = rowData.filter((row) =>
        Object.values(row).some((val) => String(val).toLowerCase().includes(query.toLowerCase())),
      )
      setFilteredData(filtered)
    } else {
      setFilteredData(rowData)
    }
  }

  const handleCategoryChange = async (event) => {
    const selectedCategory = event.target.value
    try {
      const response = await mtaApi.product_models.list_mobile_phone_model('1')
      console.log(response.data.response)
      setRowData(response.data.response)
      setFilteredData(response.data.response)
    } catch (error) {
      const message = error.response?.data?.error ?? error.message
      setAlert({ type: 'error', message })
    }
  }

  const handleSupplierChange = (event) => {
    const selectedSupplier = event.target.value
    setSelectedSupplierId(selectedSupplier)
    setSelectedSupplierAccounts(supplierAccounts.filter((account) => account.owner_id === parseInt(selectedSupplier)))
  }

  const onSubmitModal = async (data) => {
    // Build validRows using quantities and amounts
    const validRows = Object.keys(quantities)
      .map((id) => {
        return {
          id: Number(id),
          quantity: quantities[id],
          amount: amount[id],
        }
      })
      .filter((row) => row.amount != null && row.quantity != null)

    if (!selectedSupplierId) {
      setAlert({ type: 'error', message: 'Please select a supplier' })
      return
    }

    const totalAmount = validRows.reduce((acc, row) => acc + row.amount * row.quantity, 0).toFixed(2)

    const payload = {
      transaction_id: data.transaction_id,
      total_amount: totalAmount,
      supplier_name: '',
      supplier_id: selectedSupplierId,
      supplier_payable_account_number: data.supplier_payable_account_number,
      bank_account_number: data.bank_account_number,
      purchase_date: data.purchase_date,
      product_details: validRows.map((row) => ({
        model_id: row.id,
        quantity: row.quantity,
        price_per_unit: row.amount,
        total_amount_per_model: (row.amount * row.quantity).toFixed(2),
      })),
      notes: 'Stock purchased to be delivered immediately',
    }

    try {
      await mtaApi.purchase.cashstockPurchase(payload)
      navigate('/inventory/new-stock-purchased-using-cash')
    } catch (error) {
      const message = error.response?.data?.error ?? error.message
      setAlert({ type: 'error', message })
    }
  }

  return (
    <div>
      <PageHeader
        currentpage='Buy Using Cash'
        href='/inventory/dashboard/'
        activepage='Inventory'
        mainpage='Buy Using Prepayments'
      />
      {alert && <Alert alert={alert} />}
      <div className='col-span-12'>
        <div className='box'>
          <div className='box-header'>
            <h5 className='box-title text-center'>Purchase Stock</h5>
          </div>
          <div className='box-body'>
            <div className='grid lg:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <div className='mb-4'>
                  <label className='ti-form-label mb-0'>Product Supplier</label>
                  <select
                    {...register('supplier_id', { required: true })}
                    className='my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={selectedSupplierId}
                    onChange={handleSupplierChange}
                  >
                    <option value=''>Select Supplier</option>
                    {suppliers.map((supplier) => (
                      <option key={supplier.id} value={supplier.id}>
                        {supplier.business_name}
                      </option>
                    ))}
                  </select>
                  {errors.supplier_id && <span className='text-red-500'>{errors.supplier_id.message}</span>}
                </div>
              </div>
              <div className='space-y-2'>
                <div className='mb-4'>
                  <label className='ti-form-label mb-0'>Product Category</label>
                  <select
                    {...register('category', { required: true })}
                    id='category'
                    className='my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={handleCategoryChange}
                  >
                    <option value=''>...select product category</option>
                    <option value='mobile_phones'>Mobile Phones</option>
                    <option value='television'>Television</option>
                    <option value='accessories'>Accessories</option>
                  </select>
                  {errors.category && <span className='text-red-500'>{errors.category.message}</span>}
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmitModal)} className='grid grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='ti-form-label mb-0'>Bank Account Number</label>
                <select
                  {...register('bank_account_number', { required: true })}
                  className='my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value=''>Select Bank Account</option>
                  {bankAccounts.map((account) => (
                    <option key={account.account_number} value={account.account_number}>
                      {account.account_name}
                    </option>
                  ))}
                </select>
                {errors.bank_account_number && (
                  <span className='text-red-500'>{errors.bank_account_number.message}</span>
                )}
              </div>
              <div className='space-y-2'>
                <label className='ti-form-label mb-0'>Supplier Payable Account Number</label>
                <select
                  {...register('supplier_payable_account_number', { required: true })}
                  className='my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value=''>Select Supplier Payable Account</option>
                  {/* {selectedSupplierAccounts.map(account => ( */}
                  {supplierAccounts.map((account) => (
                    <option key={account.account_number} value={account.account_number}>
                      {account.account_name}
                    </option>
                  ))}
                </select>
                {errors.supplier_payable_account_number && (
                  <span className='text-red-500'>{errors.supplier_payable_account_number.message}</span>
                )}
              </div>
              <div className='space-y-2'>
                <label htmlFor='transaction_id' className='ti-form-label mb-0'>
                  Transaction ID
                </label>
                <input
                  id='transaction_id'
                  {...register('transaction_id', { required: true })}
                  className='my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors.transaction_id && <span className='text-red-500'>{errors.transaction_id.message}</span>}
              </div>
              <div className='space-y-2'>
                <label htmlFor='purchase_date' className='ti-form-label mb-0'>
                  Purchase Date
                </label>
                <input
                  id='purchase_date'
                  type='date'
                  {...register('purchase_date', { required: true })}
                  className='my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors.purchase_date && <span className='text-red-500'>{errors.purchase_date.message}</span>}
              </div>
              <div className='col-span-2 flex justify-center'>
                <button type='submit' className='ti-btn ti-btn-primary'>
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '2', maxWidth: '50' }}>
        <input
          type='text'
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder='Search...'
          style={{
            marginTop: '5px',
            marginBottom: '15px',
            padding: '8px',
            width: '30%',
            boxSizing: 'border-box',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />
      </div>
      <div className='box'>
        <div className='box-header lg:flex lg:justify-between'>
          <h5 className='box-title my-auto'>Products List</h5>
          {/* <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/addproduct/`} className="ti-btn ti-btn-primary m-0 py-2"><i className="ri ri-add-line"></i>Add Product</Link> */}
        </div>
        <div className='box-body'>
          <div className='table-bordered whitespace-nowrap rounded-sm overflow-auto'>
            <table className='ti-custom-table ti-custom-table-head'>
              <thead className=''>
                <tr>
                  <th scope='col' className='dark:text-white'>
                    <div className='flex leading-[0] justify-center'>
                      <input
                        type='checkbox'
                        className='border-gray-500 ti-form-checkbox mt-0.5'
                        id='hs-default-checkbox'
                      />
                      <label htmlFor='hs-default-checkbox' className='text-sm text-gray-500 dark:text-white/70'></label>
                    </div>
                  </th>
                  <th scope='col' className='!text-sm !p-4 !text-gray-800 dark:!text-white'>
                    Phone Model
                  </th>
                  <th scope='col' className='!text-sm !p-4 !text-gray-800 dark:!text-white'>
                    Front Camera
                  </th>
                  <th scope='col' className='!text-sm !p-4 !text-gray-800 dark:!text-white'>
                    Back Camera
                  </th>
                  <th scope='col' className='!text-sm !p-4 !text-gray-800 dark:!text-white'>
                    Display
                  </th>
                  <th scope='col' className='!text-sm !p-4 !text-gray-800 dark:!text-white'>
                    QNTY
                  </th>
                  <th scope='col' className='!text-sm !p-4 !text-gray-800 dark:!text-white'>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {rowData.map((data, index) => (
                  <tr className='cart-box' key={index}>
                    <td className=''>
                      <div className='flex items-center h-5 product-checkbox justify-center'>
                        <input
                          id='product-check-1'
                          type='checkbox'
                          checked={selectedRows.includes(data)}
                          onChange={(event) => handleCheckboxChange(event, data)}
                          className='border-gray-500 ti-form-checkbox'
                        />
                        <label htmlFor='product-check-1' className='sr-only'>
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className='flex'>
                      <img
                        className='avatar avatar-lg rounded-sm bg-gray-100 dark:bg-black/20 p-1'
                        src={data.image_path}
                      />
                      <div className='ltr:ml-3 rtl:mr-3'>
                        <span className='block text-sm font-semibold text-gray-800 dark:text-white max-w-[200px] truncate'>
                          {data.name}
                        </span>
                        <span className='block text-sm text-gray-600 dark:text-white/70'> Ram: {data.ram}</span>
                        <span className='block text-sm text-gray-600 dark:text-white/70'>
                          Rom: {data.internal_storage}{' '}
                        </span>
                        <span className='block text-sm text-gray-600 dark:text-white/70'>Battery:{data.battery} </span>
                      </div>
                    </td>
                    <td>{data.front_camera}</td>
                    <td>{data.main_camera}</td>
                    <td>{data.display}</td>
                    <td>
                      <div className='flex rounded-sm'>
                        <button
                          aria-label='button'
                          type='button'
                          onClick={() => handleMinusClick(data.id)}
                          className='product-quantity-minus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm'
                        >
                          <i className='ti ti-minus'></i>
                        </button>
                        <input
                          type='number'
                          name='quantity'
                          className='product-quantity p-0 ti-form-input w-20 rounded-none focus:z-10 text-center'
                          placeholder='0'
                          min='0'
                          value={quantities[data.id] || 0} // Set the value of the input field to the corresponding quantity
                          onChange={(e) => handleQuantityChange(e, data.id)} // Handle the input change event
                        />
                        <button
                          aria-label='button'
                          type='button'
                          onClick={() => handlePlusClick(data.id)}
                          className='product-quantity-plus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm'
                        >
                          <i className='ti ti-plus'></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className='flex rounded-sm'>
                        <button
                          aria-label='button'
                          type='button'
                          onClick={() => handleAmountMinusClick(data.id)}
                          className='product-quantity-minus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm'
                        >
                          <i className='ti ti-minus'></i>
                        </button>
                        <input
                          type='number'
                          name='amount'
                          className='product-quantity p-0 ti-form-input w-20 rounded-none focus:z-10 text-center'
                          placeholder='0'
                          min='0'
                          value={amount[data.id] || 0} // Set the value of the input field to the corresponding quantity
                          onChange={(e) => handleAmountChange(e, data.id)} // Handle the input change event
                        />
                        <button
                          aria-label='button'
                          type='button'
                          onClick={() => handleAmountPlusClick(data.id)}
                          className='product-quantity-plus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm'
                        >
                          <i className='ti ti-plus'></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav className='flex justify-end items-center space-x-2 rtl:space-x-reverse mt-5'>
            <Link
              className='w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full'
              to='#'
            >
              <span aria-hidden='true'>«</span>
              <span className='sr-only'>Previous</span>
            </Link>
            <Link
              className='w-10 h-10 bg-primary text-white p-2 inline-flex items-center justify-center text-sm font-medium rounded-full'
              to='#'
              aria-current='page'
            >
              1
            </Link>
            <Link
              className='w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full'
              to='#'
            >
              2
            </Link>
            <Link
              className='w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full'
              to='#'
            >
              3
            </Link>
            <Link
              className='w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full'
              to='#'
            >
              <span className='sr-only'>Next</span>
              <span aria-hidden='true'>»</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default BuyUsingCash

import React from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from "react-hook-form"

const Receivestock = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();

    const onSubmit = async values => {
        console.log(values)
    }
  return (
    <div>
        receive
      
    </div>
  )
}

export default Receivestock

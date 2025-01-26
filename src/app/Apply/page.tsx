"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"

interface FormData {
  loanCategory: string
  loanSubcategory: string
  loanAmount: string
  loanPeriod: string
  guarantor1Name: string
  guarantor1Email: string
  guarantor1Location: string
  guarantor1CNIC: string
  guarantor2Name: string
  guarantor2Email: string
  guarantor2Location: string
  guarantor2CNIC: string
  statement: File | null
  salarySheet: File | null
  address: string
  phoneNumber: string
}

export default function LoanRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    loanCategory: "",
    loanSubcategory: "",
    loanAmount: "",
    loanPeriod: "",
    guarantor1Name: "",
    guarantor1Email: "",
    guarantor1Location: "",
    guarantor1CNIC: "",
    guarantor2Name: "",
    guarantor2Email: "",
    guarantor2Location: "",
    guarantor2CNIC: "",
    statement: null,
    salarySheet: null,
    address: "",
    phoneNumber: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()

      // Append all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value)
        } else {
          formDataToSend.append(key, value.toString())
        }
      })

      // Send the form data to the backend
      const response = await axios.post("/api/loan/request", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      alert(response.data.message)
    } catch (error) {
      console.error("Error submitting loan request:", error)
      alert("An error occurred while submitting your loan request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Loan Request Form</h2>
      <p className="text-sm text-gray-600 mb-6">
        Please fill out all the required information to submit your loan request.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields remain the same */}
        {/* ... */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Loan Request"}
        </button>
      </form>
    </div>
  )
}


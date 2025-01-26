'use client'

import React, { useState } from 'react'

interface FormData {
  loanCategory: string;
  loanSubcategory: string;
  loanAmount: string;
  loanPeriod: string;
  guarantor1Name: string;
  guarantor1Email: string;
  guarantor1Location: string;
  guarantor1CNIC: string;
  guarantor2Name: string;
  guarantor2Email: string;
  guarantor2Location: string;
  guarantor2CNIC: string;
  statement: File | null;
  salarySheet: File | null;
  address: string;
  phoneNumber: string;
}

export function LoanRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    loanCategory: '',
    loanSubcategory: '',
    loanAmount: '',
    loanPeriod: '',
    guarantor1Name: '',
    guarantor1Email: '',
    guarantor1Location: '',
    guarantor1CNIC: '',
    guarantor2Name: '',
    guarantor2Email: '',
    guarantor2Location: '',
    guarantor2CNIC: '',
    statement: null,
    salarySheet: null,
    address: '',
    phoneNumber: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files) {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0]
      }))
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to your backend
    console.log(formData)

    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Here you would handle the response from your backend
      alert("Loan request submitted successfully!")
    }, 2000)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Loan Request Form</h2>
      <p className="text-sm text-gray-600 mb-6">Please fill out all the required information to submit your loan request.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="loanCategory" className="block text-sm font-medium text-gray-700 mb-1">Loan Category</label>
          <select
            id="loanCategory"
            name="loanCategory"
            value={formData.loanCategory}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a loan category</option>
            <option value="wedding">Wedding Loan</option>
            <option value="homeConstruction">Home Construction Loan</option>
            <option value="businessStartup">Business Startup Loan</option>
            <option value="education">Education Loan</option>
          </select>
        </div>

        <div>
          <label htmlFor="loanSubcategory" className="block text-sm font-medium text-gray-700 mb-1">Loan Subcategory</label>
          <select
            id="loanSubcategory"
            name="loanSubcategory"
            value={formData.loanSubcategory}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a loan subcategory</option>
            <option value="valima">Valima</option>
            <option value="furniture">Furniture</option>
            <option value="valimaFood">Valima Food</option>
            <option value="jahez">Jahez</option>
          </select>
        </div>

        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (PKR)</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleInputChange}
            min="1000"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="loanPeriod" className="block text-sm font-medium text-gray-700 mb-1">Loan Period (Years)</label>
          <input
            type="number"
            id="loanPeriod"
            name="loanPeriod"
            value={formData.loanPeriod}
            onChange={handleInputChange}
            min="1"
            max="5"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <fieldset className="border border-gray-300 rounded-md p-4">
          <legend className="text-lg font-medium text-gray-700 px-2">Guarantor 1</legend>
          <div className="space-y-4">
            <div>
              <label htmlFor="guarantor1Name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="guarantor1Name"
                name="guarantor1Name"
                value={formData.guarantor1Name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="guarantor1Email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="guarantor1Email"
                name="guarantor1Email"
                value={formData.guarantor1Email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="guarantor1Location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                id="guarantor1Location"
                name="guarantor1Location"
                value={formData.guarantor1Location}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="guarantor1CNIC" className="block text-sm font-medium text-gray-700 mb-1">CNIC</label>
              <input
                type="text"
                id="guarantor1CNIC"
                name="guarantor1CNIC"
                value={formData.guarantor1CNIC}
                onChange={handleInputChange}
                pattern="^[0-9]{5}-[0-9]{7}-[0-9]$"
                placeholder="12345-1234567-1"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border border-gray-300 rounded-md p-4">
          <legend className="text-lg font-medium text-gray-700 px-2">Guarantor 2</legend>
          <div className="space-y-4">
            <div>
              <label htmlFor="guarantor2Name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="guarantor2Name"
                name="guarantor2Name"
                value={formData.guarantor2Name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="guarantor2Email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="guarantor2Email"
                name="guarantor2Email"
                value={formData.guarantor2Email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="guarantor2Location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                id="guarantor2Location"
                name="guarantor2Location"
                value={formData.guarantor2Location}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="guarantor2CNIC" className="block text-sm font-medium text-gray-700 mb-1">CNIC</label>
              <input
                type="text"
                id="guarantor2CNIC"
                name="guarantor2CNIC"
                value={formData.guarantor2CNIC}
                onChange={handleInputChange}
                pattern="^[0-9]{5}-[0-9]{7}-[0-9]$"
                placeholder="12345-1234567-1"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </fieldset>

        <div>
          <label htmlFor="statement" className="block text-sm font-medium text-gray-700 mb-1">Statement (Optional)</label>
          <input
            type="file"
            id="statement"
            name="statement"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="salarySheet" className="block text-sm font-medium text-gray-700 mb-1">Salary Sheet (Optional)</label>
          <input
            type="file"
            id="salarySheet"
            name="salarySheet"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
          ></textarea>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            pattern="^(\+92|0)[0-9]{10}$"
            placeholder="+923XXXXXXXXX or 03XXXXXXXXX"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Loan Request"}
        </button>
      </form>
    </div>
  )
}

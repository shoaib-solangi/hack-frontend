import React from 'react'
import Footer from '../components/Footer'
import { LoanCalculator } from '../components/LoanCalculator'
import Categ4 from '../components/Categ4'
import Categ3 from '../components/Categ3'
import Categ2 from '../components/Categ2'
import Categ1 from '../components/Categ1'
import Header from "../components/Header";


function page() {
  return (
    <div>
        <Header />
       <div className="my-5">
        <h3 className="font-bold text-4xl text-center ">Loan Categories</h3>
      </div>
      <div className="flex flex-col gap-3">
        <Categ1 />
        <Categ2 />
        <Categ3 />
        <Categ4 />
        <LoanCalculator />

          </div>
          <Footer />
    </div>
  )
}

export default page

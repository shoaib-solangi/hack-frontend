"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Briefcase, Home, GraduationCap, Heart, Calculator, FileText, Users, Handshake } from "lucide-react"
 interface Service {
    id: string
    title: string
    description: string
    icon: React.ElementType
    relatedLoanCategory: string
  }
  
  const Services= ()=>{    
      const services: Service[] = [
            {
              id: "wedding-planning",
              title: "Wedding Planning Assistance",
              description:
                "Get expert advice on budgeting and planning your wedding expenses, tailored to our Wedding Loan options.",
              icon: Heart,
              relatedLoanCategory: "Wedding Loans",
            },
            {
              id: "furniture-consultation",
              title: "Furniture Consultation",
              description: "Receive guidance on selecting and budgeting for furniture as part of your Wedding Loan package.",
              icon: Home,
              relatedLoanCategory: "Wedding Loans",
            },
            {
              id: "construction-advisory",
              title: "Construction Advisory",
              description:
                "Expert advice on home construction phases and budgeting, aligned with our Home Construction Loan offerings.",
              icon: Home,
              relatedLoanCategory: "Home Construction Loans",
            },
            {
              id: "material-sourcing",
              title: "Material Sourcing Assistance",
              description: "Get help finding quality construction materials within your Home Construction Loan budget.",
              icon: FileText,
              relatedLoanCategory: "Home Construction Loans",
            },
            {
              id: "business-plan-review",
              title: "Business Plan Review",
              description: "Have your business plan reviewed by experts to strengthen your Business Startup Loan application.",
              icon: Briefcase,
              relatedLoanCategory: "Business Startup Loans",
            },
            {
              id: "market-analysis",
              title: "Market Analysis Support",
              description: "Receive assistance in analyzing your target market to support your Business Startup Loan proposal.",
              icon: Users,
              relatedLoanCategory: "Business Startup Loans",
            },
            {
              id: "education-counseling",
              title: "Education Counseling",
              description: "Get advice on educational paths and associated costs to make the most of your Education Loan.",
              icon: GraduationCap,
              relatedLoanCategory: "Education Loans",
            },
            {
              id: "scholarship-search",
              title: "Scholarship Search Assistance",
              description: "Receive help in finding scholarships to complement your Education Loan and reduce overall costs.",
              icon: Calculator,
              relatedLoanCategory: "Education Loans",
            },
            {
              id: "financial-literacy",
              title: "Financial Literacy Workshop",
              description: "Attend workshops to improve your financial management skills, beneficial for all loan categories.",
              icon: Calculator,
              relatedLoanCategory: "All Categories",
            },
            {
              id: "loan-application-support",
              title: "Loan Application Support",
              description: "Get assistance in preparing and submitting your loan application for any loan category.",
              icon: FileText,
              relatedLoanCategory: "All Categories",
            },
        
          ]
          
      
  return (
    <div>
      <div className=" text-center my-3 ">
        <h2 className="text-black font-bold text-4xl my-3">Our Services</h2>

              <div>
                  <div className="flex justify-center ">
                  <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent className="-ml-4">
        {services.map((service) => (
          <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 h-[250px]">
                  <service.icon className="w-12 h-12 mb-4 text-green-600" />
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-sm text-center text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  
      </div>
              </div>
          </div>
          </div>    );
          
}

export default Services;

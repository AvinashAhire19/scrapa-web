import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // 
const FormSection = () => {
    AOS.init();

  return (
    <div>
              <section className="bg-home4" id="home">
            <div className="bg-overlay"></div>
            <div className="container">
                <div  className="row align-items-center" >
                    <div className="col-lg-6">
                        <h1 className="4 mb-4">        Scrap your vehicle in environment 
                               friendly way with Scrapa. 
                             <span className="text-secondary fw-medium">The Best Entrepreneur.</span></h1>
                            <p className="text-muted fs-17">Instant Offer | Prompt Pick-up | Hassle-free end-to-end service | Follows all legal compliances.</p>
                        <button className="btn btn-primary mt-4">Learn More <span
                                className="ms-2 right-icon">&#8594;</span></button>
                    </div>
                    <div className="col-lg-5 offset-lg-1 "  style={{"color" : "black"}}>
                        <div className="card p-5 border-0 box-shadow mt-5 mt-lg-0">
                            <div className="text-center">
                                <p className="text-muted mb-2 f-13 text-uppercase" >Welcome To Scrapa</p>
                                <h5 className="form-dark mb-4">Contact Us </h5>
                            </div>
                            <form className="registration-form">
                                <div className="mb-4">
                                    <label for="exampleFormControlInput1" className="f-15 form-label">Your Name*</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                                </div>
                                <div className="mb-4">
                                    <label for="exampleFormControlInput2" className="f-15  form-label">Your email*</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter your email"/>
                                </div>
                                <div className="mb-4">
                                    <label for="exampleFormControlInput3" className="f-15  form-label">Scrap Type*</label>
                                        <div className="custom-select form-control" style={{"width":"200px"}}>
                                            <select>
                                              <option value="0">Select Your Scrap:</option>
                                              <option value="1">Audi</option>
                                              <option value="2">BMW</option>
                                              <option value="3">Citroen</option>
                                              <option value="4">Ford</option>
                                              <option value="5">Honda</option>
                                              <option value="6">Jaguar</option>
                                              <option value="7">Land Rover</option>
                                              <option value="8">Mercedes</option>
                                              <option value="9">Mini</option>
                                              <option value="10">Nissan</option>
                                              <option value="11">Toyota</option>
                                              <option value="12">Volvo</option>
                                            </select>
                                          </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100"> Submit Your Details <i
                                        className="mdi mdi-telegram ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       


    </div>

  )
}

export default FormSection

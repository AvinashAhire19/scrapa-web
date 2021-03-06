import React from 'react'
import {BsFacebook} from 'react-bootstrap-icons'
const Footer = () => {
  return (
    <div>

{/* <!-- START FOOTER --> */}
        <section class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="mb-4">
                            <a href="index-4.html"><img src="images/logo-dark.png" alt="" class="logo-dark"
                                    height="24" /></a>
                            <p class="text-muted mt-4 mb-2 me-lg-4">We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the charms of pleasure moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                    <div class="col-lg-2 col-6">
                        <h6 class="mb-3">Services</h6>
                        <ul class="list-unstyled company-sub-menu">
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">Business Analysis</a></li>
                            <li><a href="#">How It Work</a></li>
                            <li><a href="#">Fix & Flip</a></li>
                            <li><a href="#">Social Activation</a></li>
                        </ul>
                    </div>
                    {/* <!--end col--> */}
                    <div class="col-lg-2 col-6">
                        <h6 class="mb-3">About Us</h6>
                        <ul class="list-unstyled company-sub-menu">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* <!--end col--> */}
                    <div className="col-lg-4">
                        <h6 className="mb-3">Company</h6>
                        <p className="text-muted">4806 Spring Haven Trail South Orange, NJ 07079</p>
                        <p className="text-muted pb-2">Email: Support@gamil.com</p>
                        <ul className="list-inline footer-social-list mt-4">
                            <li className="list-inline-item"><a href="#"><i className="bi bi-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="bi bi-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i class="bi bi-whatsapp"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="bi bi-telephone-fill"></i></a></li>
                        </ul>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        <div class="footer-alt py-4 bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center text-muted">
                            <p class="mb-0 f-15">
                                <script>document.write(new Date().getFullYear())</script> &copy; Scrapa - Landing Compony <a href="https://pichforest.com/" target="_blank" class="text-reset text-decoration-underline">Pichforest</a>
                            </p>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end row--> */}
            </div>
            {/* <!--end container--> */}
        </div>
        {/* <!--end footer-alt-->
        <!-- END FOOTER --> */}

        {/* <!--start back-to-top--> */}
        <button  id="back-to-top">
          <a href='#'> arrow </a>
           
        </button>

       



    </div>
  )
}

export default Footer

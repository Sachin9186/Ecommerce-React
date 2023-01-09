import React from 'react'

export default function Absection() {
  return (
    <>
    <section className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About Julianan's Restaurant</span>
                            <h2>We are leader in <br/>Restaurant Business Since 1992</h2>
                        </div>
                        <div className="text para1">“We are an online brand focusing on fresh meat and ready-to-cook/eat products.” Our basic aim is to ensure that all the produce reaching the end consumer is fresh. Julianan's Restaurant is a fresh meat brand and we ensure healthy meaty goodness to you, without any hassles whatsoever. </div>

                        
                        
                        <div className="btn-box">
                            <a href="#" className=" menu_btn btn btn-danger absec">Contact Us</a>
                        </div>
                    </div>
                </div>

               
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                        <figure className="image-1"><a className="lightbox-image" data-fancybox="images"><img src="/absection.jpg" alt=""/></a></figure>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

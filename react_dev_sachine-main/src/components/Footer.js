import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-section">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget company-intro-widget">
              <a href="/" className="site-logo"><img src="/sachinlogo.png" alt="logo"/></a>
              <p className='cate_para'>There is nothing more important than our client's needs.</p>
              <ul className="company-footer-contact-list">
                <li><i className="fas fa-phone"></i>0123456789</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget course-links-widget">
              <h5 className="widget-title">Our Menus</h5>
              <ul className="courses-link-list">
                <li><a href="/"><i className="fas fa-long-arrow-alt-right"></i>Home</a></li>
                <li><a href="/about"><i className="fas fa-long-arrow-alt-right"></i>About Us</a></li>
                <li><a href="/contact"><i className="fas fa-long-arrow-alt-right"></i>Contact Us</a></li>
                <li><a href="/order-online"><i className="fas fa-long-arrow-alt-right"></i>Order Online</a></li>
                
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget latest-news-widget">
              <h5 className="widget-title">lastest news</h5>
              <ul className="small-post-list">
                <li>
                  <div className="small-post-item">
                    <a href="/" className="post-date">July 18, 2021</a>
                    <h6 className="small-post-title"><a href="/">Sharing is everything and we are glad to share.</a></h6>
                  </div>
                </li>
                <li>
                  <div className="small-post-item">
                    <a href="/" className="post-date">July 28, 2020</a>
                    <h6 className="small-post-title"><a href="/">Sharing is everything and we are glad to share.</a></h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget newsletter-widget">
              <h5 className="widget-title">Newsletter</h5>
              <div className="footer-newsletter">
                <p className='cate_para'>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                <form className="news-letter-form">
                  <input type="email" name="news-email" id="news-email" placeholder="Your email address"/>
                  <input className="newsbtn" type="submit" value="Send"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div className="footer-bottom">
      <div className="container fb">
        
            
              <span className="copy-right-text">© 2022 <a href="/">Juliana's Restaurants</a> All Rights Reserved.</span>
           
            
        
      </div>
    </div>
  </footer>

  )
}

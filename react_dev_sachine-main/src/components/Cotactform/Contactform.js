import React from 'react'

export default function Contactform() {
  return (
    <>
   
<body>
  <section class="footer_get_touch_outer">
    <div class="container">
      <div class="footer_get_touch_inner grid-70-30">
        <div class="colmun-70 get_form">
          <div class="get_form_inner">
            <div class="get_form_inner_text">
              <h3>Reach Us</h3>
              <h4>Get in Touch</h4>
            </div>
            <form action="https://formspree.io/f/xvonpwdl" method='POST'>
              <div class="grid-50-50">
                <input type="text" name="First name" placeholder="First Name"/>
                <input type="text" name="Last name" placeholder="Last Name"/>
                <input type="email" name="Email" placeholder="Email"/>
                <input type="tel" name="Phone" placeholder="Phone/Skype"/>
              </div>
              <div class="grid-full">
                <textarea placeholder="About Your Query" cols="30" rows="10"></textarea>
                <input type="submit" class=" menu_btn btn btn-danger contct" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
        <div class="colmun-30 get_say_form">
          <h5>Let's Chat!</h5>
          <ul class="get_say_info_sec">
            <li>
              <i class="fa fa-envelope"></i>
              <a href="mailto:info@Julianasrestaurant.com">info@Julianasrestaurant.com</a>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <a href="tel:91-9609841997">+91-9609841997</a>
            </li>
            <li>
              <i class="fa-solid fa-utensils"></i>
              <a href="#">Julianasrestaurantslover</a> 
            </li>
          </ul>  
                  
        </div>        
      </div>
    </div>
  </section>
</body>
    </>
  )
}

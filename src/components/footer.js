import React from 'react';



function Footer() {
    return (
     <div>
         {/* <!-- footer --> */}

<footer id="aa-footer">
  {/* <!-- footer bottom --> */}
  <div className="aa-footer-top">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-footer-top-area">
            <div className="row">
              <div className="col-md-2 col-sm-6">
                <div className="aa-footer-widget">
                  <h3>UPTOWN</h3>
                  <p style = {{color: '#888'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur
                    veritatis porro, eius sint aperiam! Porro incidunt </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="aa-footer-widget">
                  <div className="aa-footer-widget">
                    <h3>Privacy Policy</h3>
                    <ul className="aa-footer-nav">
                      <li><a href="#">Delivery</a></li>
                      <li><a href="#">Returns</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Discount</a></li>
                      <li><a href="#">Special Offer</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="aa-footer-widget">
                  <div className="aa-footer-widget">
                    <h3>Company</h3>
                    <ul className="aa-footer-nav">
                      <li><a href="#">Site Map</a></li>
                      <li><a href="#">Search</a></li>
                      <li><a href="#">Advanced Search</a></li>
                      <li><a href="#">Suppliers</a></li>
                      <li><a href="#">FAQ</a></li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="col-md-4 col-sm-6">
                <div className="aa-footer-widget">
                  <div className="aa-footer-widget">
                    <h3>Subscribe</h3>
                    <form action="">
                      <input type="text" name="" id="" placeholder="Your Email Address  "/>
                      <button type="submit">Submit</button>
                    </form>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- footer-bottom --> */}
  <div className="aa-footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-footer-bottom-area">
            <p className="text-center">
              CopyRight @ All Rights Reserved
            </p>
            <div className="aa-footer-payment">
              <span className="fa fa-cc-mastercard"></span>
              <span className="fa fa-cc-visa"></span>
              <span className="fa fa-paypal"></span>
              <span className="fa fa-cc-discover"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>
{/* <!-- / footer --> */}
     </div>
    )
}


export default Footer
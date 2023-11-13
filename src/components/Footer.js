import React from 'react'
import '../styling/Footer.css'
function Footer() {
  return (
    <div className='me' >  
    <br/>
    <footer classNameName="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Scanfcode.comLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu arcu pellentesque, luctus leo vitae, consectetur arcu. Cras maximus, mi eget aliquet efficitur, nibh nibh condimentum tortor, at dignissim elit purus vitae nisl. Morbi eget odio arcu. Curabitur egestas erat vel ligula interdum, sollicitudin consequat velit dignissim. </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Reactjs</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Redux</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">rtk</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">TailWind css</a></li>
              <li><a href="http://scanfcode.com/category/android/">Bootsrap</a></li>
              <li><a href="http://scanfcode.com/category/templates/">uFigma</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">partner-ship</a></li>
            </ul>
          </div>
        </div>
      
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">Rbin Younes </a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.instagram.com/robin_younes_/"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
             
            </ul>
          </div>
        </div>
      </div>
</footer></div>
  )
}

export default Footer
import React from 'react';
import "./Header.css";
import img from './asserts/img.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import azn from './asserts/azn.png'



function Header() {
    return (
      
 <>
    <div className='header'>
       <div>
         <img className='header-img' src={img} alt="" />
       </div>

      <div>
         <LocationOnIcon className='location-icon'/>
        
         <span className='header-optionone'>Hello</span>
          <span className='header-optiontwo'>Select Your Location</span>
       </div>
       
       <div className='header-search'>
        <input type="text" placeholder='Search Amazon.in' />
         <SearchIcon className='header-searchicon'/>
       </div>

       <div className='IN'>
         EN
       </div>
       
       <div className='header-nav'>
        <div className='header-option'>
          <span className='header-optionone'>Hello</span>
          <span className='header-optiontwo'>Sign In</span>
       </div>
       

       <div className='header-option'>
          <span className='header-optionone'>Return</span>
          <span className='header-optiontwo'>Orders</span>
       </div>

       <div className='header-option'>
          <span className='header-optionone'>Your Order </span>
          <span className='header-optiontwo'>Prime</span>
       </div>
       
       <div className='header-optionbasket'>
        <ShoppingCartIcon/>
       </div>
       </div>


    </div>
    
    <div className='header-bottom'>
      <ul>
        <li>
        <div className='menu'>
          <MenuIcon/>
        </div>
        </li>
        <li>All 
        
        </li>
        <li>Amazon miniTV</li>
        <li>Sell</li>
        <li>Best Seller</li>
        <li>Today's Deal</li>
        <li>Mobiles</li>
        <li>Customer Service</li>
        <li>New Releases</li>
        <li>Prime</li>
        <li>Electronics </li>
        <li>
          <div className='pic'>
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/AdhuraS1/400x39-SWM_NP._CB601299179_.jpg" alt="" />
          </div>
        </li>

        
      </ul>

    </div>
 
 <br />
  <div className='sell'>
    <div className='sellone'>
      Sell On Amazon
    </div>
   <button className='sellbtn'>
    Start Selling
   </button>
  </div>
  <br />


<div className='offer'>
  <div className='offerone'>
   <button className='offerbtn'>
     LIMITED TIME OFFER
   </button>
   <br /><br />
   <div className='offerp'>
   Become a seller on <br />
Amazon
   </div><br />
   <div className='offerpone'>
     Sell to crores of Customer with 50% off on Selling <br />
     Selling Fee* on Amazon.in
   </div>
    <br /><br />
   <button className='startbtn'>
     Start Selling
   </button>
  </div>
 
   
  <div className='offerimg'>
    <img  className='img' src="https://m.media-amazon.com/images/G/31/amazonservices/landing/50_offer_May.webp" alt="" />
   
  </div>
  </div>

  
  <div className='amazon'><br /> <br />
    <div className='why'>
      Why sell on Amazon?
    </div>
   <br /> <br />

   <div class="row">
     <div class="col-12 col-md-12 col-lg-4">
       <div class="card text-black text-center bg-white pb-2">
         <div class="card-body">
           <i class="bi bi-subtract"></i>
           <img class="card-img" src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Paid_Services_INR._CB424651263_.svg" alt="" />
           <h3 class="card-title">Receive timely payments</h3>
           <p class="card-lead">Amazon ensures your payments are deposited in your bank account within 7-14 days.</p>
           
         </div>
       </div>
     </div>

     <div class="col-12 col-md-12 col-lg-4">
       <div class="card text-black text-center bg-white pb-2">
         <div class="card-body">
           <i class="bi bi-subtract"></i>
           <img class="card-img" src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Shipping._CB424651256_.svg" alt="" />
           <h3 class="card-title">Reach crores of customers</h3>
           <p class="card-lead">Sell to crores of engaged customer visiting Amazon.in desktop and through our mobile app.</p>
         
         </div>
       </div>
     </div>

     <div class="col-12 col-md-12 col-lg-4">
       <div class="card text-black text-center bg-white pb-2">
         <div class="card-body">
           <i class="bi bi-subtract"></i>
           <img class="card-img" src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Free_Shipping._CB423451590_.svg" alt="" />
           <h3 class="card-title">Stress-free 
           <br />delivery</h3>
           <p class="card-lead">Deliver 100% of India's serviceable pincodes,through Easy ship & Fulfillment by Amazon.</p>
         </div>
       </div>
     </div>
   </div> 
  </div>

  <div className='learn'>
  <p className='learnp'>Learn about Amazon Selling</p>
  <iframe width="947" height="533" src="https://www.youtube.com/embed/qLUhvBAtS4I" title="How to sell on Amazon | Step-by-step guide for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <br />
  <button className='learnbtn'>
       Start Selling
    </button>
  </div>

  <div className='year'>
    <div className='yearqts'>,,</div>
    <p className='yearp'>Since last year, my business on Amazon has grown more than 9 times</p>
    <p className='yearnm'>Priya Tyagi</p>
    <p className='yearsell'>Tied Ribbons (Amazon) </p>
  </div>
   <br />
   <div className='click'>
    Click here to learn about all the different ways your business can partner and growth with Amazon  
   </div>
   <br />
   <hr />
   <div className='what'>What are the different fees applicabe when i sell on amazon ? </div>
   <hr />
   <div className='tn'>*TnC  +</div>
   <hr />

   <div className='today'>
     <div className='sst'>
      <h1 className='ssth'>Start selling today</h1>
      <p className='sstp'>
        put your products in front of more then 300 million
         customers worldwide 
       </p>
       <button className='startbtn'>Start Selling</button>
     </div>

    <div className='todayimg'>
    <img className='tdyimg' src={azn} alt="" />
    </div>
   </div>
   <br /> <br />

   <div className='back'>
    <p className='backp'> Back to top</p>
   </div>

<footer>
  <div className='footer'>
  
  
   <ul> <br />
      <h5>Get to know us</h5>
      <p> About Us</p>
      <p> Careers</p>
      <p> Press Release</p>
      <p> Amazon Sci  ence</p>
    </ul>
    <ul> <br />
      <h5>Connect with us</h5>
      <p> Facebook</p>
      <p> Twitter</p>
      <p> Instagram</p>
     
    </ul>
    <ul> <br />
      <h5>Make Money with us</h5>
      <p> Sell on Amazon</p>
      <p> Sell under Amazon Accelerator</p>
      <p> Protect and Build Your Brand</p>
      <p> Amazon Global Selling</p>
      <p> Become an Affiliate</p>
      <p> Fulfilment by Amazon</p>
      <p>Advertise Your Products</p>
      <p>Amazon Pay on Merchants</p>
    </ul>
    <ul> <br />
      <h5>Let us Help You</h5>
      <p> COVID-19 and Amazon</p>
      <p> Your Account</p>
      <p> Returns Centre</p>
      <p> 100% Purhase Protection</p>
      <p>Amazon App Download </p>
      <p> Help</p>
    </ul>
  </div> 


<div className='footerpanel'> <br />
    <div className='logo'>
      <img className='header-img' src={img} alt="" />
    </div>
    <button className='ftbtn'>English</button>
 
    <div className='ftl'>
      <li>Australia</li> <br/>
      <li>Brazil</li>
      <li>Canada</li> 
      <li>France</li>
      <li>Germany</li>
      <li>Japan</li>
      <li>Mexico</li>
      <li>Netherlands</li>
      <li>Poland</li>
      <li>Singapore</li>
      <li>Turkey</li>
      <li>United Arab Eirates</li>
    </div>
 </div>

 <div className="footer-panel1">
   <div className='ftp1'>
    <ul> <br />
      <h5>AbeBooks</h5>
      <p> Books,art</p>
      <p> & Collectribles</p>
      
    </ul>
    <ul> <br />
      <h5>Amazon Web Services</h5>
      <p> Scalable Cloud</p>
      <p> Computing Services</p>
      
    </ul>
    <ul> <br />
      <h5>Audible</h5>
      <p> Download</p>
      <p> Audible Books</p>
      
    </ul>
    <ul> <br />
      <h5>DPReview</h5>
      <p> Digital</p>
      <p> Photography</p>
      
    </ul>
    <ul> <br />
      <h5>IMDb</h5>
      <p> Movies,TV</p>
      <p> &Celebrities</p>
      
    </ul>
  </div>
  
  <div className='ftp2'>
  <ul> <br />
      <h5>Shopbob</h5>
      <p> Designer</p>
      <p> Fashion Brands</p>
      
    </ul>
    <ul> <br />
      <h5>Amazon Business</h5>
      <p> Everything For</p>
      <p>Your Business</p>
      
    </ul>
    <ul> <br />
      <h5>Prime Now</h5>
      <p> 2-Hour Delivery</p>
      <p> on Everyday Items</p>
      
    </ul>
    <ul> <br />
      <h5>Amazon Prime Music</h5>
      <p> 100 million songs,ad-free</p>
      <p> Over 15 million podcast episodes</p>
      
    </ul>

  </div>
  <div className='ftp3'>
    <ul> <h5>amazon</h5>
      <p>Conditions of use &sale  Privacy Notice  Interest-Based Ads</p>
      <p> @ 1996-2023, Amazon, Inc. or its affilites</p>
    </ul>
  </div>
  
</div>
  

  </footer>     
  
 </>

 
 


  )
}

export default Header
import React from 'react';
import './explore.css';
import jsonData from "../travelers.json";
import { Link } from 'react-router-dom';
const Explore = () => {
  return (
    <div className="wrapper_explore">
      <div className="outer">
        <div className="card11" style={{ '--delay': -1 }}>
          <div className="content">
            <div className="img"><img src="https://swarajya.gumlet.io/swarajya/2020-05/5037bcba-d983-4d4c-bcc2-6c5bcd562033/Tirumala_090615__1_.jpg" alt="" /></div>
            <div className="details">
              <span className="name">Tirumala Tirupati Devasthanams</span>
              <p className="ppp">Tirupati Balaji Temple was built by Raja Thondaman of Thondaman dynasty which ruled the region in and around Padukottai during the 17th-20th century. There are different legends and mythology related to the construction of the temple by Raja Thondaman.</p>
            </div>
          </div>
          <a href="https://en.wikipedia.org/wiki/Tirumala_Tirupati_Devasthanams">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 0 }}>
          <div className="content">
            <div className="img"><img src="https://www.hoteldekho.com/storage/img/tourattraction/1661590746925862301s.jpg" alt="" /></div>
            <div className="details">
              <span className="name">ISKCON Tirupati</span>
              <p className="ppp">The ISKCON Temple at Tirupati is one of the major pilgrim sites of India and a centre for propagating the philosophy of Lord Krishna and teachings of Bhagavad Gita. Its founder is His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.</p>
            </div>
          </div>
          <a href="https://iskcontirupati.info/about-iskcon-tirupati/">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 1 }}>
          <div className="content">
            <div className="img"><img src="https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2019/09/DSC_3905.jpg?resize=1140%2C760&ssl=1" alt="" /></div>
            <div className="details">
              <span className="name">Chandragiri Fort</span>
              <p className="ppp">Chandragiri is a well-known fort in Tirupati. Constructed in the 11th century and used by Narasimha Saluva as his administrative centre in 1485. Chandragiri means the hill of the moon as it resembles a crescent. Raja Mahal and Rani Mahal, two well-preserved buildings are inside the fort.</p>
            </div>
          </div>
          <a href="https://en.wikipedia.org/wiki/Chandragiri">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 2 }}>
          <div className="content">
            <div className="img"><img src="https://1.bp.blogspot.com/-powfGuCQ5kU/YQ064c1LTzI/AAAAAAAAovw/jWWxnrjgmuIGy90h9GSAt2Racq5vJsaXgCLcBGAsYHQ/w1200-h630-p-k-no-nu/74614094_2516190498467986_6398249691800141824_n.jpg" alt="" /></div>
            <div className="details">
              <span className="name">Sri Vari Museum</span>
              <p className="ppp">Sri Vari Museum is a famous attraction to get a glimpse into the religious history of the region. The museum has an impressive collection of artefacts that give insights into the ancient history and architecture of the temple that includes sculptures, photographs, scriptures, temple and pooja utensils, etc.</p>
            </div>
          </div>
          <a href="https://commons.wikimedia.org/wiki/File:Srivari_Museum.jpg">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 3 }}>
          <div className="content">
            <div className="img"><img src="https://leadwinner.com/shilparamam2/images2/tirupathi1/3.JPG?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" /></div>
            <div className="details">
              <span className="name">Shilparamam</span>
              <p className="ppp">    Shilparamam has always been a popular hub of culture and traditions and this rural setting here is a veritable destination, that brings back those childhood memories of lifestyle in a village.</p>
            </div>
          </div>
          <a href="https://en.wikipedia.org/wiki/Shilparamam">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 4 }}>
          <div className="content">
            <div className="img"><img src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Waterfalls-In-Tirupati_20th-feb.jpg" alt="" /></div>
            <div className="details">
              <span className="name">Talakona WaterFalls</span>
              <p className="ppp">Talakona is a improving tourism center which is being attracted by tourists a lot which is situated near to Tirupati-Madanapalli high way, in Sri Venkateswara National Park in Chittoor District of Andhrapradesh. With a height of 270 feet, it is the tallest waterfall in Andhra Pradesh.</p>
            </div>
          </div>
          <a href="https://en.wikipedia.org/wiki/Talakona">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 5 }}>
          <div className="content">
            <div className="img"><img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/11/23/w900X450/Tiruchanur-temple.jpg?w=400&dpr=2.6" alt="" /></div>
            <div className="details">
              <span className="name">Sri Padmavathi Ammavari Temple</span>
              <p className="ppp">Goddess Padmavati wife of Lord Venkateshwara resides in the foot hill of Tirumala. The temple of goddess Padmavathi is at a distance of 5kms from Tirupati in Tiruchanoor or Alamelumangapuram. The devotees believe that a visit to goddess Padmavathi is a must before visiting Lord Venkateshwara temple in Tirumala.</p>
            </div>
          </div>
          <a href="https://en.wikipedia.org/wiki/Padmavathi_Temple">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 6 }}>
          <div className="content">
            <div className="img"><img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1525421399_20200130183215_20200130183321.png" alt="" /></div>
            <div className="details">
              <span className="name">Rock Garden</span>
              <p className="ppp">The Rock Garden is one of the best places to see in Tirupati which is considered sacred among the believers of Lord Vishnu. It is also known as Silathoranam as it has a Natural stone formation in the form of an arch.The Precambrian natural stone formation of the Rock Garden is the only one of its kind found in the continent.</p>
            </div>
          </div>
          <a href="https://en.wikipedia.org/wiki/Natural_Arch,_Tirumala_hills">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 7 }}>
          <div className="content">
            <div className="img"><img src="https://www.sterlingholidays.com/blog/wp-content/uploads/2018/04/jim.jpg" alt="" /></div>
            <div className="details">
              <span className="name">Sri Venkateswara National Park</span>
              <p className="ppp">Sri Venkateswara Wildlife Sanctuary, spread across the Kadapa and Chittoor districts of Andhra Pradesh, is located around 15 km from Tirupati. Established in 1989, Venkateshwara covers an area of 353 sq. km and is surrounded by Seshachalam and Tirumala Hills. </p>
            </div>
          </div>
          <a href="https://en.wikipedia.org/wiki/Sri_Venkateswara_National_Park">View more</a>
        </div>

        <div className="card11" style={{ '--delay': 8 }}>
          <div className="content">
            <div className="img"><img src="https://www.darshanbooking.com/wp-content/uploads/2017/08/Tirumala-Tirupati-Brahmotsavam-Dates-810x360.jpg" alt="" /></div>
            <div className="details">
              <span className="name">Srivari Brahmotsavam(Venkateswara temple)</span>
              <p className="ppp">The Sri Venkateswara Swami Temple is a Hindu temple situated in the hill town of Tirumala at Tirupati in Tirupati district of Andhra Pradesh, India. The Temple is dedicated to Venkateswara, a form of Vishnu, who is believed to have appeared on the earth to save mankind from trials and troubles of Kali Yuga. Hence the place has also got the name Kaliyuga Vaikuntha and the deity here is referred to as Kaliyuga Prathyaksha Daivam.</p>
            </div>
          </div>
          <a href="https://en.wikipedia.org/wiki/Venkateswara_Temple,_Tirumala">View more</a>
        </div>
      </div>

      <div className="res_hotel">
        <div>
          <p>Top 9 Hotels in TIRUPATI  </p>
          <Link to="/tirupati"> <img src="https://us.123rf.com/450wm/norbertsobolewski/norbertsobolewski1403/norbertsobolewski140300023/27440006-cartoon-hotel-standing-among-other-buildings.jpg?ver=6" alt="" /></Link>
            
    
        </div>
        <div>
          <p>Top 9 Restaurants in TIRUPATI </p>
          <Link to="/tirupati_restaurants"> 
            <img src="https://img.freepik.com/free-vector/italian-restaurant-flat-design_23-2147560162.jpg" alt="" />
            </Link>
        </div>
      </div>

      {/* <p className="logo_body">
        <img src="https://cdn.glitch.global/74966f89-6b4a-4631-ad79-95f11a65e0dd/logo11.jpg?v=1697535569992" alt="" />
      </p> */}
    </div>
  );
}

export default Explore;

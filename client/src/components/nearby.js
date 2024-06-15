import React from "react";
import { Link } from "react-router-dom";
import "./nearby.css";

const Nearby = () => {
  return (
    <div className="container_top1">
      <div className="content_container_top1">
       <p> "Traveling to nearby places is like turning the page of a thrilling
        adventure novel every </p>
        
        <p>chapter reveals new experiences and exciting
        surprises."</p>
      </div>

      <div className="container1">
        <div >
          <p className="content_container1">Top 9 BEST places to visit near TIRUPATI</p>
        </div>
        <div className="image_container1">
        <div>
        <Link to="/mysore">
          <div className="card1" title="To know more about Mysore ... just click on it">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapUCsv6oBx5OKW9DfQppyPQf7Tlvez0psxw&usqp=CAU"
                alt=""
                className="card-image1"
              />
            </div>
            <div className="card-content1">
              <h2 className="card-title">Mysore</h2>
              <p className="card-description pp">
                Mysore, often referred to as the "City of Palaces," is a
                historic city in southern India known for its rich cultural
                heritage and architectural marvels. Home to the opulent Mysore
                Palace, it boasts a harmonious blend of tradition and modernity,
                making it a top tourist destination. The city is also renowned
                for its vibrant Dasara festival, showcasing the grandeur of its
                royal past.
              </p>
            </div>
          </div>
        </Link>
        </div>

        <div>
        <Link to="/kanchi">
          <div className="card2" title="To know more about Kanchi ... just click on it">
            <div className="card-content2">
              <h2 className="card-title">Kanchipuram</h2>
              <p className="card-description p">
                Kanchipuram, in Tamil Nadu, is renowned for its "City of a
                Thousand Temples" moniker and exquisite silk sarees. It's home
                to iconic temples like Ekambareswarar and Kailasanathar,
                showcasing rich Dravidian architecture. This city offers a
                captivating blend of religious history and textile
                craftsmanship, making it a captivating destination in South
                India.
              </p>
            </div>
            <div>
              <img
                src="https://i0.wp.com/oneday.travel/wp-content/uploads/one-day-chennai-to-kanchipuram-sightseeing-tour-package-private-car-header.jpg?fit=1920%2C1280&ssl=1"
                alt=""
                className="card-image2"
              />
            </div>
          </div>
        </Link>
        </div>

        <div>
        <Link to="/madhurai">
          <div className="card1" title="To know more about Madhurai ... just click on it">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrjb91hcYievN_5JwFeHEfVybfIxzn4JMcf7dlQDLmDUzKugOAVJHTdv4WYroIEWwnrw&usqp=CAU"
                alt=""
                className="card-image1"
              />
            </div>
            <div className="card-content1">
              <h2 className="card-title">Madurai</h2>
              <p className="card-description p">
                Madurai, "Athens of the East," in Tamil Nadu, India, is famous
                for the Meenakshi Amman Temple, a cultural hub with a rich
                history, vibrant markets, and colorful festivals.
              </p>
            </div>
          </div>
        </Link>
        </div>

        <div>
        <Link to="/sriharikota">
          <div className="card2" title="To know more about Sri_Hari Kota ... just click on it">
            <div className="card-content2">
              <h2 className="card-title">Sriharikota</h2>
              <p className="card-description p">
                Sriharikota, on India's east coast, is a vital spaceport and the
                base for India's space agency, ISRO. It's known for launching
                satellites and leading India's space exploration efforts,
                significantly enhancing the nation's global standing in space
                endeavors.
              </p>
            </div>
            <div>
              <img
                src="https://images.hindustantimes.com/img/2021/08/11/1600x900/E8gmU4-VUAgxSFi_1628725699542_1628725708963.jpg"
                alt=""
                className="card-image2"
              />
            </div>
          </div>
        </Link>
        </div>

        <div>
        <Link to="/padmanaba">
          <div className="card1" title="To know more about Padmanabhaswamy ... just click on it">
            <div>
              <img
                src="https://i.pinimg.com/originals/04/f6/10/04f61025c6de687eb275aedfc51ca1ec.png"
                alt=""
                className="card-image1"
              />
            </div>
            <div className="card-content1">
              <h2 className="card-title">Padmanabhaswamy</h2>
              <p className="card-description p">
                Padma Bhushan is a prestigious Indian civilian award given by
                the President to individuals for outstanding contributions in
                diverse fields. It recognizes exceptional achievements and
                significant societal impact, inspiring others.
              </p>
            </div>
          </div>
        </Link>
        </div>

        <div>
        <Link to="/wayanad">
          <div className="card2" title="To know more about Wayanad ... just click on it">
            <div className="card-content2">
              <h2 className="card-title">Wayanad</h2>
              <p className="card-description p">
                Wayanad, in Kerala, is a scenic district known for its lush
                landscapes, rich biodiversity, and captivating natural beauty.
                It offers visitors a chance to explore tea and spice
                plantations, wildlife sanctuaries, and vibrant tribal culture.
              </p>
            </div>
            <div>
              <img
                src="https://www.wayanad.com/files/menuboxes/108009770.jpg"
                alt=""
                className="card-image2"
              />
            </div>
          </div>
        </Link>
        </div>

        <div>
        <Link to="/madikeri">
          <div className="card1" title="To know more about madikeri ... just click on it">
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/05/50/50/92/360_F_550509289_zKKYKvBTYUBfc7Utgjy0YMkDnRy5sjHa.jpg"
                alt=""
                className="card-image1"
              />
            </div>
            <div className="card-content1">
              <h2 className="card-title">Madikeri</h2>
              <p className="card-description p">
                Madikeri, a scenic hill station in Karnataka, is famous for its
                greenery, coffee plantations, and cultural attractions. Explore
                the historic Madikeri Fort, enjoy stunning sunsets at Raja's
                Seat, and savor local coffee and cuisine. It's a must-visit for
                nature and culture lovers.
              </p>
            </div>
          </div>
        </Link>
        </div>

       <div>
       <Link to="/coimbatore">
          <div className="card2" title="To know more about coimbatore ... just click on it">
            <div className="card-content2">
              <h2 className="card-title">Coimbatore</h2>
              <p className="card-description p">
                Coimbatore, the "Manchester of South India," is an industrial
                city in Tamil Nadu with a strong textile and engineering
                presence. It enjoys a pleasant climate, nestled near the Western
                Ghats, and is renowned for its educational institutions.
              </p>
            </div>
            <div>
              <img
                src="https://i.ytimg.com/vi/4ovK2GoHwDE/maxresdefault.jpg"
                alt=""
                className="card-image2"
              />
            </div>
          </div>
        </Link>
       </div>

       <div>
       <Link to="/chikkamagaluru">
          <div className="card1" title="To know more about chikkamagaluru ... just click on it">
            <div>
              <img
                src="https://rivermistresorts.com/wp-content/uploads/2021/02/chikmagalur_rivermistresorts.jpg"
                alt=""
                className="card-image1"
              />
            </div>
            <div className="card-content1">
              <h2 className="card-title">Chikkamagaluru</h2>
              <p className="card-description p">
                Chikmagalur, a picturesque hill station in Karnataka, boasts
                lush coffee plantations and stunning natural beauty. Ideal for
                nature enthusiasts, it offers trekking and bird-watching
                experiences in the Western Ghats. The cool climate and rich
                biodiversity make it a perfect escape from urban life, inviting
                travelers to unwind in serene surroundings.
              </p>
            </div>
          </div>
        </Link>
       </div>

  
      </div>
        
      </div>
    </div>
  );
};

export default Nearby;

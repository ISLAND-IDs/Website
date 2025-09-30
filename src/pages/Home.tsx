import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import ID from "../components/ID";
import 'swiper/swiper.css';
import "./pages.scss";
import { EffectCoverflow, Pagination } from 'swiper/modules';

function HomePage(){
    //API를 써서 리스트 가져오기?
    const { t } = useTranslation();
    
    return (
      <div>
        <section className="hero">
          <div className="hero-content">
            <h1>ISLAND</h1>
            <p>{t("sub_title")}</p>
          </div>
        </section>
        <section className="list">
          <h2 className="section-title">{t("latest_releases")}</h2>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="ID-list"
          >
            <SwiperSlide>
              <ID Song_Name="Dance VIP" Artist_Name="rrayy" Cover_Art="https://i1.sndcdn.com/artworks-iaMIZrXjJXGWNzuz-MkkI4g-t1080x1080.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
              <ID Song_Name="Dance VIP (Extended Mix)" Artist_Name="rrayy" Cover_Art="https://i1.sndcdn.com/artworks-iaMIZrXjJXGWNzuz-MkkI4g-t1080x1080.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
              <ID Song_Name="What I do" Artist_Name="rrayy" Cover_Art="	https://i1.sndcdn.com/artworks-AiPihJyNUlzjqg8r-EHsWvw-t1080x1080.png"/>
            </SwiperSlide>
            <SwiperSlide>
              <ID Song_Name="Next to Me" Artist_Name="rrayy" Cover_Art="https://i1.sndcdn.com/artworks-XRO8yDzyLye6vppf-fXMCyw-t1080x1080.jpg"/>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    );
}

export default HomePage;
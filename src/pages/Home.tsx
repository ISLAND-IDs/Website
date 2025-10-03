import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import Song_card from "../components/song_card";
import 'swiper/swiper.css';
import "./pages.scss";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import releases from '../releases.json';

function HomePage(){
    //API를 써서 리스트 가져오기?
    const { t } = useTranslation();
    console.log(releases);
    
    return (
      <div>
        <section className="hero">
          <div className="hero-content">
            <h1>ISLAND</h1>
            <p>{t("sub_title")}</p>
          </div>
        </section>
        <section className="releases">
          <h2 className="section-title">{t("releases")}</h2>
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
            className="list"
          >
            {releases.map((song, idx) => (
              console.log("song"),
              <SwiperSlide key={idx}>
                <Song_card {...song} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    );
}

export default HomePage;
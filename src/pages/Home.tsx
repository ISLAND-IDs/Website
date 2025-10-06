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
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
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
            {releases.map(
              (song, idx) => (
                console.log("song"),
                (
                  <SwiperSlide key={idx}>
                    <Song_card {...song} />
                  </SwiperSlide>
                )
              )
            )}
          </Swiper>
        </section>
        <section className="ID">
          <h2 className="section-title">ID</h2>
          <iframe
            width="100%"
            height="450"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2089388063&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false"
          ></iframe>
        </section>
      </div>
    );
}

export default HomePage;
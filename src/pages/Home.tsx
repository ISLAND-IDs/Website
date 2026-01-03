import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Song_card from "../components/song_card";
import Text_Card from "../components/text_card";
import MetaTag from "../components/metaTag";
import releases from '../releases.json';

import 'swiper/swiper.css';
import "./pages.scss";

function HomePage(){
    //API를 써서 리스트 가져오기?
    const { t } = useTranslation();
    const length = releases.length
    
    return (
      <div>
        <MetaTag title="ISLAND-IDs" description={t("sub_title")} keywords="Main of ISLAND" imgsrc="../asset/icon.png" url="https://island-ids.netlify.app/"/>
        <section className="hero">
          <div className="hero-content">
            <h1>ISLAND</h1>
            <p>{t("sub_title")}</p>
          </div>
        </section>
        <Text_Card title={t("releases")}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
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
                (
                  <SwiperSlide key={idx}>
                    <Song_card {...song} index={length - idx}/>
                  </SwiperSlide>
                )
              )
            )}
          </Swiper>
        </Text_Card>
        <Text_Card title="ID">
          <iframe
            width="100%"
            height="450"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2089388063&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false"
          ></iframe>
        </Text_Card>
      </div>
    );
}

export default HomePage;
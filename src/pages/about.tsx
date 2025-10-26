import { useTranslation } from "react-i18next";
import MetaTag from "../components/metaTag";
import Card from "../components/text_card";
import "./pages.scss";

function About() {
    const { t } = useTranslation();

    return (
        <div className="about">
            <MetaTag title={"ISLAND · "+ t("about_island")} description={t("about_page_description")} keywords="about" imgsrc="../asset/icon.png" url="https://island-ids.netlify.app/about/"/>
            <Card title={t("about_island")}>
                <p className="intro-text">
                    <strong>ISLAND IDs</strong>{t("what_is_ISLAND")}
                </p>
                <p className="intro-text">
                    {t("support_other_genres")}
                </p>
            </Card>
            <Card title={`🎵 ${t("what_we_do")}`}>
                <div className="services">
                    <div className="service-item">
                        <div className="service-title">{t("promotion")}</div>
                        <div>{t("promotion_desc")}</div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">{t("support")}</div>
                        <div>{t("support_desc")}</div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">{t("label")}</div>
                        <div>{t("label_desc")}</div>
                    </div>
                </div>
            </Card>
            <Card title={`👥 ${t("operators")}`}>
                <div className="team-grid">
                    <div className="team-section">
                        <div className="team-role">Owner</div>
                        <a className="team-member">🎧 rrayy</a>
                    </div>
                    <div className="team-section">
                        <div className="team-role">A&R Team</div>
                        <a className="team-member" href="https://linktr.ee/speedymusic" target='_blank'>🎵 Speedy</a>
                        <a className="team-member" href="https://music.hexa.cat/" target='_blank'>🎵 hexa.cat</a>
                    </div>
                    <div className="team-section">
                        <div className="team-role">Development Team</div>
                        <a className="team-member" href="https://litt.ly/soundsmell" target='_blank'>💻 Soundsmell</a>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default About;
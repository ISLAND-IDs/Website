import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();

    return (
        <div className="about">
            <div className="card">
                <h2>{t("about_island")}</h2>
                <p className="intro-text">
                    <strong>ISLAND IDs</strong>{t("what_is_ISLAND")}
                </p>
                <p className="intro-text">
                    {t("support_other_genres")}
                </p>
            </div>
            <div className="card">
            <h2>🎵 {t("what_we_do")}</h2>
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
        </div>
        <div className="card">
            <h2>👥 {t("operators")}</h2>
            <div className="team-grid">
                <div className="team-section">
                    <div className="team-role">Owner</div>
                    <a className="team-member">🎧 rrayy</a>
                </div>
                <div className="team-section">
                    <div className="team-role">A&R Team</div>
                    <a className="team-member" href="https://linktr.ee/speedymusic">🎵 Speedy</a>
                    <a className="team-member" href="https://music.hexa.cat/">🎵 hexa.cat</a>
                </div>
                <div className="team-section">
                    <div className="team-role">Development Team</div>
                    <a className="team-member" href="https://litt.ly/soundsmell">💻 Soundsmell</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;
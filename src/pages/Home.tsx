import { useTranslation } from "react-i18next";
import "./pages.scss";

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
            <section className="ID-list">

            </section>
        </div>
    )
}

export default HomePage;
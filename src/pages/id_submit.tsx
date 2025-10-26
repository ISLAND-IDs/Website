import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MetaTag from "../components/metaTag";

function SubmitPage() {
  const containerRef = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState(1700);
  const { t } = useTranslation();

  useEffect(() => {
    const iframe = containerRef.current;
    const width = iframe?.clientWidth;

    if (iframe && width != undefined){
      if (width < 600) {
        setHeight(1700 + (600 - width));
      }
    }
  }, []);

  return (
    <div className="submit_form">
      <MetaTag title={"ISLAND · "+ t("submit_id")} description={t("submit_id_page_description")} keywords="submit" imgsrc="../asset/icon.png" url="https://island-ids.netlify.app/submission/"/>
      <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSetYQu8xbPS9Ndz5ncRogDczAnL6vlLbrNPz-b4qDq9TiDSVw/viewform?embedded=true"
      ref={containerRef}
       style={{
          height: `${height}px`
        }}
      >
      Loading...
      </iframe>
    </div>
  );
}

export default SubmitPage;

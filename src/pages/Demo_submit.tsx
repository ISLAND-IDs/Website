import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MetaTag from "../components/metaTag";

function DemoPage() {
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
      <MetaTag title={"ISLAND · "+ t("submit_demo")} description={t("submit_demo_page_description")} keywords="submit" imgsrc="../asset/icon.png" url="https://island-ids.netlify.app/demo/"/>
      <iframe
      src="" // TODO: Add demo submission Google form link here
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

export default DemoPage;

import { useEffect, useRef, useState } from 'react';

function SubmitPage() {
  const containerRef = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState(1700);

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

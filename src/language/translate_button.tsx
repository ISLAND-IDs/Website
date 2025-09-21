import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
    lng: "ko-KR",
    fallbackLng: {
      "ko-KR": ["ko-KR"],
      default: ["en-US"],
    },
    debug: true,
    defaultNS: "translation",
    ns: "translation",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

function TranslateButton() {
  const { t } = useTranslation();
  const onChangeLang = () => {
    i18n.language === "ko"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ko");
  };
  
  return (<button className="language-toggle" onClick={() => onChangeLang()}>{t("change_language")}</button>)
}

export default TranslateButton;
import { useTranslation } from "react-i18next";
import "./i18n/i18n"


const LanguageHelper = (stringContent: string): string => {

    const { t } = useTranslation();
    const trnlang: string = t(stringContent);

    return trnlang;
}

export default LanguageHelper;
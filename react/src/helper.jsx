import { FormattedMessage } from 'react-intl';

export const getTranslation = (sentence, params = {}) => {

    return <FormattedMessage id={sentence}></FormattedMessage>
};

export const getSupportedLocales = () => ({
    'en': require('./locales/en.json'),
    'zh': require('./locales/zh.json'),
});

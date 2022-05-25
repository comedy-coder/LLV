import '@shared/assets/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '@styles/styles.scss';

import { ConfigProvider } from 'antd';

import React, { Suspense, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import locale from '@locale/index';

import { LanguageSelector } from '@modules/setting/settingStore';

import PublicPage from '../routers/component/PublicPage';

const MainView = () => {
  return (
    <Suspense fallback={<></>}>
      <PublicPage />
    </Suspense>
  );
};
// For Test
const App: React.FC = () => {
  const { language } = useSelector(LanguageSelector);

  const memoLangData = useMemo(() => {
    return locale[language];
  }, [language]);

  return (
    <IntlProvider locale={language} messages={memoLangData}>
      <ConfigProvider locale={memoLangData}>
        <MainView />
      </ConfigProvider>
    </IntlProvider>
  );
};

export default App;

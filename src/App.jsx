/* eslint-disable react/forbid-prop-types */
import { Preloader } from '@/components/common';
import PropType from 'prop-types';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from '@/routers/AppRouter';
import { withTranslation, Trans } from 'react-i18next';
import i18n from './i18n';

function App({ store, persistor, t, i18n })
{
  return(
    <StrictMode>
      <div className="App-header" style={{ display: 'flex' }}>
        <h2>{t('i18n')}</h2>
        <button onClick={() => changeLanguage('vn')}>vn</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <Trans>
          Hello
        </Trans>
      </div>
      
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </StrictMode>
  )
}
// const App = ({ store, persistor, t, i18n }) => (
//   <StrictMode>
//     <div className="App-header">
//       <h2>{t('i18n')}</h2>
//       <button onClick={() => changeLanguage('vn')}>vn</button>
//       <button onClick={() => changeLanguage('en')}>en</button>
//     </div>
//     <div className="App-intro">
//       <Trans>
//         Hello
//       </Trans>
//     </div>
//     <Provider store={store}>
//       <PersistGate loading={<Preloader />} persistor={persistor}>
//         <AppRouter />
//       </PersistGate>
//     </Provider>
//   </StrictMode>
// );

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}

App.propTypes = {
  store: PropType.any.isRequired,
  persistor: PropType.any.isRequired
};

export default withTranslation('translations')(App);

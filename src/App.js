import './App.css';
import i18n from 'i18next'
import { Suspense } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import english from './english.json'
import german from './german.json'

const translationEn=english
const translationGe=german

i18n.use(initReactI18next).init({
  resources:{
    en:{translation:translationEn},
    ge:{translation:translationGe}
  },
  lng:'en',
  fallbackLng:'en',
  interpolation:{escapeValue:false}
})

function App() {
  const {t}=useTranslation()
  const onLangChange=(e)=>{
    i18n.changeLanguage(e.target.value)
  }
  return (
    <Suspense fallback='Loading...'>
    <div className="App">
      <h1>{t('translation.data')}</h1>
      <select name='language' onChange={onLangChange}>
        <option value='en'>English</option>
        <option value='ge'>German</option>
      </select>
    </div>
    </Suspense>
  );
}

export default App;

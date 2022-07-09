1- Uygulamanın oluşturulması:  npx create-react-app app-name   --template typescript   
2- Paketlerin eklenmesi: 
          npm install --save @types/react-router-dom (yarn add react-router-dom)
          yarn add sass
          yarn add typed-redux
          yarn add react-redux
          yarn add redux-persist 
          yarn add redux-logger
          yarn add redux-saga
          yarn add redux react-redux redux-saga @types/react-redux @types/redux-saga
          yarn add -D redux-logger @types/redux-logger
          yarn add axios @types/axios
          
            implement multilanguage         
        npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector --save
        yarn add i18next react-i18next i18next-http-backend i18next-browser-languagedetector --save
        yarn add typed-i18next

3- Home page ekle: Home.page.tsx 
4-Navigasyon Ekle: Navigation.page.tsx
5-index.js 
6-Redux :
     example.action.ts
     example.action.type.tsx
     exampleReducer.ts
     example.selector.ts 
     utils>createAction.ts 
     rootREducer.ts 
     root-saga.ts 
     example.saga.ts 
     store.ts 
7. Multi language için utils > helpers> lang klasörü uuştur içine i18n klasörü aç ve in18n.ts oluştur
8.Multi language için utils > helpers> lang  kaösürne LanguageHelper oluştur 
9.index.js  import { Suspense } from 'react'   ekle 
10 Multi language  <Suspense fallback={<span>Loaading</span>}>  </suspense> ekle 
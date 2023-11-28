# Ecommerce-Webstore
Ecommerce MERN stack app with REDUX
<img src="./frontend/public/images/ecommerce-screen.png">

## Features

- Responsywny nowoczesny design
- Możliwość rejestracji użytkownika - zapewnienie bezpieczeństwa dzięki wykorzystaniu JWT token oraz szyfrowania haseł przechowywanych w bazie danych
- W pełni funkcjonalny koszyk (zwiększanie / zmiejszanie ilości produktów w koszyku)
- Profil użytkownika - możliwość zmiany danych podaych podczas rejestracji
- Przedstawienie dokonanych transakcji na konie poszczególnych użytkowników
- Automatyczna kontrola ilości dostępnych produktów

## MERN stack
 - Oprogramowanie stworzone zostało w techologiach MERN (MongoDB,ExpressJS, React,NodeJS). Przed podjęciem kolejnych kroków upewnij się, że NodeJS jest zainstalowany na Twoim komputerze
 - Utwórz bazę danych MongoDB i zachowaj MongoDB URI (np. mongodb://localhost:27017 w przypadku instalacji lokalnej)

## .ENV FILES
Zmodyfikuj plik `example.envexample` w folderze `./backend` oraz `./backend/DBseeder` zmieniając nazwę na `.env`. Wprzypadku obu pliów uzupełnij danymi zmienne MONGO_URI,PORT,JWT_SECRET np.
```
MONGO_URI=mongodb://127.0.0.1:27017/fashionstore
PORT=5000
JWT_SECRET=abcd1234
```


## INSTALL DEPENDENCIES
Zainstaluj potrzebne zależności. W tym celu przejdź do folderu frontend `cd .\frontend\` oraz wykonaj w terminalu komendę `npm install`. Następnie powtórz czynność w folderze backend `cd ..` `cd .\backdend\` `npm install`

## DB SEEDER
Przejdź do folderu `backend\data_seeder` i uruchom w następującej kolejności pliki js które uzupełnią bazę danych przykładowymi danymi `cd .\data_seeder\` `node .\importUsers.js` `node .\importProducts.js`.
Dane przykładowego użytkownika: `email: user@email.com` `password:123456`

## RUNNING THE SOFTWARE
Będąc w folderze `.\backend` wykonaj komendę `nodemon .\server.js`. Jeśli instalacja i połączenie z bazą danych są poprawne w konsoli powinien pojawić się komunikat `Connected to database`. Otwórz drugi terminal i będąc w folderze `.\frontend` wykonaj komendę `npm start`. Zostanie uruchomiony React Developement erver

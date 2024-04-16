# StarWars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Общая информация

Этот проект был создан с помощью фреймворка Angular CLI. Главные положения по запуску проекта локально приведены выше. 

Идея веб-приложение основан на вселенной "Star Wars" Джорджа Лукаса, позволяет пользователям исследовать персонажей, планеты, звездолеты и франшизы.

Вся информация о вселенной "Star Wars" была взята из открытого API - https://swapi.dev/documentation

Хостинг сделал с помощью Firebase.

Ссылка https://starwars-ac3c5.web.app/home


## Этапы разработки
Базовый макет веб-приложения был построен с помощью компонентов. Component - это абстракция которая является основой для любого Angular приложения. Это позволяет декомпозировать большой проект в небольшие независимые компоненты со своими обьектами.
Здесь тоже все главные страницы и обьекты представляют собой отдельные компоненты.

Маршрутизация внутри сайта был реализован с помощью модуля RouterModule. Для каждого компонента или же любой сущности из вселенной звездных войн есть свой маршрут что является очень удобным для пользователей.

Я хотел сделать приложение в духе 'wikipedia' и 'google'. Поэтому у нас в домашней странице сайта есть поисковое поле которая позволяет по ключевым словам искать любые сущности из звездных войн!    
   Кроме того в каждой категорий(персонажи, планеты, фильмы и т.д) представлен каталог самых популярных персонажей, планет и т.д и реализован поиск по категориям.

Обработка API запросов был сделан с помощью еще одного Angular инструмента services. Это позволило разделить данные и функций приложения, которая была использована в разных компонентах.


## Совершенствование

Хотел добавить backend часть с помощью Django где была бы возможность авторизации и оставление комментариев под фильмами, персонажами и т.д.   

Также не успел добавить фотографий для каждой сущности и реализовать некоторые стилистические решения 

В дальнейшем планирую развивать это веб-приложения и добавить вышеперечисленные улучшения.


## Заключение

Этот продукт станет отличным инструментом для людей которые изучают вселенную "Star Wars", пишут статий и рецензий на эту тему, создают фанфики или же для простых обывателей которые каждый год пересматривают эту великую франшизу.

Да пребудет с тобой Сила!



# frontend

## Установка npm пакетов
```
npm install
```

### Установка Vue клиента и компонентов для дальнейшей работы
```
npm install @vue/cli-service -g
npm install vuefire firebase
npm install js-cookie
```

### Установка расширения Iconify и соответстующих пакетов
```
npm install --save-dev @iconify/vue
npm install --save-dev @iconify-icons/simple-icons @iconify-icons/gg @iconify-icons/uil @iconify-icons/carbon @iconify-icons/bi  @iconify-icons/bx
```

### Запуск локального сервера
```
npm run serve
```

### Компиляция проекта
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Строение сайта

## App.vue

Главный файл, на котором применяются стили для всей страницы.

## Main.vue

Страница, которая видна при запуске сайта(корневая).

### Структура страницы
```html
<header>
	<my-navbar :isSignedIn="isSignedIn" @changeStatus="changeStatus" />
</header>
```
Заголовок страницы, состоящий из компонента навигационной панели. 
**isSignedIn** - пропс, который задаёт, авторизован пользователь или нет
**changeStatus** - слушатель события изменения статуса авторизации

```html
<main>
	<votings-list
		:votings="votings"
		v-show="isVotingsLoading === false"
	/>
	<div ref="observer" class="observer"></div>
	<div v-show="isVotingsLoading === true">Идёт загрузка...</div>
</main>
```

Главная часть страницы. Компоненты:

**Voting List** - компонент, который хранит и отображает список голосований

**Observer** - компонент, позволяющий отслеживать достижение конца страницы

### Скрипт страницы

#### Данные:

**votings** - массив, в котором хранятся объекты голосований

**isVotingsLoading** - переменная, которая показывает, загружаются ли сейчас голосования или нет

**isSignedIn** - переменная, которая показывает, авторизован пользователь или нет

**page** - номер текущей страницы, нужен для отслеживания подгрузки голосований

**limit** - кол-во голосований, которое будет запрашиваться у сервера за запрос

**totalPages** - итоговое кол-во страниц *⌈ (общее кол-во голосований / limit)⌉*

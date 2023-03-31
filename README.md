# Taskany Colors

Пакет с темами Taskany

## Установка

```shell
$ npm i @taskany/colors
```

## Использование

```jsx
import { gray2, DarkTheme } from '@taskany/colors';

const GrayText = styled.div`
    color: ${gray2};
`;

// подключение нужной темы, как глобальных стилей styled-components

const App = () => (
    <>
        <DarkTheme />
        <GrayText>Taskany Gray Text</GrayText>
    </>
);
```

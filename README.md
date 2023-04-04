# Taskany Colors

This is a package with colors and themes, which we use in our projects.

## Install

```shell
$ npm i @taskany/colors
```

## Usage

```jsx
import { gray2, DarkTheme } from '@taskany/colors';

const GrayText = styled.div`
    color: ${gray2};
`;

// Use theme like styled-components global style

const App = () => (
    <>
        <DarkTheme />
        <GrayText>Taskany Gray Text</GrayText>
    </>
);
```

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-destructuring */
const colorLayer = require('color-layer');

const sharedConstants = {
    fontDisplay: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Ubuntu, "Arial", sans-serif',
    gapXs: '0.25rem',
    gapS: '0.5rem',
    gapSm: '0.75rem',
    gapM: '1rem',
    gapL: '2rem',
    gapXl: '4rem',
    radiusS: '4px',
    radiusM: '6px',
    radiusL: '12px',
    radiusXl: '20px',
    brandColor: '#17b978',
    colorPrimary: '#108858',
    colorPrimaryAccent: '#17b978',
    textColorPrimary: '#fff',
};

const themes = {
    light: {
        ...sharedConstants,
        textColor: 'hsl(0, 0%, 15%)',
        backgroundColor: '#f6f9fc',
    },
    dark: {
        ...sharedConstants,
        textColor: 'hsl(0, 0%, 90%)',
        backgroundColor: '#121212',
    },
};

// from 0 to 10
const levelsNumber = [...Array(11).keys()];
// [name, [hue, saturation]]
const colorsOptions = [
    ['gray', [1, 0]],
    ['warn', [30, 100]],
    ['danger', [360, 100]],
    ['link', [213, 100]],
    ['primary', [156, 100]],
];

colorsOptions.forEach(([name, [h, s]]) => {
    levelsNumber.forEach((i) => {
        const [light, dark] = colorLayer.default(h, i, s);
        themes.light[`${name}${i}`] = light;
        themes.dark[`${name}${i}`] = dark;
    });
});

module.exports = themes;

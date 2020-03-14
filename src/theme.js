import getTokens from '@kiwicom/orbit-components/lib/getTokens';

const getTheme = () =>
  getTokens({
    palette: {
      product: {
        light: '#64A6B3',
        lightHover: '#90BFC9',
        lightActive: '#388D9E',
        normal: '#119DA4',
        normalHover: '#51B7BC',
        normalActive: '#0E8187',
        dark: '#13505B',
        backgroundButtonPrimary: '#3C153B',
        backgroundButtonPrimaryHover: '#5F3F5E',
        backgroundButtonPrimaryActive: '#321231'
      }
    }
  });

export default getTheme;

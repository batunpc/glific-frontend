// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom/extend-expect';
process.env.REACT_APP_WEB_SOCKET = 'ws://localhost/socket';

jest.mock('react-media-recorder', () => {
  return {
    useReactMediaRecorder: () => {
      return {
        status: 'idle',
        error: null,
        startRecording: () => {},
        stopRecording: () => {},
        mediaBlobUrl: () => {},
        clearBlobUrl: () => {},
      };
    },
  };
});

jest.mock('react-i18next', () => {
  const reactI18next = jest.requireActual('react-i18next');
  return {
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
    initReactI18next: reactI18next.initReactI18next,
  };
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

global.URL.createObjectURL = jest.fn();

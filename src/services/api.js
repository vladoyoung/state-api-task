import dummyJson from './dummyJson.json';

export const fetchDataFromAPI = async () => {
  // Simulate an API request delay with setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyJson);
    }, 1000);
  });
};
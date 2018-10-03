export const environment = {
  production: false,
  config: {
    tenant: 'simranjeetdeol164hotmail.onmicrosoft.com',
    clientId: '5c52f36a-6ac9-48cc-aaeb-c10b9ce5d92e',
    redirectUri: window.location.origin + '/',
    postLogoutRedirectUri: window.location.origin + '/'
  },
  api: {
    clientId: 'b83dcd90-4621-4da3-ab76-362282613bad',
    apiUrl: 'https://faggruppeapiapp.azurewebsites.net/api/cosmos'
  }
};
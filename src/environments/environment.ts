// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    tenant: 'simranjeetdeol164@hotmail.com.onmicrosoft.com',
    clientId: '5c52f36a-6ac9-48cc-aaeb-c10b9ce5d92e',
    redirectUri: window.location.origin + '/',
    postLogoutRedirectUri: window.location.origin + '/'
  },
  api: {
    clientId: 'b83dcd90-4621-4da3-ab76-362282613bad',
    apiUrl: 'https://faggruppewebapp.azurewebsites.net/api/cosmos'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

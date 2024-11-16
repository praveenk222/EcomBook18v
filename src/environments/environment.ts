// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* Production/Beta URL End points */
  api:'http://fmsapicore.logiconglobal.com/api/',
  ProductUrl:"http://fmsapicore.logiconglobal.com/Uploads/Products",
  imgUrl:"http://fmsapicore.logiconglobal.com/api/Images",

  /* Local host URL end points  */
  
  // api:'http://localhost:13866/api/',
  // ProductUrl:"http://localhost:13866/Uploads/Products",
  // imgUrl:"http://localhost:13866/Images/",
azureblobUrl:'https://audiencestreetcreatives.blob.core.windows.net/videos/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

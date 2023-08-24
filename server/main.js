import { ServiceConfiguration } from "meteor/service-configuration";

Meteor.startup(() => {
  // Configuración para Google
  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        secret: process.env.GOOGLE_SECRET,
        loginStyle: "popup",
      },
    }
  );

  // Configuración para Facebook
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: process.env.FACEBOOK_APP_ID,
        secret: process.env.FACEBOOK_SECRET,
        loginStyle: "popup",
      },
    }
  );
});

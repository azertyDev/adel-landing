import type { Schema, Struct } from '@strapi/strapi';

export interface SharedWhyUsFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_us_features';
  info: {
    description: 'A single feature item for the Why Us section';
    displayName: 'Why Us Feature';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.why-us-feature': SharedWhyUsFeature;
    }
  }
}

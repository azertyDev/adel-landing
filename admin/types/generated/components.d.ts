import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_header_social_links';
  info: {
    description: 'Social media link for header contact dropdown';
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductProductFeature extends Struct.ComponentSchema {
  collectionName: 'components_product_product_features';
  info: {
    description: 'Feature highlight for product page';
    displayName: 'Product Feature';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_product_variants';
  info: {
    description: 'Product color variant with image';
    displayName: 'Product Variant';
  };
  attributes: {
    color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    image: Schema.Attribute.Media<'images'>;
  };
}

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
      'header.social-link': HeaderSocialLink;
      'product.product-feature': ProductProductFeature;
      'product.product-variant': ProductProductVariant;
      'shared.why-us-feature': SharedWhyUsFeature;
    }
  }
}

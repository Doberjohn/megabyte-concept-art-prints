import { ShopifyProduct } from './definitions';
import {unstable_noStore as noStore} from 'next/cache';

export async function fetchFromShopify({query, variables = {}}: {query: string, variables?: object}) {
   const endpoint = process.env.SHOPIFY_STORE_DOMAIN!;
   const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

   try {
      const result = await fetch(`https://${endpoint}/api/2021-10/graphql.json`, {
         method: 'POST',
         headers: new Headers({
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': key
         }),
         body: JSON.stringify({query, variables})
      });

      const jsonResponse = await result.json();
      return await jsonResponse.data.products.edges;
   } catch (error) {
      console.error('Error:', error);
   }
}

export async function getAllShopifyProducts(): Promise<ShopifyProduct[]> {
   noStore();

   return fetchFromShopify({
      query: `{
        products(sortKey: TITLE, first: 100) {
          edges {
            node {
              title
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }`
   });
}
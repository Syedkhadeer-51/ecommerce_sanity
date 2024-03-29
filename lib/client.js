import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
     projectId: 'xlsu5hos',
     dataset: 'production',
     apiVersion: '2021-10-21',
     useCdn: true,
     token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
     ignoreBrowserTokenWarning: true, 
});

const Builder = imageUrlBuilder(client);

export const urlFor = ( source ) => Builder.image(source);
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'lj6zfix0',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

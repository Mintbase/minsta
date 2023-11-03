import { MetaPage } from "@/components/metaPage";
import {
  graphQLService,
} from "@/data/graphqlService";
import { FETCH_META } from "@/data/queries/meta.graphql";
import Head from "next/head";
import { redirect } from 'next/navigation';


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<any> {
  const posts = await graphQLService({
    query: FETCH_META,
    variables: { metadataId: decodeURIComponent(params.slug) },
    network: "mainnet",
  });

  return {
    twitter: {
      card: "summary_large_image",
      title: `${process.env.NEXT_PUBLIC_APP_TITLE} - ${posts?.data?.nft_metadata?.[0]?.title}` ,
      description: posts?.data?.nft_metadata?.[0]?.description,
      siteId: "1467726470533754880",
      creator: "@nextjs",
      creatorId: "1467726470533754880",
         images: [posts?.data?.nft_metadata?.[0]?.media],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await graphQLService({
    query: FETCH_META,
    variables: { metadataId: decodeURIComponent(params.slug) },
    network: "mainnet",
  });

  if(!posts?.data?.nft_metadata?.[0]?.media) {
    redirect('/')
  }

  return (
    <main>
      <Head>
        <title>My page title</title>
      </Head>
      {posts?.data?.nft_metadata?.[0]?.media && <MetaPage meta={posts} slug={params.slug} /> } 
    </main>
  );
}

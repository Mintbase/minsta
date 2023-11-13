import { MetaPage } from "@/components/metaPage";
import { constants } from "@/constants";
import { graphQLService } from "@/data/graphqlService";
import { FETCH_META } from "@/data/queries/meta.graphql";
import Head from "next/head";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<any> {
  const posts = await graphQLService({
    query: FETCH_META,
    variables: { metadataId: decodeURIComponent(params.slug) },
    network: constants.network as "testnet" | "mainnet",
  });

  return {
    metadataBase: new URL("https://nearcon.mintbase.xyz"),
    title: `${process.env.NEXT_PUBLIC_APP_TITLE} - ${posts?.data?.nft_metadata?.[0]?.title}`,
    openGraph: {
      title: `${process.env.NEXT_PUBLIC_APP_TITLE} - ${posts?.data?.nft_metadata?.[0]?.title}`,
      description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
      siteName: `${process.env.NEXT_PUBLIC_APP_TITLE}`,
      images: [
        {
          url: posts?.data?.nft_metadata?.[0]?.media,
          width: 468,
          height: 468,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${process.env.NEXT_PUBLIC_APP_TITLE} - ${posts?.data?.nft_metadata?.[0]?.title}`,
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
    network: constants.network as "testnet" | "mainnet",
  });

  if (!posts?.data?.nft_metadata?.[0]?.media) {
    redirect("/");
  }

  return (
    <main>
      <Head>
        <title>My page title</title>
      </Head>
      {posts?.data?.nft_metadata?.[0]?.media && (
        <MetaPage meta={posts} slug={params.slug} />
      )}
    </main>
  );
}

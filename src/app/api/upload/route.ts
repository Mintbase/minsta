import { NextResponse } from "next/server";

import Bundlr from "@bundlr-network/client";
import dataUriToBuffer from "data-uri-to-buffer";
import { constants } from "@/constants";

const bundlr = new Bundlr(
  "http://node1.bundlr.network",
  "arweave",
  constants.arweaveKey
);

const generateRandomId = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


const upload = async (buffer: Buffer) => {
  const { data } = await bundlr.uploader.upload(buffer, [
    { name: 'Content-Type', value: 'image/jpeg' },
  ])

  return data.id
}

const uploadMetadata = async (buffer: Buffer) => {
  const { data } = await bundlr.uploader.upload(buffer, [
    { name: 'Content-Type', value: 'application/json' },
  ])

  return data.id
}

export async function POST(req: Request) {
  const json = await req.json();
  const { dataUri } = json;

  const imageBuffer = dataUriToBuffer(dataUri);

  const imageId = await upload(imageBuffer);

  const metadata = {
    media_hash: imageId,
    media: `https://arweave.net/${imageId}`,
    title: generateRandomId(10),
    description: generateRandomId(10),
  };

  const metadataId = await uploadMetadata(
    Buffer.from(JSON.stringify(metadata))
  );

  return NextResponse.json({
    id: metadataId,
  });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/products.json";

type Data = {
  products?: {
    img: string;
    title: string;
    description: string;
    price: number;
    id: string;
  }[];
  total?: number;
  product?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let prod = data.products;
  if (req.method == "GET") {
    res.status(200).json({ products: prod, total: prod.length });
  } else if (req.method == "POST") {
    prod.push({ ...req.body, id: `${prod.length + 1}` });
    res
      .status(201)
      .json({ product: { ...req.body, id: `${prod.length + 1}` } });
  }
}

import fishData from "../../../_data/fish.json";
import {getToken} from "next-auth/jwt";

async function handler(req, res) {
  const token = await getToken({req});

  switch (req.method) {
    case "GET":
      return res.status(200).json(
        fishData.map(fish => {
          return {
            id: fish.id,
            name: fish.name,
            matchesLoggedInUser: token?.email === fish.email,
          };
        })
      );
    default:
      return res.status(405).json({error: "method not allowed"});
  }
}

export default handler;

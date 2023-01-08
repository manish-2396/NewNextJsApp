import path from "path";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";

export default async function data(req, res) {
  const { method, body } = req;
  const jsonDirectory = path.join(process.cwd(), "pages/api");
  const productData = await fs.readFile(
    jsonDirectory + "/productData.json",
    "utf8"
  );
  const data = JSON.parse(productData);
  let newdata = data.product;

  switch (method) {
    case "POST": {
      let data1 = { ...body, id: uuidv4() };
      newdata.push(data1);

      await fs.writeFile(
        jsonDirectory + "/productData.json",
        JSON.stringify(data)
      );
      res.status(200).json({ data: "post" });
    }
    case "GET": {
      res.status(200).json({ massage: "200", data: data.product });
    }
    default: {
      res.status(404).json({ message: "something went wrong" });
    }
  }
}

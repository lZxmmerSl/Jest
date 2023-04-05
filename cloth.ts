import axios from "axios";

export async function Sale() {
  let body = {
    productId: 1,
    price: 100,
    qty: 1,
  };
  const discount = await axios.post('/get-discount', body);
  console.log(discount.data);
  let result = {
    productId: 1,
    productName: "Uniqlo",
    price: 100,
    qty: 1,
    discount: 10,
    net: 90,
  };
  return result.discount;
}

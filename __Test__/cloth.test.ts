import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Sale } from "../cloth";

describe("test Cloth Api", () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

//   it("test1", async () =>  {
//     const expectedResult = {
//       productId: 1,
//       productName: "Uniqlo",
//       price: 100,
//       qty: 1,
//       discount: 10,
//       net: 90,
//     };

//     const result = await Sale();

//     expect(result).toEqual(expectedResult);
//   });

  it("Discount 10%", async () => {
    mock
      .onPost('/get-discount', {
        productId: 1,
        price: 100,
        qty: 1,
      })
      .reply(200, {
        discount: 10,
      });

    const expectResult = 10;

    //let body = { productId: 1, qty: 1 };
    //const result = await axios.post("/get-discount", body);
    const result = await Sale();

    expect(result).toEqual(expectResult);
  });
});

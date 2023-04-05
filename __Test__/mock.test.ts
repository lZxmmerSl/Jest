import MockAdapter from "axios-mock-adapter";
import axios from "axios";

// .spec แค่ชื่อต่างกัน เพื่อความเท่ห์

describe("Test Mock Api", () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  it("Should get request", async () => {
    mock.onGet("/users").reply(200, {
      userName: "John Wick",
    });

    const expectedResult = "John Wick";

    const result = await axios.get("/users");

    expect(result.data.userName).toBe(expectedResult);
  });

  it("Should Post", async () => {
    mock
      .onPost("/add-users", {
        id: 2,
        name: "Max",
      })
      .reply(200, {
        statusCode: 1,
        status: "success",
        msg: "",
        data: [{ id: 2, name: "Max" }],
      });

      const expectResult = 1;

      // Model ของ body นั้นๆ ยัดใส่ ใน bodyrequest ของ POST
      let body = {id: 2, name: "Max"};
      const result = await axios.post("/add-users", body);

      expect(result.data.statusCode).toBe(expectResult);

  });
});

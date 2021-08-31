import { FirstFunc } from "../src/main";

describe("test", () => {
	test("return test", () => {
		expect(FirstFunc("hi")).toEqual("test:hi");
	});
});

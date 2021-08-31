export class Test {
	public a = 0;
	public readonly Str = `b:`;
	private b = 0;
	public constructor(a: number) {
		this.a = a;
	}
	public test() {
		console.log("b" + this.a);
	}
}
interface Foo {
	test(): string;
}

export class Test {
	public readonly a = 0;
	private b = 0;
	public constructor(a: number) {
		this.b = a;
	}
	public get Str(): String {
		return `b:${this.b},a:${this.a}`;
	}
}

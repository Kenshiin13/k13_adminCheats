import CommandInterface from "./interfaces/CommandInterface";

export default class Aimbot implements CommandInterface {
	readonly name: string;
	label: string;

	constructor(name: string, label: string) {
		this.name = name;
		this.label = label;
	}

	run(): void {}

	exit(): void {}

	getName(): string {
		return this.name;
	}

	getLabel(): string {
		return this.label;
	}

	setLabel(label: string) {
		this.label = label;
	}
}

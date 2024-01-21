export default interface CommandInterface {
	readonly name: string;
	label: string;

	run(): void;
	exit(): void;
	getName(): string;
	getLabel(): string;
	setLabel(label: string): void;
}

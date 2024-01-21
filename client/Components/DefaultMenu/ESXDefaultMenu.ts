import CommandInterface from "../Command/interfaces/CommandInterface";
import DefaultMenuInterface from "./interfaces/DefaultMenuInterface";

interface DefaultMenuElement {
	label: string;
	name: string;
	type: "default";
}
interface SliderMenuElement {
	label: string;
	name: string;
	type: "slider";
	min: number;
	max: number;
}
type MenuElement = DefaultMenuElement | SliderMenuElement;

export default class ESXMenuDefault implements DefaultMenuInterface {
	private ESX: any;
	readonly resourceName: string;

	constructor() {
		this.ESX = exports["es_extended"].getSharedObject();
		this.resourceName = GetCurrentResourceName();
	}

	open(commands: Record<string, CommandInterface>): void {
		const elements: MenuElement[] = Object.entries(commands).map(([name, command]) => {
			return {
				label: command.getName(),
				name: name,
				type: "default",
			};
		});

		this.ESX.UI.Menu.Open(
			"default",
			this.resourceName,
			`${this.resourceName}_open`,
			elements,
			this.onSubmit,
			this.onCancel
		);
	}

	onSubmit(data, menu) {}

	onCancel(data, menu) {}
}

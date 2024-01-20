import DefaultMenuInterface from "./interfaces/DefaultMenuInterface";

export default class ESXMenuDefault implements DefaultMenuInterface {
	private ESX: any;

	constructor() {
		this.ESX = exports["es_extended"].getSharedObject();
	}

	open(): void {}
}

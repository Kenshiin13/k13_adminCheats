import CommandInterface from "../Command/interfaces/CommandInterface";
import DefaultMenuInterface from "../DefaultMenu/interfaces/DefaultMenuInterface";

export default class CheatMenuComponent {
	defaultMenu: DefaultMenuInterface;
	commands: CommandInterface[];
	constructor(defaultMenu: DefaultMenuInterface, commands?: CommandInterface[]) {
		this.defaultMenu = defaultMenu;
		this.commands = commands ?? [];
	}

	registerCommand() {}

	registerCommands() {}

	open() {}
}

import ErrorCodes from "../../Enums/ErrorCodes";
import CommandError from "../Command/Exception/CommandError";
import CommandInterface from "../Command/interfaces/CommandInterface";
import DefaultMenuInterface from "../DefaultMenu/interfaces/DefaultMenuInterface";

export default class CheatMenu {
	defaultMenu: DefaultMenuInterface;
	commands: Record<string, CommandInterface>;

	constructor(defaultMenu: DefaultMenuInterface, commands: Record<string, CommandInterface> = {}) {
		this.defaultMenu = defaultMenu;
		this.commands = commands;
	}

	registerCommand(command: CommandInterface) {
		this.commands[command.getName()] = command;
	}

	registerCommands(commands: CommandInterface[]) {
		commands.forEach((command) => {
			this.registerCommand(command);
		});
	}

	open() {
		this.defaultMenu.open(this.commands);
	}
}

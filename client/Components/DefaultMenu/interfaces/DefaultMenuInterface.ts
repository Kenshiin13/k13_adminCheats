import CommandInterface from "../../Command/interfaces/CommandInterface";

export default interface DefaultMenuInterface {
	open(commands: Record<string, CommandInterface>): void;
}

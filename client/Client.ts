import CheatMenu from "./Components/CheatMenu/CheatMenu";
import Aimbot from "./Components/Command/Aimbot";
import CommandInterface from "./Components/Command/interfaces/CommandInterface";
import ESXMenuDefault from "./Components/DefaultMenu/ESXDefaultMenu";

const aimbotCommand = new Aimbot("aimbot", "Aimbot");

const cheatMenu = new CheatMenu(new ESXMenuDefault());
cheatMenu.registerCommand(aimbotCommand);

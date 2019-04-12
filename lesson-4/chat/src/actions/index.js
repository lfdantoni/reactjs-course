import { types as messageTypes, receiveMessage } from "./messages";
import { types as settingTypes, setNickname, setSettingId } from "./settings";
import { types as socketTypes, setSocket, socketClosed } from "./socket";

export {
    messageTypes,
    settingTypes,
    socketTypes,
    receiveMessage,
    setNickname,
    setSocket,
    socketClosed,
    setSettingId
}
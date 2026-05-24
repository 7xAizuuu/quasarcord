import { definePluginSettings } from "@api/Settings";
import { EquicordDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    saveMessages: {
        description: "Save scheduled messages",
        type: OptionType.BOOLEAN,
        default: true
    }
});

export default definePlugin({
    name: "ScheduledMessages",
    description: "Schedule messages to be sent at a specific time",
    authors: [EquicordDevs.Crxa],
    settings,
});

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    showWarning: {
        description: "Display warning",
        type: OptionType.BOOLEAN,
        default: true
    }
});

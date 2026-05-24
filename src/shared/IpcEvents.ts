/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// Using regular enum (not const enum) so esbuild can resolve values at runtime
export enum IpcEvents {
    INIT_FILE_WATCHERS = "VencordInitFileWatchers",
    QUICK_CSS_UPDATE = "VencordQuickCssUpdate",
    OPEN_QUICKCSS = "VencordOpenQuickCss",
    GET_QUICK_CSS = "VencordGetQuickCss",
    SET_QUICK_CSS = "VencordSetQuickCss",
    UPLOAD_THEME = "VencordUploadTheme",
    DELETE_THEME = "VencordDeleteTheme",
    GET_THEMES_DIR = "VencordGetThemesDir",
    GET_THEMES_LIST = "VencordGetThemesList",
    GET_THEME_DATA = "VencordGetThemeData",
    GET_THEME_SYSTEM_VALUES = "VencordGetThemeSystemValues",
    GET_SETTINGS_DIR = "VencordGetSettingsDir",
    GET_SETTINGS = "VencordGetSettings",
    SET_SETTINGS = "VencordSetSettings",
    THEME_UPDATE = "VencordThemeUpdate",
    OPEN_EXTERNAL = "VencordOpenExternal",
    GET_UPDATES = "VencordGetUpdates",
    GET_REPO = "VencordGetRepo",
    UPDATE = "VencordUpdate",
    BUILD = "VencordBuild",
    OPEN_MONACO_EDITOR = "VencordOpenMonacoEditor",
    GET_MONACO_THEME = "VencordGetMonacoTheme",

    GET_PLUGIN_IPC_METHOD_MAP = "VencordGetPluginIpcMethodMap",

    CSP_IS_DOMAIN_ALLOWED = "VencordCspIsDomainAllowed",
    CSP_REMOVE_OVERRIDE = "VencordCspRemoveOverride",
    CSP_REQUEST_ADD_OVERRIDE = "VencordCspRequestAddOverride",

    OPEN_THEMES_FOLDER = "VencordOpenThemesFolder",
    OPEN_SETTINGS_FOLDER = "VencordOpenSettingsFolder",
    GET_RENDERER_CSS = "VencordGetRendererCss",
    RENDERER_CSS_UPDATE = "VencordRendererCssUpdate",
    PRELOAD_GET_RENDERER_JS = "VencordPreloadGetRendererJs",

    SET_TRAY_UPDATE_STATE = "VencordSetTrayUpdateState",
    TRAY_REPAIR = "VencordTrayRepair",
    TRAY_CHECK_UPDATES = "VencordTrayCheckUpdates",
    TRAY_ABOUT = "VencordTrayAbout",
    SUPPORTS_WINDOWS_MATERIAL = "VencordSupportsWindowsMaterial",

    // QuasarCord-specific events
    GET_DESKTOP_SOURCES = "QuasarCordGetDesktopSources",
    GLOBAL_KEY_DOWN = "QuasarCordGlobalKeyDown",
    RELAUNCH_APP = "QuasarCordRelaunchApp",
    SET_THUMBAR_BUTTONS = "QuasarCordSetThumbarButtons",
    THUMBAR_BUTTON_CLICK = "QuasarCordThumbarButtonClick",
    SET_WINDOW_BACKGROUND_MATERIAL = "QuasarCordSetWindowBackgroundMaterial",
    KEYBOARD_SOUNDS_START_GLOBAL = "QuasarCordKeyboardSoundsStartGlobal",
    KEYBOARD_SOUNDS_STOP_GLOBAL = "QuasarCordKeyboardSoundsStopGlobal",
    CHECK_VB_CABLE = "QuasarCordCheckVbCable",
    INSTALL_VB_CABLE = "QuasarCordInstallVbCable",
    QUASARCORD_DOWNLOAD_AND_RUN = "QuasarCordDownloadAndRun",
    WORLD_BOMB_TYPE = "QuasarCordWorldBombType",
    WORLD_BOMB_PRESS_ENTER = "QuasarCordWorldBombPressEnter",
    WORLD_BOMB_PRESS_BACKSPACE = "QuasarCordWorldBombPressBackspace",
    WORLD_BOMB_CLICK = "QuasarCordWorldBombClick",
    WORLD_BOMB_SEQUENCE = "QuasarCordWorldBombSequence",
    WORLD_BOMB_GET_CURSOR_POS = "QuasarCordWorldBombGetCursorPos",
    WORLD_BOMB_OPEN_WINDOW = "QuasarCordWorldBombOpenWindow",
}

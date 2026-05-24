@echo off
:: Wrapper .bat pour lancer quasarcord-uninstall.ps1 facilement (double-clic)
title QuasarCord -- Desinstallation
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0quasarcord-uninstall.ps1"
if %errorlevel% neq 0 pause

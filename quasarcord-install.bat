@echo off
:: Wrapper .bat pour lancer quasarcord-install.ps1 facilement (double-clic)
title QuasarCord -- Installation
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0quasarcord-install.ps1"
if %errorlevel% neq 0 pause

#!/bin/bash
# Скрипт обновления сайта на сервере (запускать в PuTTY)
set -e

echo "=== Обновление chistyy-uchastok.ru ==="
cd /var/www/chistyy-uchastok
git pull origin main
npm install
npm run build
pm2 restart chistyy-uchastok
echo "=== Готово! Сайт обновлён ==="

#!/bin/bash
# Упрощённый скрипт деплоя — Node.js 18 уже установлен на сервере
set -ex

echo "=== Шаг 1: SSH-ключ для Hermes ==="
mkdir -p ~/.ssh
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAjvSsCkuXPozCCqx+goxbqHSolTPZ2tRGUREmduB6Y+ diman@vdska" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
echo "SSH-ключ добавлен!"

echo "=== Шаг 2: Проверка Node.js ==="
echo "Node.js: $(node --version)"
echo "npm: $(npm --version)"

echo "=== Шаг 3: Установка PM2 ==="
npm install -g pm2 || true
echo "PM2: $(pm2 --version 2>/dev/null || echo 'устанавливается...')"

echo "=== Шаг 4: Установка Nginx и git ==="
apt-get update -qq || true
apt-get install -y nginx git || true
echo "Nginx и git установлены"

echo "=== Шаг 5: Клонирование проекта ==="
rm -rf /var/www/chistyy-uchastok
mkdir -p /var/www
cd /var/www
git clone https://github.com/fatmouse1985-ctrl/chistyy-uchastok.git || true
cd chistyy-uchastok
echo "Проект клонирован: $(find . -maxdepth 2 -type f | wc -l) файлов"

echo "=== Шаг 6: Установка зависимостей ==="
npm install --legacy-peer-deps || npm install
echo "Зависимости установлены"

echo "=== Шаг 7: Сборка ==="
npm run build
echo "Сборка завершена!"

echo "=== Шаг 8: Nginx ==="
cat > /etc/nginx/sites-available/chistyy-uchastok << 'NGINX'
server {
    listen 80;
    server_name chistyy-uchastok.ru www.chistyy-uchastok.ru 185.46.11.137;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX
ln -sf /etc/nginx/sites-available/chistyy-uchastok /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx || true
echo "Nginx настроен!"

echo "=== Шаг 9: PM2 ==="
cd /var/www/chistyy-uchastok
pm2 delete chistyy-uchastok 2>/dev/null || true
pm2 start "npm run start" --name chistyy-uchastok
pm2 save
pm2 startup systemd -u root --hp /root 2>&1 || true

echo ""
echo "========================================="
echo "  УСТАНОВКА ЗАВЕРШЕНА!"
echo "========================================="
echo "Сайт: http://185.46.11.137"
pm2 list

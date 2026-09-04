#!/bin/bash
set -e

echo "=== Шаг 1: Добавление SSH-ключа для Hermes ==="
mkdir -p ~/.ssh
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAjvSsCkuXPozCCqx+goxbqHSolTPZ2tRGUREmduB6Y+ diman@vdska" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
echo "SSH-ключ добавлен!"

echo "=== Шаг 2: Установка Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
echo "Node.js: $(node --version)"

echo "=== Шаг 3: Установка PM2 ==="
npm install -g pm2
echo "PM2: $(pm2 --version)"

echo "=== Шаг 4: Установка Nginx и git ==="
apt-get update -qq
apt-get install -y nginx git
echo "Nginx установлен"

echo "=== Шаг 5: Клонирование проекта с GitHub ==="
rm -rf /var/www/chistyy-uchastok
mkdir -p /var/www
cd /var/www
git clone https://github.com/fatmouse1985-ctrl/chistyy-uchastok.git
cd chistyy-uchastok
echo "Проект клонирован: $(ls -la | wc -l) файлов"

echo "=== Шаг 6: Установка зависимостей и сборка ==="
npm install
npm run build
echo "Сборка завершена!"

echo "=== Шаг 7: Настройка Nginx ==="
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
nginx -t
systemctl restart nginx
echo "Nginx настроен!"

echo "=== Шаг 8: Запуск через PM2 ==="
cd /var/www/chistyy-uchastok
pm2 start "npm run start -- -H 127.0.0.1" --name chistyy-uchastok
pm2 save
pm2 startup systemd -u root --hp /root 2>&1 || true
echo "PM2 запущен!"

echo ""
echo "========================================="
echo "  УСТАНОВКА ЗАВЕРШЕНА!"
echo "========================================="
echo "Сайт: http://185.46.11.137"
pm2 list
echo ""
echo "SSH-ключ Hermes добавлен — теперь он может подключаться напрямую"

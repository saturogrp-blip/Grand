#!/bin/bash

# Grand Interview - DigitalOcean Deployment Script
# Run this on your DigitalOcean droplet after SSH access

echo "🚀 Grand Interview - Automatic Setup Script"
echo "============================================="

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Update system
echo -e "\n${BLUE}[1/8] Updating system...${NC}"
sudo apt update && sudo apt upgrade -y

# Step 2: Install Node.js
echo -e "\n${BLUE}[2/8] Installing Node.js...${NC}"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs npm

# Step 3: Install PM2
echo -e "\n${BLUE}[3/8] Installing PM2 (process manager)...${NC}"
sudo npm install -g pm2

# Step 4: Install Nginx
echo -e "\n${BLUE}[4/8] Installing Nginx...${NC}"
sudo apt install -y nginx

# Step 5: Create app directory
echo -e "\n${BLUE}[5/8] Creating app directory...${NC}"
sudo mkdir -p /var/www/grand-interview
sudo chown -R $USER:$USER /var/www/grand-interview
cd /var/www/grand-interview

# Step 6: Install dependencies
echo -e "\n${BLUE}[6/8] Installing Node dependencies...${NC}"
npm install

# Step 7: Start with PM2
echo -e "\n${BLUE}[7/8] Starting app with PM2...${NC}"
pm2 start backend-data.js --name "grand-interview"
pm2 startup
pm2 save

# Step 8: Configure Nginx
echo -e "\n${BLUE}[8/8] Configuring Nginx...${NC}"

sudo tee /etc/nginx/sites-available/default > /dev/null <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

sudo nginx -t
sudo systemctl restart nginx

# Enable firewall
echo -e "\n${BLUE}[BONUS] Enabling firewall...${NC}"
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable

echo -e "\n${GREEN}✅ Setup Complete!${NC}"
echo "============================================="
echo -e "\n📊 Your app is running!"
echo -e "${BLUE}Access it at:${NC} http://$(hostname -I | awk '{print $1}')"
echo -e "\n${BLUE}Next steps:${NC}"
echo "1. Upload your code to /var/www/grand-interview/"
echo "2. Run: npm install"
echo "3. Run: pm2 restart grand-interview"
echo "4. (Optional) Setup domain + SSL"
echo ""
echo -e "${BLUE}Useful commands:${NC}"
echo "  pm2 status              - Check if app is running"
echo "  pm2 logs                - View app logs"
echo "  pm2 restart grand-interview - Restart app"
echo "  pm2 stop grand-interview - Stop app"
echo ""
echo "Happy hosting! 🚀"

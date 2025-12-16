# 🚀 Deployment & Hosting Guide

## Overview

Your system can be deployed in multiple ways depending on your needs:

1. **Local Development** (Your computer)
2. **Local Network** (Share with team on same network)
3. **Cloud Server** (AWS, DigitalOcean, Heroku, etc.)
4. **Serverless** (Firebase, Netlify, AWS Lambda)

---

## Option 1: Local Development (What You Have Now)

### Current Setup
```bash
npm install
node backend-data.js
# Access: http://localhost:3000/data-editor.html
```

**Best for:**
- Testing
- Single user
- Development

**Limitations:**
- Only accessible from your computer
- Can't access from other devices
- No uptime guarantee

---

## Option 2: Local Network Hosting

### Share with Your Team (Same WiFi)

**Step 1: Find Your Computer's IP Address**
```bash
# Windows
ipconfig

# Look for: IPv4 Address (e.g., 192.168.1.100)
```

**Step 2: Update Server Configuration**
Edit `backend-data.js`, change line:
```javascript
app.listen(PORT, () => {
```
To:
```javascript
app.listen(PORT, '0.0.0.0', () => {
```

**Step 3: Start Server**
```bash
node backend-data.js
```

**Step 4: Share with Team**
Team members access via:
```
http://[YOUR_IP]:3001/data-editor.html
# Example: http://192.168.1.100:3001/data-editor.html
```

**Best for:**
- Small team on same network
- Office environment
- Quick collaboration

**Limitations:**
- Only works on same network
- Requires manual IP management
- No SSL/HTTPS

---

## Option 3: Cloud Hosting (Recommended for Production)

### A. Heroku (Easiest - Free Tier Available)

**Step 1: Install Heroku CLI**
```bash
# Download from: https://devcenter.heroku.com/articles/heroku-cli
```

**Step 2: Login to Heroku**
```bash
heroku login
```

**Step 3: Create Heroku App**
```bash
heroku create your-app-name
```

**Step 4: Deploy Code**
```bash
git init
git add .
git commit -m "Initial deployment"
git push heroku main
```

**Step 5: View Live**
```bash
heroku open
```

**Cost:** Free tier (limited), $7+/month for production

---

### B. DigitalOcean (Most Affordable)

**Step 1: Create Account**
- Go to: https://www.digitalocean.com
- Sign up (Get $200 free credits)

**Step 2: Create Droplet**
- Click "Create" → "Droplet"
- Select: Ubuntu 22.04
- Size: $5/month (sufficient)
- Region: Closest to you

**Step 3: SSH into Droplet**
```bash
ssh root@[YOUR_DROPLET_IP]
```

**Step 4: Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Step 5: Upload Your Project**
```bash
# From your computer:
scp -r * root@[YOUR_DROPLET_IP]:/var/www/grand-interview/
```

**Step 6: Install Dependencies & Start**
```bash
# On droplet:
cd /var/www/grand-interview
npm install
node backend-data.js
```

**Step 7: Keep Running (Use PM2)**
```bash
sudo npm install -g pm2
pm2 start backend-data.js
pm2 startup
pm2 save
```

**Step 8: Access**
```
http://[YOUR_DROPLET_IP]:3001/data-editor.html
```

**Cost:** $5-10/month depending on traffic

---

### C. AWS EC2 (Enterprise Grade)

**Step 1: Create EC2 Instance**
- Go to: https://aws.amazon.com
- EC2 Dashboard → Launch Instance
- Choose: Ubuntu 22.04
- Instance type: t2.micro (free tier eligible)

**Step 2: Configure Security Group**
- Allow port 3001 (incoming)

**Step 3: Connect via SSH**
```bash
ssh -i your-key.pem ubuntu@[INSTANCE_IP]
```

**Step 4: Setup Node.js**
```bash
sudo apt update
sudo apt install -y nodejs npm
```

**Step 5: Deploy Project**
```bash
git clone [YOUR_REPO_URL]
cd grand-interview
npm install
node backend-data.js
```

**Cost:** Free tier (1 year), then ~$5-10/month

---

## Option 4: Docker Deployment (Advanced)

### Create Docker Container

**Step 1: Create Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "backend-data.js"]
```

**Step 2: Build Docker Image**
```bash
docker build -t grand-interview:latest .
```

**Step 3: Run Container**
```bash
docker run -p 3001:3001 -v $(pwd)/data:/app/data grand-interview:latest
```

**Step 4: Deploy to Docker Hub or Cloud**
```bash
docker tag grand-interview:latest your-username/grand-interview
docker push your-username/grand-interview
```

---

## Option 5: Serverless (AWS Lambda / Firebase)

### Firebase Hosting + Functions (Easiest Serverless)

**Step 1: Install Firebase CLI**
```bash
npm install -g firebase-tools
```

**Step 2: Initialize Firebase**
```bash
firebase login
firebase init
```

**Step 3: Deploy**
```bash
firebase deploy
```

**Cost:** Pay-as-you-go (very cheap for small usage)

---

## Recommended Setup for Production

### Architecture:
```
┌─────────────────────────────────────┐
│   CloudFlare (DNS + DDoS Protection)│
└──────────────────┬──────────────────┘
                   │
        ┌──────────▼──────────┐
        │  DigitalOcean/AWS   │
        │  Load Balancer      │
        └──────────┬──────────┘
                   │
    ┌──────────────┼──────────────┐
    │              │              │
┌───▼──┐      ┌───▼──┐      ┌───▼──┐
│Node  │      │Node  │      │Node  │
│App 1 │      │App 2 │      │App 3 │
└───┬──┘      └───┬──┘      └───┬──┘
    │              │              │
    └──────────────┼──────────────┘
                   │
        ┌──────────▼──────────┐
        │  PostgreSQL Database│
        │  (RDS)              │
        └─────────────────────┘
                   │
        ┌──────────▼──────────┐
        │  S3 Backups Storage │
        └─────────────────────┘
```

---

## Step-by-Step: Deploy to DigitalOcean (Recommended)

### Phase 1: Prepare Your Code

**1. Update backend-data.js for production**
```javascript
// At top of backend-data.js, add:
const PORT = process.env.PORT || 3001;
const ENV = process.env.NODE_ENV || 'development';

// For production, use database instead of files
if (ENV === 'production') {
    // Use PostgreSQL instead of file storage
}
```

**2. Create .env file** (Don't commit to git)
```
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://user:pass@localhost/grand_interview
JWT_SECRET=your-secret-key-here
```

**3. Create .gitignore**
```
node_modules/
.env
.env.local
data/
*.log
```

---

### Phase 2: Setup DigitalOcean Droplet

**1. Create Droplet**
- OS: Ubuntu 22.04 x64
- Plan: $5/month (2GB RAM)
- Region: Closest to users
- VPC: Enable
- Add SSH key (recommended)

**2. Initial Setup (SSH into droplet)**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs npm

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx (reverse proxy)
sudo apt install -y nginx

# Install PostgreSQL (optional, for database)
sudo apt install -y postgresql postgresql-contrib
```

**3. Create App Directory**
```bash
sudo mkdir -p /var/www/grand-interview
sudo chown $USER:$USER /var/www/grand-interview
cd /var/www/grand-interview
```

**4. Upload Your Code**
```bash
# From your local machine:
scp -r ./* root@[YOUR_DROPLET_IP]:/var/www/grand-interview/
```

Or use Git:
```bash
# On droplet:
cd /var/www/grand-interview
git clone https://github.com/YOUR_USERNAME/grand-interview.git .
```

**5. Install Dependencies**
```bash
cd /var/www/grand-interview
npm install --production
```

**6. Create .env file**
```bash
nano .env
# Add your environment variables
```

**7. Start with PM2**
```bash
pm2 start backend-data.js --name "grand-interview"
pm2 startup
pm2 save
```

---

### Phase 3: Setup Nginx Reverse Proxy

**1. Create Nginx Config**
```bash
sudo nano /etc/nginx/sites-available/grand-interview
```

**2. Add Configuration**
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**3. Enable Site**
```bash
sudo ln -s /etc/nginx/sites-available/grand-interview /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

### Phase 4: Setup SSL Certificate (Free with Let's Encrypt)

**1. Install Certbot**
```bash
sudo apt install -y certbot python3-certbot-nginx
```

**2. Get Certificate**
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

**3. Auto-Renewal**
```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

---

### Phase 5: Setup Domain

**1. Register Domain**
- GoDaddy, Namecheap, Google Domains, etc.

**2. Point to Your Server**
- Create A record: `your-domain.com` → Your Droplet IP
- Create CNAME: `www` → `your-domain.com`

**3. Verify DNS**
```bash
nslookup your-domain.com
# Should show your droplet IP
```

---

## Monitoring & Maintenance

### Check Server Status
```bash
# Check processes
pm2 status
pm2 logs

# Check disk space
df -h

# Check memory
free -h

# Check CPU
top
```

### Backup Data
```bash
# Backup to local machine
scp -r root@[IP]:/var/www/grand-interview/data ./backups/

# Or setup automatic backups
crontab -e
# Add: 0 2 * * * tar -czf /backups/data-$(date +%Y%m%d).tar.gz /var/www/grand-interview/data
```

### Update Application
```bash
cd /var/www/grand-interview
git pull origin main
npm install
pm2 restart grand-interview
```

---

## Cost Comparison

| Platform | Cost | Uptime | Setup Time |
|----------|------|--------|------------|
| Local | Free | Manual | 5 min |
| Heroku | $7-50/mo | 99.9% | 10 min |
| DigitalOcean | $5-20/mo | 99.9% | 30 min |
| AWS | $5-50/mo | 99.99% | 45 min |
| Firebase | Pay-as-go | 99.95% | 15 min |

**Recommended:** DigitalOcean ($5/month, easiest, great docs)

---

## Security Checklist

- [ ] Use HTTPS/SSL
- [ ] Enable firewall (UFW)
- [ ] Change default SSH port
- [ ] Disable root login
- [ ] Use strong passwords
- [ ] Setup automatic backups
- [ ] Enable rate limiting
- [ ] Add authentication to API
- [ ] Use environment variables for secrets
- [ ] Regular security updates

---

## Enable Firewall (UFW)

```bash
# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Allow Node.js (if needed)
sudo ufw allow 3001/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

---

## Add Authentication (Recommended for Production)

**Create simple auth middleware:**

```javascript
// In backend-data.js
const API_KEY = process.env.API_KEY || 'change-me';

app.use((req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    
    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    next();
});
```

**Use in requests:**
```bash
curl -H "x-api-key: your-secret-key" http://localhost:3001/api/data
```

---

## Troubleshooting Deployment

### Port Already in Use
```bash
# Find process using port 3001
sudo lsof -i :3001

# Kill process
kill -9 [PID]
```

### PM2 Not Starting App
```bash
# Check logs
pm2 logs grand-interview

# Restart
pm2 restart grand-interview

# Or manually start
node backend-data.js
```

### Nginx Not Working
```bash
# Test config
sudo nginx -t

# Check logs
sudo tail -f /var/log/nginx/error.log

# Restart
sudo systemctl restart nginx
```

### Database Connection Issues
```bash
# Test connection
psql -h localhost -U postgres -d grand_interview

# Check PostgreSQL status
sudo systemctl status postgresql
```

---

## Quick Deploy Commands (DigitalOcean)

```bash
# Login to droplet
ssh root@[YOUR_IP]

# Setup directory
mkdir -p /var/www/grand-interview && cd /var/www/grand-interview

# Copy files (from local machine)
scp -r ./* root@[YOUR_IP]:/var/www/grand-interview/

# Install and start
npm install
pm2 start backend-data.js
pm2 startup && pm2 save

# Configure Nginx
# [Follow Phase 3 above]

# Setup SSL
# [Follow Phase 4 above]

# Point domain
# [Follow Phase 5 above]

# Done! Access at: https://your-domain.com
```

---

## Next Steps

1. **Choose hosting** (DigitalOcean recommended)
2. **Follow deployment steps** for your chosen platform
3. **Test thoroughly** in production
4. **Setup monitoring** (PM2 Plus, DataDog, etc.)
5. **Backup regularly** (Critical!)
6. **Plan for scaling** (Load balancers, databases)

---

**Choose your deployment path and let me know if you need help with specific steps!**

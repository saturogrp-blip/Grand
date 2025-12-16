# Grand Interview - Deploy to DigitalOcean (Windows)
# Run this script to deploy your project to DigitalOcean

Write-Host @"
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║      Grand Interview - DigitalOcean Deployment Script         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
"@ -ForegroundColor Cyan

# Function to get user input
function Get-UserInput {
    param([string]$Prompt)
    Write-Host $Prompt -ForegroundColor Yellow
    return Read-Host
}

# Step 1: Get DigitalOcean IP
Write-Host "`n[1/5] DigitalOcean Droplet Setup" -ForegroundColor Blue
$dropletIP = Get-UserInput "Enter your Droplet IP address (e.g., 192.168.1.100):"
$dropletUser = Get-UserInput "Enter username (default: root):"
if ([string]::IsNullOrEmpty($dropletUser)) { $dropletUser = "root" }

# Step 2: Check SSH connection
Write-Host "`n[2/5] Testing SSH connection..." -ForegroundColor Blue
try {
    ssh -o "StrictHostKeyChecking=no" "$($dropletUser)@$dropletIP" "echo 'SSH connection successful'" | Out-Null
    Write-Host "✅ SSH connection successful!" -ForegroundColor Green
} catch {
    Write-Host "❌ Cannot connect to droplet. Check IP and SSH key." -ForegroundColor Red
    exit 1
}

# Step 3: Run setup script on droplet
Write-Host "`n[3/5] Installing dependencies on droplet..." -ForegroundColor Blue
$setupScript = @"
#!/bin/bash
set -e

echo "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs npm

echo "Installing PM2..."
sudo npm install -g pm2

echo "Installing Nginx..."
sudo apt install -y nginx

echo "Creating app directory..."
sudo mkdir -p /var/www/grand-interview
sudo chown -R \$USER:\$USER /var/www/grand-interview

echo "Setup complete!"
"@

# Execute setup on droplet
Write-Host "Running setup script on droplet..." -ForegroundColor Cyan
ssh -o "StrictHostKeyChecking=no" "$($dropletUser)@$dropletIP" $setupScript

# Step 4: Upload files
Write-Host "`n[4/5] Uploading project files..." -ForegroundColor Blue
Write-Host "This may take a moment..." -ForegroundColor Gray

# Get project directory
$projectDir = Get-Location
$excludeItems = @("node_modules", ".git", "data\backups", ".env", "*.log")

# Create list of files to upload
$filesToUpload = @(
    "*.js",
    "*.html",
    "*.json",
    "*.md",
    "*.txt",
    "*.css"
)

Write-Host "Uploading files to $($dropletUser)@$dropletIP:/var/www/grand-interview/" -ForegroundColor Cyan

foreach ($pattern in $filesToUpload) {
    Get-ChildItem -Path $projectDir -Filter $pattern -File | ForEach-Object {
        $sourceFile = $_.FullName
        $fileName = $_.Name
        Write-Host "  → Uploading $fileName..." -ForegroundColor Gray
        
        scp -o "StrictHostKeyChecking=no" $sourceFile "$($dropletUser)@$dropletIP`:/var/www/grand-interview/$fileName" | Out-Null
    }
}

Write-Host "✅ Files uploaded successfully!" -ForegroundColor Green

# Step 5: Start application
Write-Host "`n[5/5] Starting application..." -ForegroundColor Blue

$startScript = @"
cd /var/www/grand-interview
npm install --production
pm2 start backend-data.js --name "grand-interview"
pm2 startup
pm2 save
pm2 status
"@

ssh -o "StrictHostKeyChecking=no" "$($dropletUser)@$dropletIP" $startScript

# Success message
Write-Host "`n" -ForegroundColor Green
Write-Host @"
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║           ✅ Deployment Complete!                             ║
║                                                                ║
║  Your app is now running on DigitalOcean!                     ║
║                                                                ║
║  📍 Access your app at:                                       ║
║     http://$dropletIP                                          ║
║                                                                ║
║  🔧 SSH into your droplet:                                    ║
║     ssh $dropletUser@$dropletIP                               ║
║                                                                ║
║  📊 Check app status:                                         ║
║     pm2 status                                                ║
║                                                                ║
║  📝 View app logs:                                            ║
║     pm2 logs grand-interview                                  ║
║                                                                ║
║  🔄 Restart app:                                              ║
║     pm2 restart grand-interview                               ║
║                                                                ║
║  🌐 (Optional) Setup domain:                                  ║
║     1. Register domain                                        ║
║     2. Point DNS to: $dropletIP                               ║
║     3. Setup SSL with: sudo certbot --nginx                   ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
"@ -ForegroundColor Green

Write-Host "`n💡 Tip: Save your Droplet IP for future deployments!" -ForegroundColor Yellow
Write-Host "`n✨ Your Grand Interview system is now live on the internet! 🚀" -ForegroundColor Cyan

# Security issue: Using outdated base image
FROM node:16

# Security issue: Running as root user (no USER directive)
# Security issue: Not setting working directory properly
WORKDIR /app

# Security issue: Copying everything including sensitive files
COPY . .

# Security issue: Installing packages with npm install (not npm ci)
# Security issue: Installing as root
RUN npm install

# Security issue: Exposing unnecessary port
EXPOSE 3000
EXPOSE 22

# Security issue: No health check

# Security issue: Running application as root
# Missing: USER non-root-user

# Security issue: Using shell form of CMD (can lead to signal handling issues)
CMD npm start
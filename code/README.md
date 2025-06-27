# Simple Workshop Application

This directory contains a very simple Node.js application designed for the "Perfect Pipeline" workshop. The application is intentionally basic and contains various security vulnerabilities to demonstrate different scanning tools.

## Application Structure

- `src/index.js` - Simple HTTP server (no frameworks)
- `package.json` - Minimal dependencies with vulnerable packages
- `Dockerfile` - Container configuration with security issues
- `.env` - Environment variables with exposed secrets
- `tests/` - Basic test file

## Security Issues (Intentional for Workshop)

### Application Code Issues:
1. **Hardcoded Secrets** - Credentials directly in source code
2. **Information Disclosure** - Exposing sensitive data in responses
3. **Path Traversal** - Unsafe file access without validation
4. **Excessive CORS** - Overly permissive cross-origin settings
5. **Logging Secrets** - Sensitive data in console logs

### Container Security Issues:
1. **Outdated Base Image** - Using older Node.js version
2. **Running as Root** - No non-root user configuration
3. **Exposed Ports** - Unnecessary SSH port exposure
4. **No Health Checks** - Missing container health validation
5. **Insecure Copy** - Copying all files including secrets

### Dependency Issues:
1. **Vulnerable Packages** - Outdated lodash with known CVEs
2. **Minimal Dependencies** - Easy to identify vulnerable components

## Running the Application

```bash
# Install dependencies
npm install

# Start the application
npm start
```

The application will be available at `http://localhost:3000`

## Endpoints

- `GET /` - Simple HTML page (exposes secrets in client-side code)
- `GET /health` - Health check (exposes sensitive server information)
- `GET /file/{filename}` - File access (vulnerable to path traversal)

## Container Security Issues

The Dockerfile demonstrates common container security problems:

```dockerfile
# Using outdated base image
FROM node:16

# Running as root (missing USER directive)
# Copying everything including secrets
COPY . .

# Installing as root
RUN npm install

# Exposing unnecessary ports
EXPOSE 22
```

## Workshop Learning Objectives

This simple application helps demonstrate:

1. **SAST Detection** - Hardcoded secrets and path traversal
2. **SCA Analysis** - Vulnerable dependencies (lodash 4.17.15)
3. **Container Scanning** - Outdated base image and root user
4. **Secrets Detection** - Multiple types of exposed credentials
5. **DAST Testing** - Runtime path traversal and information disclosure

## Vulnerability Examples

### 1. Hardcoded Credentials:
```javascript
const ADMIN_PASSWORD = 'admin123';
const API_KEY = 'sk_test_1234567890abcdef';
```

### 2. Path Traversal:
```javascript
// Vulnerable: No path validation
const filePath = path.join(__dirname, fileName);
fs.readFile(filePath, callback);
```

### 3. Information Disclosure:
```javascript
// Exposing internal information
server_info: process.version,
admin_password: ADMIN_PASSWORD
```

## Security Best Practices (For Reference)

- Use environment variables for secrets
- Implement input validation and sanitization
- Run containers as non-root users
- Use current, supported base images
- Implement proper error handling
- Add health checks to containers
- Use minimal, secure dependencies
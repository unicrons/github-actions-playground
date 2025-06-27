# Runtime Security Testing

This workshop module covers Dynamic Application Security Testing (DAST) and runtime security monitoring to identify vulnerabilities in running applications.

## What is Runtime Security Testing?

Runtime security testing analyzes applications while they are running to identify security vulnerabilities that may not be detectable through static analysis. This includes DAST, interactive testing, and runtime protection.

## Types of Runtime Security Testing

### Dynamic Application Security Testing (DAST):
- **Black-box testing** - Testing without source code access
- **Vulnerability scanning** - Automated security testing
- **API testing** - REST/GraphQL endpoint security
- **Authentication testing** - Login mechanism security

### Interactive Application Security Testing (IAST):
- **Real-time analysis** - Testing during application execution
- **Code coverage** - Security testing with full code visibility
- **Hybrid approach** - Combines SAST and DAST benefits

### Runtime Application Self-Protection (RASP):
- **Real-time protection** - Active security during execution
- **Attack detection** - Immediate threat identification
- **Automatic response** - Block malicious requests

## Common Runtime Vulnerabilities

### Web Application Security:
1. **SQL Injection** - Database manipulation attacks
2. **Cross-Site Scripting (XSS)** - Client-side code injection
3. **Cross-Site Request Forgery (CSRF)** - Unauthorized actions
4. **Authentication Bypass** - Access control failures
5. **Session Management** - Session hijacking vulnerabilities

### API Security:
1. **Broken Authentication** - API key/token issues
2. **Excessive Data Exposure** - Information leakage
3. **Rate Limiting** - DoS and abuse prevention
4. **Input Validation** - Injection and overflow attacks

### Infrastructure Security:
1. **Container Escape** - Runtime container security
2. **Privilege Escalation** - Unauthorized access elevation
3. **Network Attacks** - Man-in-the-middle attacks
4. **Resource Exhaustion** - DoS attacks

## Tools Used in This Module

### DAST Tools:
- **OWASP ZAP** - Web application security scanner
- **Burp Suite** - Professional web security testing
- **Nikto** - Web server scanner
- **w3af** - Web application attack framework

### API Testing:
- **Postman** - API security testing
- **REST Assured** - API test automation
- **Insomnia** - API testing platform

### Performance & Load Testing:
- **JMeter** - Load testing and performance
- **k6** - Modern load testing tool
- **Artillery** - Load testing toolkit

### Runtime Monitoring:
- **Falco** - Runtime security monitoring
- **Sysdig** - Container and application monitoring
- **Datadog** - Application performance monitoring

## Learning Objectives

By the end of this module, you will:
- Understand runtime vs. static security testing
- Learn to perform DAST scanning
- Configure API security testing
- Understand performance security testing
- Learn runtime monitoring and alerting

## Workshop Exercise

1. Perform DAST scan on the running application
2. Test API endpoints for security vulnerabilities
3. Conduct load testing for DoS scenarios
4. Analyze runtime security findings
5. Implement monitoring and alerting

## Common Testing Scenarios

### SQL Injection Testing:
```bash
# Test user input fields
curl -X POST http://app.com/api/user/1 \
  -d "id=1' OR 1=1--"
```

### XSS Testing:
```javascript
// Test script injection
<script>alert('XSS')</script>
```

### Authentication Testing:
```bash
# Test JWT token validation
curl -H "Authorization: Bearer invalid_token" \
  http://app.com/api/protected
```

## Performance Testing

### Load Testing Scenarios:
- **Normal Load** - Expected user traffic
- **Peak Load** - Maximum expected traffic
- **Stress Testing** - Beyond capacity limits
- **Spike Testing** - Sudden traffic increases

## Security Checklist

- [ ] DAST scanning integrated into CI/CD
- [ ] API security testing automated
- [ ] Authentication mechanisms tested
- [ ] Session management validated
- [ ] Input validation verified
- [ ] Performance baselines established
- [ ] Runtime monitoring configured
- [ ] Security alerts implemented

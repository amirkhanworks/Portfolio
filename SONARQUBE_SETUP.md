# SonarQube Integration Setup

This repository includes SonarQube integration for code quality analysis and security scanning.

## Pipeline Configuration

### Main Pipeline (`azurepipeline.yml`)
- **Multi-stage pipeline** with Build and Deploy stages
- **SonarQube analysis** runs on every build
- **Quality gate** must pass before deployment
- **Deployment only** happens from master branch

### PR Pipeline (`azure-pipelines-pr.yml`)
- **Dedicated PR analysis** for pull requests
- **SonarQube PR decoration** shows results in PR comments
- **Quality gate** blocks PR merge if issues found

## SonarQube Configuration

### Project Settings (`sonar-project.properties`)
- **Project Key**: `akash-portfolio`
- **Project Name**: `Akash Roy DevOps Portfolio`
- **Source Directory**: `src/`
- **Coverage Reports**: `coverage/lcov.info`

### Quality Gates
- **Security Hotspots**: Must be reviewed
- **Maintainability Rating**: A (no new issues)
- **Reliability Rating**: A (no bugs)
- **Security Rating**: A (no vulnerabilities)
- **Coverage**: Minimum 80%

## Setup Instructions

### 1. Azure DevOps Configuration
1. Go to **Project Settings** → **Service Connections**
2. Add **SonarQube Server** connection:
   - **Server URL**: Your SonarQube server URL
   - **Token**: Generate token in SonarQube
   - **Connection Name**: `SonarQube-Server`

### 2. SonarQube Server Setup
1. **Create Project** in SonarQube:
   - Project Key: `akash-portfolio`
   - Project Name: `Akash Roy DevOps Portfolio`
2. **Generate Token**:
   - Go to User → Security → Generate Tokens
   - Copy token for Azure DevOps connection

### 3. Pipeline Variables
Set these variables in Azure DevOps:
- `sonarProjectKey`: `akash-portfolio`
- `sonarProjectName`: `Akash Roy DevOps Portfolio`

## Features

### Code Quality Analysis
- **Code Smells**: Identifies maintainability issues
- **Bugs**: Detects potential runtime errors
- **Vulnerabilities**: Finds security issues
- **Duplications**: Identifies code duplication

### Coverage Analysis
- **Line Coverage**: Percentage of lines executed
- **Branch Coverage**: Percentage of branches tested
- **Function Coverage**: Percentage of functions called

### PR Integration
- **Inline Comments**: Shows issues directly in PR
- **Quality Gate**: Blocks merge if quality fails
- **Coverage Reports**: Shows test coverage changes

## Quality Standards

### Maintainability
- **Technical Debt**: < 1 hour
- **Code Smells**: 0 new issues
- **Duplications**: < 3%

### Reliability
- **Bugs**: 0 new bugs
- **Critical Issues**: 0

### Security
- **Vulnerabilities**: 0 new vulnerabilities
- **Security Hotspots**: All reviewed

### Coverage
- **Line Coverage**: > 80%
- **Branch Coverage**: > 70%

## Commands

```bash
# Run tests with coverage
npm run test:ci

# Run SonarQube analysis locally
npm run sonar

# Build optimized version
npm run build:optimized
```

## Troubleshooting

### Common Issues
1. **SonarQube Connection Failed**
   - Check service connection settings
   - Verify token permissions
   - Ensure server URL is accessible

2. **Quality Gate Failed**
   - Review SonarQube dashboard
   - Fix identified issues
   - Re-run pipeline

3. **Coverage Not Found**
   - Ensure tests are running
   - Check coverage report path
   - Verify test configuration

### Support
For issues with SonarQube integration, check:
- Azure DevOps pipeline logs
- SonarQube project dashboard
- Service connection status

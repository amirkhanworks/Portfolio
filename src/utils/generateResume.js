// Utility function to generate PDF resume from portfolio data
export const generateResumePDF = async () => {
  // This would integrate with a PDF generation library like jsPDF
  // For now, it's a placeholder for future implementation
  console.log('PDF generation functionality can be added here');
};

// Resume data structure for PDF generation
export const resumeData = {
  personalInfo: {
    name: "Akash Roy",
    title: "Senior DevOps Engineer",
    email: "akashroy.636@gmail.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    linkedin: "linkedin.com/in/akashroy05",
    github: "github.com/akash-roy-123"
  },
  summary: "Senior DevOps Engineer with 6+ years of experience driving cloud transformation initiatives for Fortune 500 companies...",
  experience: [
    {
      company: "McKinsey & Company",
      title: "Senior DevOps Engineer",
      duration: "2025 – Present",
      achievements: [
        "Accelerated deployment cycles by 60% through automated pipeline optimization",
        "Reduced cloud infrastructure costs by 40% through intelligent resource management",
        "Implemented zero-downtime deployment strategies for critical business applications"
      ]
    }
    // ... other experiences
  ],
  skills: {
    "Cloud Platforms": ["Microsoft Azure", "AWS", "Google Cloud"],
    "DevOps & CI/CD": ["Azure DevOps", "GitHub Actions", "Jenkins"],
    "Infrastructure as Code": ["Terraform", "ARM Templates", "CloudFormation"]
  },
  certifications: [
    "Azure Solutions Architect Expert (AZ-305)",
    "Azure DevOps Engineer Expert (AZ-400)",
    "Kubernetes Administrator (CKA)"
  ]
}; 
import React from 'react';
import ClientPage from '../components/ClientPage';

const techStack = [
  'Azure DevOps',
  'Pipelines',
  'Boards',
  'CI/CD',
  'DevOps Coaching',
  'Git',
  'Test Automation',
  'Environment Management',
  'Workshop Training',
  'Best Practices'
];

const bullets = [
  'Designed hands-on workshop curriculum for Azure DevOps, CI/CD, Git, Boards',
  'Trained over 300 engineers and stakeholders in two live seminar sessions',
  'Implemented CI/CD pipelines on production application with code branching',
  'Established DevOps best practices like environment separation and test automation',
  'Received appreciation for aligning teams on a common DevOps approach',
  'Created comprehensive training materials and practical exercises for skill development',
  'Mentored development teams in implementing DevOps practices on live projects'
];

const CDAC = () => {
  return (
    <ClientPage
      title="CDAC – DevOps Enablement & Training"
      techStack={techStack}
      bullets={bullets}
      recognition="Successfully trained 300+ engineers and established DevOps practices across multiple teams. Received appreciation from CDAC leadership for delivering comprehensive training and enabling cultural transformation."
      projectSummary="Collaborated with CDAC to upskill internal teams and implement DevOps on a live application. Conducted a DevOps workshop for 300+ attendees including developers, QAs, and project managers while also setting up CI/CD practices on an active project."
      duration="6 months"
      teamSize="3-person team"
      impact="300+ engineers trained"
      projectType="DevOps Training & Enablement"
    />
);
};

export default CDAC;

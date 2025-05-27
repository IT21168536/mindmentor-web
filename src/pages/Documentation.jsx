import React from 'react';
import styled from 'styled-components';
import { FaDownload, FaBook } from 'react-icons/fa';

const DocumentationSection = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--text-color);
  
  svg {
    color: var(--primary-color);
    margin-right: 15px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--light-text);
  margin-bottom: 40px;
  max-width: 800px;
  line-height: 1.7;
`;

const DocsTable = styled.div`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  margin-bottom: 60px;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 0.8fr;
  background: var(--primary-color);
  color: white;
  padding: 15px 20px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 0.8fr;
  padding: 20px;
  border-bottom: 1px solid var(--secondary-color);
  align-items: center;
  transition: var(--transition);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(0, 174, 239, 0.05);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const FileName = styled.div`
  font-weight: 500;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    &:before {
      content: 'File Name: ';
      font-weight: 600;
      color: var(--primary-color);
    }
  }
`;

const FileDescription = styled.div`
  color: var(--light-text);
  
  @media (max-width: 768px) {
    &:before {
      content: 'Description: ';
      font-weight: 600;
      color: var(--primary-color);
    }
  }
`;

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 174, 239, 0.1);
  color: var(--primary-color);
  padding: 8px 15px;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Documentation = () => {
  // These links will be updated with actual download links
  const documentLinks = [
    {
      name: 'IT2138444_Wimalarathna_D.M.A.T.pdf',
      description: 'Student contribution report',
      downloadLink: 'https://drive.google.com/file/d/1ohKTYfMFGhUMTl14LJjBtzGkopfJgxIw/view?usp=sharing' // Replace with actual link
    },
    {
      name: 'IT21355882_Chamodya_W.A.H.pdf',
      description: 'Student contribution report',
      downloadLink: 'https://drive.google.com/file/d/1gohUFyTHpEbmOYEf_5QJCXSLtJHPdehy/view?usp=sharing' // Replace with actual link
    },
    {
      name: 'IT21362958_Karunatilleke_P.T.pdf',
      description: 'Student contribution report',
      downloadLink: 'https://drive.google.com/file/d/1gohUFyTHpEbmOYEf_5QJCXSLtJHPdehy/view?usp=sharing' // Replace with actual link
    },
    {
      name: 'IT21168536_Project_Proposal_Report.pdf',
      description: 'Full research project proposal',
      downloadLink: 'https://drive.google.com/file/d/1S-1bp2_opEx_wek9vNbdaUhlNcsGjMhs/view' // Replace with actual link
    },
    {
      name: 'Progress Presentation.pdf',
      description: 'Group presentation slides for progress review',
      downloadLink: 'https://drive.google.com/file/d/1i-kAKjBbwndBwaE4oU4Wl-jUGGrh_4A9/view?usp=sharing' // Replace with actual link
    },
    {
      name: 'TAF_DOC.pdf',
      description: 'Technical approval form document',
      downloadLink: 'https://drive.google.com/file/d/15AoSS5se2a4AMEipSCNJEr8EM8MUp0X2/view?usp=sharing' // Replace with actual link
    },
    {
      name: 'research_paper.pdf',
      description: 'Research paper',
      downloadLink: 'https://drive.google.com/file/d/1j0Pe9ggXk6TvHFUZhUb7k22kGOH4BQiM/view?usp=sharing' // Replace with actual link
    }
  ];

  return (
    <DocumentationSection>
      <Container>
        <PageTitle>Mind<span>Mentor</span> Documentation</PageTitle>
        
        <SectionTitle>
          <FaBook />
          MindMentor Documentation
        </SectionTitle>
        <Description>
          Welcome to the official documentation portal for MindMentor. 
          This section provides in-depth technical, deployment, and user guidance 
          for institutions, developers, and administrators who want to understand 
          or integrate the platform.
        </Description>
        
        <SectionTitle>
          <FaBook />
          MindMentor Research Project Files
        </SectionTitle>
        <Description>
          Explore the key research documents and official submissions that supported 
          the development and academic evaluation of the MindMentor system. 
          All files are available for viewing and download.
        </Description>
        
        <DocsTable>
          <TableHeader>
            <div>📂 File Name</div>
            <div>📌 Description</div>
            <div>🔽 Download</div>
          </TableHeader>
          
          {documentLinks.map((doc, index) => (
            <TableRow key={index}>
              <FileName>{doc.name}</FileName>
              <FileDescription>{doc.description}</FileDescription>
              <DownloadLink href={doc.downloadLink} target="_blank" rel="noopener noreferrer">
                <FaDownload /> Download
              </DownloadLink>
            </TableRow>
          ))}
        </DocsTable>
      </Container>
    </DocumentationSection>
  );
};

export default Documentation; 
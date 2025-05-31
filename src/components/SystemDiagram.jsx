import React from 'react';
import styled from 'styled-components';
import systemDiagram from '../assets/images/system-diagram.png';

const DiagramContainer = styled.section`
  padding: 80px 0;
  background-color: #f0f7ff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 15px;
  }
  
  p {
    color: var(--light-text);
    max-width: 700px;
    margin: 0 auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const DiagramCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const DiagramImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`;

const DiagramCaption = styled.div`
  text-align: center;
  margin-top: 20px;
  font-style: italic;
  color: var(--light-text);
`;

const DescriptionCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
`;

const ComponentList = styled.div`
  margin-top: 20px;
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 1.3rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px 15px;
    margin-bottom: 10px;
    background-color: #f8f9fa;
    border-left: 3px solid var(--primary-color);
    border-radius: 0 5px 5px 0;
    color: var(--light-text);
  }
`;

const SystemDiagram = () => {
  return (
    <DiagramContainer id="system-diagram">
      <Container>
        <SectionTitle>
          <h2>System Architecture</h2>
          <p>A comprehensive overview of the MindMentor system architecture and its components</p>
        </SectionTitle>
        
        <ContentWrapper>
          <DiagramCard>
            <DiagramImage>
              <img src={systemDiagram} alt="MindMentor System Architecture Diagram" />
            </DiagramImage>
            <DiagramCaption>
              Figure 1: System architecture showing the integration of emotion recognition, action monitoring, noise detection, and personalized recommendations
            </DiagramCaption>
          </DiagramCard>
          
          <DescriptionCard>
            <p>The MindMentor system architecture is designed with modularity and scalability in mind, integrating multiple AI components to create a comprehensive solution for emotional well-being and academic performance enhancement.</p>
            
            <ComponentList>
              <h3>Key Components</h3>
              <ul>
                <li><strong>Emotion Recognition Module:</strong> Analyzes facial expressions and voice patterns to detect emotional states like stress, anxiety, and frustration.</li>
                <li><strong>Action Recognition System:</strong> Monitors physical behaviors and postures to identify signs of fatigue or irregular movements.</li>
                <li><strong>Noise Detection Engine:</strong> Processes environmental audio to identify disruptive noise levels that may impact concentration and well-being.</li>
                <li><strong>Data Integration Layer:</strong> Combines inputs from various sensors and preprocessing modules to create a holistic view of the user's state.</li>
                <li><strong>AI Decision Engine:</strong> Processes integrated data to make real-time decisions about appropriate interventions or recommendations.</li>
                <li><strong>Music Recommendation System:</strong> Provides personalized music selections based on detected emotional states to improve mood and focus.</li>
                <li><strong>User Interface:</strong> Delivers insights and recommendations to users through an intuitive, non-intrusive interface.</li>
              </ul>
            </ComponentList>
          </DescriptionCard>
        </ContentWrapper>
      </Container>
    </DiagramContainer>
  );
};

export default SystemDiagram; 
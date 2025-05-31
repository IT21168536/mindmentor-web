import React from 'react';
import styled from 'styled-components';

const ResearchContainer = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
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

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResearchCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 1.5rem;
  }
  
  p {
    color: var(--light-text);
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 15px;
    
    li {
      color: var(--light-text);
      margin-bottom: 8px;
    }
  }
  
  ol {
    list-style-type: decimal;
    padding-left: 20px;
    margin-bottom: 15px;
    
    li {
      color: var(--light-text);
      margin-bottom: 8px;
    }
  }
`;

const ViewDiagramButton = styled.button`
  display: block;
  margin: 40px auto 0;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #0095D9;
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ResearchSection = () => {
  // This data will be populated with the content you provide
  const researchSections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p>Mental health and emotional well-being are paramount to both academic success and workplace productivity. In contemporary educational institutions and professional environments, students and employees are increasingly exposed to significant stress, which, if unmanaged, can severely impair cognitive functions, memory retention, and overall performance.</p>
          
          <p>Traditional assessment methods, such as self-reported surveys and interviews, often fall short due to their reactive nature, subjectivity, and inability to capture the in-the-moment fluctuations in mental health. In response to these limitations, machine learning (ML) offers a promising, data-driven solution for real-time stress and emotional well-being detection.</p>
          
          <p>ML models can analyze vast amounts of data from diverse sources, including facial expressions, voice tone, physiological signals, and biometric sensors, to identify subtle patterns that human observation might miss. This capability is further enhanced when integrated with established psychological assessment tools like the Depression, Anxiety and Stress Scale (DASS-21), providing a more comprehensive view of an individual's mental health status and facilitating early detection of risks.</p>
          
          <p>Such AI-driven systems can trigger timely interventions, including personalized stress-relief exercises, adaptive workload adjustments, or mental health support, ultimately improving productivity and cognitive function in both educational and professional settings. A particularly innovative application explored in this context is the use of music recommendation systems dynamically tailored to an individual's emotional state, contributing to healthier and more productive environments.</p>
        </>
      )
    },
    {
      id: 'background',
      title: 'Background Literature',
      content: (
        <>
          <p>Mental health challenges, particularly stress, anxiety, and depression, pose significant concerns in both academic and workplace settings, driven by academic pressures, societal expectations, and fast-paced professional environments. Research indicates that unresolved stress profoundly impacts cognitive, emotional, and physical health, leading to reduced performance and job satisfaction. While tools like the DASS-21 are widely used in academic settings to assess psychological distress, traditional methods often rely on self-reported data, which can introduce bias.</p>
          
          <p>This limitation has spurred interest in real-time, proactive solutions such as machine learning for emotional monitoring and early intervention. In educational contexts, ML techniques analyzing emotional and physiological data offer personalized insights, enabling educators to adapt teaching methods and deliver interventions like mindfulness training to improve academic performance and emotional well-being.</p>
          
          <p>In the workplace, emotion and action recognition technologies, including Human Action Recognition (HAR) systems utilizing deep learning models like 3D Convolutional Neural Networks (C3D) and Long Short-Term Memory (LSTM) networks, have advanced significantly in improving productivity and employee well-being by detecting unsafe behaviors and preventing injuries. Additionally, noise recognition technology, through acoustic scene analysis using Convolutional Recurrent Neural Networks (CRNNs), helps mitigate the adverse effects of high noise levels in offices and industrial settings, which are linked to increased stress and reduced productivity.</p>
          
          <p>Despite these individual advancements, a significant gap remains in integrated solutions that combine these diverse monitoring methods into a cohesive system, though such multi-modal systems promise a more holistic understanding of well-being. The integration of emotion-aware music recommendation systems also stands out as a valuable tool for emotional management, analyzing emotional data to recommend music that regulates mood, improves focus, and reduces anxiety.</p>
        </>
      )
    },
    {
      id: 'gap',
      title: 'Research Gap',
      content: (
        <>
          <p>Current research frequently relies on <strong>Fragmented Approaches in Emotion, Action, and Acoustic Recognition</strong>, where unimodal systems focus on single forms of recognition such as facial expression, speech tone, or physical actions. These isolated systems, however, fall short in providing comprehensive insights as they miss crucial contextual information, like physical stress indicators or environmental factors such as excessive noise, leading to fragmented and limited perspectives that are inadequate for real-time, personalized emotional support.</p>
          
          <p>This leads to a <strong>Lack of Real-Time, Integrated Multimodal Systems</strong>, as despite the individual effectiveness of advanced models like CNNs, LSTMs, and CRNNs, few studies have successfully integrated them into real-time, multimodal systems for holistic workplace monitoring. The absence of real-time data fusion remains a significant barrier to developing comprehensive, context-aware emotional support systems, particularly in dynamic environments.</p>
          
          <p>Furthermore, <strong>Barriers to Real-World Deployment</strong> persist, as systems performing well in controlled lab settings often face challenges in practical environments, including privacy and ethical concerns, hardware limitations, and latency issues from processing large-scale real-time data. This hinders widespread adoption due to technical and logistical obstacles and ethical considerations associated with continuous monitoring.</p>
          
          <p>Lastly, there is a notable <strong>Lack of Personalized, Real-Time Music-Based Interventions for Adolescents</strong>, as existing AI systems primarily rely on static playlists or generalized recommendations, failing to account for specific real-time emotional needs. This critical gap necessitates AI-driven systems that can dynamically adapt playlists to users' changing emotional states, providing immediate mental well-being support.</p>
        </>
      )
    },
    {
      id: 'problem',
      title: 'Research Problem',
      content: (
        <>
          <p>In an era of rapid technological advancement and increasing mental health awareness, significant challenges persist in the development of systems designed to effectively monitor, interpret, and intervene in emotional states, particularly within educational and workplace settings where stress and emotional regulation are vital for productivity and long-term health.</p>
          
          <p><strong>Absence of All-Inclusive, Live Monitoring Systems:</strong> Current workplace monitoring systems often focus on isolated elements—emotions, physical actions, or environmental factors—failing to combine them for a holistic view of an individual's well-being. This fragmentation leads to fragmented insights, hindering effective interventions and causing delays in emotional support.</p>
          
          <p><strong>Fragmentation Across Emotion, Action, and Environmental Contexts:</strong> Systems operating in silos limit their ability to understand the interplay between emotions, physical actions, and external stimuli. For instance, a system might detect vocal stress but miss environmental stressors like noise or poor lighting influencing the emotional state. There is a pressing need for a unified, multimodal approach that integrates emotional, action-based, and environmental data in real-time for more accurate and context-aware analysis.</p>
          
          <p><strong>Inadequate Optimization for Ongoing, Practical Implementation:</strong> Models developed in controlled lab environments often fail to generalize to dynamic real-world settings like offices or educational institutions. These environments present challenges related to shifting teams, interruptions, expensive and impractical hardware, data overload, latency, and scalability, making widespread deployment difficult without significant optimization.</p>
          
          <p><strong>Addressing Privacy and Ethical Concerns in Data Usage:</strong> Real-time monitoring of sensitive emotional, physical, and environmental data raises significant issues regarding consent, data protection, and potential misuse. Many systems lack privacy-by-design features, leading to legal challenges and user resistance, thus limiting their acceptance.</p>
          
          <p><strong>Impact of Music Recommendation Systems for Emotional Regulation:</strong> While music is recognized as an effective tool for emotional regulation, the impact remains limited in delivering personalized, real-time interventions. Existing systems often rely on static playlists, failing to provide the dynamic, emotion-specific music needed for effective emotional regulation, presenting a challenge in accurately detecting user emotions and selecting contextually appropriate music in real-time.</p>
        </>
      )
    },
    {
      id: 'objectives',
      title: 'Research Objectives',
      content: (
        <>
          <p>This research aims to achieve several key objectives to address the identified challenges in mental health and academic performance:</p>
          
          <ol>
            <li>
              <strong>Development of a Real-Time Human Emotion and Physical Behavior Monitoring System</strong>
              <p>This system will leverage machine learning to classify emotional states like stress, happiness, anxiety, and frustration using facial expressions, speech patterns, or physiological signals. It will also employ sensors to identify physical behaviors and postures indicative of exhaustion or abnormal movements, and monitor workplace noise levels to detect harmful sounds. The system's core function is real-time data processing and feedback to provide immediate recommendations or interventions.</p>
            </li>
            
            <li>
              <strong>Modular and Scalable System Architecture for Diverse Work Environments</strong>
              <p>This involves creating a flexible architecture that supports various sensor configurations to adapt to different environments, prioritizing physical activity and noise monitoring in industrial settings, and emotional state detection in office spaces. The architecture must be scalable to accommodate different team sizes and environments, effectively managing multiple data streams. Crucially, it will offer sensor integration flexibility to connect with existing technologies and support cross-environment adaptation.</p>
            </li>
            
            <li>
              <strong>System Evaluation for Stress, Fatigue, and Abnormal Behavior Detection</strong>
              <p>This objective ensures the system's accuracy in precisely identifying signs of stress, fatigue, and abnormal behavior, such as slouched posture or changes in speech tone. It also demands real-time responsiveness, enabling immediate feedback or interventions when stress or harmful noise levels exceed thresholds. Furthermore, the system must demonstrate reliability across varying environmental conditions, ensuring robust performance in diverse settings.</p>
            </li>
            
            <li>
              <strong>Addressing Privacy, Ethics, and Practical Deployment Challenges</strong>
              <p>This involves ensuring compliance with privacy laws like GDPR and HIPAA through data anonymization and secure storage, along with obtaining user consent and communicating clear privacy policies. The design will avoid a "surveillance culture" by emphasizing benefits, outlining transparent data usage, and restricting access to sensitive information. Practical deployment necessitates easy integration with existing infrastructure, and the system must be acceptable to employees, perceived as a tool for well-being enhancement.</p>
            </li>
          </ol>
        </>
      )
    },
    {
      id: 'methodology',
      title: 'Methodology Overview',
      content: (
        <>
          <p>The research introduces a collaborative AI-based framework that integrates four distinct subsystems, each meticulously designed to address various aspects of student mental health and academic performance enhancement. At its core, the study focuses on developing and integrating intelligent tools for early stress identification, real-time emotional response, and personalized support through adaptive learning and therapeutic interventions.</p>
          
          <p>The methodology adheres to a modular design philosophy, allowing each subsystem to function independently while collectively contributing to a broader, integrated platform. All modules are built upon machine learning models, trained on domain-specific datasets that include academic performance indicators, stress assessment responses, environmental cues (audio/video), and music metadata. The overarching framework is structured around standard data science practices, encompassing data preprocessing, feature extraction, model training, evaluation, and system deployment within mobile or cloud environments.</p>
          
          <h3>Four Integrated Subsystems</h3>
          
          <ol>
            <li><strong>Academic Performance Prediction:</strong> Dedicated to predicting academic performance for stressed students, employing a supervised machine learning model that processes inputs such as student academic data, behavioral patterns, and stress levels. Stress, a critical predictor, is categorized using classification techniques applied to DASS-21 responses, a validated psychological scale.</li>
            
            <li><strong>Personalized Support Services:</strong> Extends stress classification to personalized support services, utilizing machine learning to classify student stress levels and recommend suitable mental health professionals based on severity and location. Logistic Regression, SVM, and Random Forest classifiers were evaluated, with model selection guided by metrics like F1-score and accuracy.</li>
            
            <li><strong>Environmental Monitoring:</strong> Focuses on environmental monitoring through real-time emotion, noise, and physical activity recognition. It leverages data streams from camera and microphone sensors, employing convolutional and recurrent deep learning models like 3D CNNs and LSTMs for action classification and harmful behavior detection. Disruptive noise is identified using spectrogram and MFCC-based features from audio data, classified by models such as CRNNs and SVMs.</li>
            
            <li><strong>Emotion-Aware Music Recommendation:</strong> Provides a real-time, emotion-aware music recommendation engine designed to support students' emotional balance and productivity. This model uses audio feature-based classification (tempo, valence, energy) to assign tracks to emotional states and generate adaptive playlists.</li>
          </ol>
          
          <h3>Implementation Lifecycle</h3>
          
          <p>Collectively, these four systems form a holistic AI ecosystem aimed at optimizing student wellness and academic performance. Each module follows a unified lifecycle involving:</p>
          
          <ul>
            <li><strong>Data Acquisition:</strong> Via mobile app questionnaires, biometric input, environment sensors, or labeled datasets</li>
            
            <li><strong>Preprocessing and Feature Engineering:</strong> Including normalization, encoding, MFCC extraction, and landmark detection</li>
            
            <li><strong>Model Training and Evaluation:</strong> Using metrics like accuracy, recall, and confusion matrix</li>
            
            <li><strong>System Integration and Deployment:</strong> With frontend and backend connected through RESTful Flask APIs, hosted on Firebase with mobile delivery via React Native</li>
          </ul>
          
          <p>The methodology emphasizes real-time adaptability, modular scalability, privacy-preserving computation, and cross-platform compatibility, adhering to ethical principles by ensuring data anonymization and user-consented boundaries. By combining academic diagnostics, therapeutic suggestions, and intelligent feedback mechanisms, the proposed system offers a novel, research-backed approach to education-driven mental health technology.</p>
        </>
      )
    }
  ];

  const scrollToSystemDiagram = () => {
    const element = document.getElementById('system-diagram');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ResearchContainer id="research">
      <Container>
        <SectionTitle>
          <h2>Research & Methodology</h2>
          <p>Learn about the research behind MindMentor and how we're addressing the challenges in educational technology and mental wellness.</p>
        </SectionTitle>
        
        <ResearchGrid>
          {researchSections.map(section => (
            <ResearchCard key={section.id} id={section.id}>
              <h3>{section.title}</h3>
              {section.content}
            </ResearchCard>
          ))}
        </ResearchGrid>
        
        <ViewDiagramButton onClick={scrollToSystemDiagram}>
          View System Architecture
        </ViewDiagramButton>
      </Container>
    </ResearchContainer>
  );
};

export default ResearchSection; 
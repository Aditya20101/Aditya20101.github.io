export type Project = {
  title: string;
  time: string;
  platform: string;
  desc: string;
  image: string;
  imagePrimaryColor?: string;
  projectUrl: string;
};

export const myProjects: Project[] = [
  {
    title: 'RF signal based UAV Identification and Classification',
    time: '',
    platform: '',
    desc: "In this study a machine learning based approach for detection and classification of radio frequency signals from drones is proposed. As data source the DroneDetectV2 data set is used. In this study, we have compared the classification results for two cases, while taking/ not taking flight modes of the drones into consideration.",
    image:
      '/assets/rf.gif',
    imagePrimaryColor: 'gray-50',
    projectUrl: 'https://github.com/Aditya20101/',
  },
  {
    title: 'Emotion Recognition',
    time: '',
    platform: '',
    desc: 'This is a deep learning based project for Emotion recognition - positive, negative or neutral from SEED-I Dataset using pretrained models like RESNET, VGG19 and VGG16. Cross-wavelet spectrum images were generated using MATLAB for classification with additional Flatten, Dense, Dropout and Batch- Normalization layers on the pretrained models.',  
    image:
      '/assets/eeg.gif',
    imagePrimaryColor: '#00b2ff',
    projectUrl: 'https://github.com/Aditya20101/Emotion-classification-using-deep-learning-and-EEG-signals',
  },
  {
    title: 'Vehicle Identification system',
    time: '',
    platform: 'Web App',
    desc: "This is a Database Management System based web application for Vehicle Owner Identification and Emission rates of respective vehicles. XAMPP server is used for database management and packages like Flask and SQLalchemy are required to be installed.",
    image:
      '/assets/veh.gif',
    imagePrimaryColor: '#FFFFFF',
    projectUrl: 'https://github.com/Aditya20101/DBMS_Project',
  },
  {
    title: 'Noise suppression',
    time: '',
    platform: '',
    desc: 'This is a Convolutional Neural Networks based project to suppress noise in speech/ audio signals. In this project, further study is done based on the losses obtained for different optimizers like Adam, Adamax, RMSprop, etc. along with SNR based comparisons.  ',
    image: '/assets/noise.gif',
    imagePrimaryColor: '#FFFF00',
    projectUrl: 'https://github.com/Aditya20101/Noise-suppression-using-deep-learning',
  },
  
];

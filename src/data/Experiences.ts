export type Experience = {
  thumbnail: string;
  title: string;
  duration: string;
  desc: string[];
  url: string;
  image: string;
  organisation: string;

  about?: string;
};

export const myExperiences: Experience[] = [
  {
    thumbnail: 'assets/dr.gif',
    title: 'Application of Image Processing Techniques for UAV Detection Using Deep Learning and Distance-Wise Analysis ',
    duration: 'Published: 3 March 2023',
    desc: [
      'Drones have many applications in our daily lives and can be employed for agricultural, military, commercial, disaster relief, research and development, and many other purposes. There has been a significant increase in the usage of small drones/unmanned aerial vehicles in recent years. Consequently, there is a rising potential for small drones to be misused for illegal activities, such as terrorism and drug smuggling. Hence, there is a need for accurate and reliable UAV identification that can be used in various environments. In this paper, different versions of the current state-of-the-art object detection model, i.e., YOLO models, are used, by working on the principles of computer vision and deep learning to detect small UAVs. To improve the accuracy of small UAV detection, this paper proposes the application of various image-processing techniques to the current detection model, which has resulted in a significant performance increase. In this study, a mAP score of 96.7% was obtained for an IoU threshold of 50% along with a precision value of 95% and a recall of 95.6%. Distance-wise analysis of drones (i.e., for close, mid, and far ranges) was also performed to measure distance-wise accuracies.',
    ],
    organisation: 'Journal: MDPI',
    url: 'https://www.mdpi.com/2174984',
    image: 'assets/dr.gif',
    },
  
];

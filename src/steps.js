import React from 'react';
import ChatBot from 'react-simple-chatbot';
import AllowButton from './AllowButton';

const SimpleForm = () => {
      return (
        <ChatBot
          headerTitle="BSWH"
          customDelay={2000}
          steps={[
            {
              id: '1',
              message: "Hey there, I'm BSWHbot! 😄",
              trigger: '2',
            },
            {
              id: '2',
              message: "I've been asked to make sure your system is ready for a Doxy.me call. Shall we get started?",
              trigger: '3'
            },
            {
              id: '3',
                options: [
                  { value: true, label: 'Yes, please', trigger: '4' },
                  { value: false, label: 'No, thanks', trigger: 'end-message' },
                ]
            },
            {
              id: '4',
              message: "Alrighty, let's start by testing your speakers. Click Play!",
              trigger: '6'
            },            
            {
                id: 'end-message',
                message: 'Okay, see you!',
                end: true,
            },
            {
              id: '6',
              options: [
                { value: true, label: 'Play', trigger: 'audio' }
              ]
            },
            {
                id: 'audio',
                component: <>
                    <iframe src={require('./tone.mp3')} allow="autoplay" style={{display:'none'}} id="iframeAudio" />
                    </>,
                asMessage: true,
                trigger: '7'

            },
            {
              id: '7',
              message: "Do you hear the sound I'm playing?",
              trigger: '8'          
            },
            {
                id: '8',
                  options: [
                    { value: true, label: 'Yes', trigger: '9' },
                    { value: false, label: 'No', trigger: 'end-message' },
                  ]
            },
            {
                id: '9',
                message: "Super 😊! That means you will hear your provider.?",
                trigger: '10'          
            },
            {
                id: '10',
                message: "Okay, now let's check your microphone and webcam.?",
                trigger: '11'          
            },
            {
                id: '11',
                options: [
                  { value: true, label: 'Okay!', trigger: '12' }
                ]
            },
            {
                id: '12',
                message: "I'll need your permission to use your microphone and webcam. When prompted, click Allow. 🙏",
                trigger: '13'          
            },     
            {
                id: '13',
                component: <AllowButton />,
                asMessage: true,
                waitAction: true           
            },       
            {
                id: '14',
                message: "Ok great, it looks like we can now access your microphone and camera!",
                trigger: '18'
                      
            },
            {
              id: '15',
              message: "Whoa, you denied access to your microphone and webcam!",
              trigger: '16'
                    
            },
            {
              id: '16',
              message: "In order for your microphone and webcam to work, you need to allow access.",
              trigger: '17'                    
            },
            {
              id: '17',
              options: [
                { value: true, label: 'Try Again!', trigger: '10' }
              ]
            },
            {
                id: '18',
                message: "Say something into your microphone?🎙️",
                trigger: '19'          
            },
            {
                id: '19',
                message: "Woohoo, I hear you loud and clear! 📢🤪",
                trigger: '20'          
            },
            {
                id: '20',
                message: "Ok, time for the webcam! Do you see a video feed of yourself?",
                trigger: 'video'          
            },
            {
                id: 'video',
                component: <></>,
                asMessage: false,
                trigger: '21'
            },
            {
                id: '21',
                  options: [
                    { value: true, label: 'Yes', trigger: '22' },
                    { value: false, label: 'No', trigger: 'end-message' },
                  ]
            },
            {
                id: '22',
                message: "Alright, you're all set for a great call! 🎉🤩"
            }            
          ]}
        />
      );
    }
  
  
  export default SimpleForm;
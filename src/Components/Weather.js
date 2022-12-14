import React from 'react';
import { Card } from 'antd';
import {LeftOutlined,RightOutlined,MoreOutlined} from '@ant-design/icons';

import cloud from '../images/Weather.fa210c686683b0657231ed581e142f8a.svg'

const Weather = () => {
    return (
    
            
            
             
           <Card
           style={{
            width:"full",
            margin:"10px"
            
            
           }}>
            <div> 
            <div style={{
                display:"flex",
                justifyContent:"space-between",
               }}>
               <div>
               <h2 style={{
                  marginBottom:"15px"
                }}>Weather</h2>
               </div>
               <div>
               <MoreOutlined/>
               </div>
               </div>
            </div>
               <div style={{
                marginTop:"60px",
                display:"flex",
                justifyContent:"space-evenly",
                marginLeft:"30px"
              
                
                
                

              }}>
                <div
                style={{width:200,
                  marginTop:"-35px",}}>
                    
               
                <h2 style={{
                     fontWeight:"bold",
                     width: 500,
                     font: "30 px",
                     textAlign: "",
                     marginLeft:"10px",
                   
                     

                }}>08:00 PM</h2>
                 <img style={{
                  width:"100px",
                  alignItems:"center",
                  marginLeft:"20px",
                  marginTop:"10px",
                  
               }} src={cloud} alt=""></img>
                <p 
                style={{
                    fontWeight:"bold",
                    marginTop:"30px",
                    fontSize:"20px",

                }}>Cloudy sunny 24'C</p>
                </div>
                <div style={{
                  
                }}>
                  <p style={{
                    textAlign:"center",
                    fontWeight:"bold"
                  }}>Wed,21 september 2022
                  <LeftOutlined />
                  <RightOutlined /></p>
              <div style={{
                display:"flex",
                gap: "30px",
              }}>
                
              <div>
               <p> 10:00 AM </p>
                        <p> 01:00 PM</p>
                        <p> 04:00 PM</p>
                        <p> 05:00 PM</p>
                        <p> 08:00 PM</p>
                        </div>
               
                        <div style={{
                          textAlign:"right",
                        }}>
                        <p>Light Rain, 27??C</p>
                        <p>Cloudy Sunny, 27??C</p>
                        <p>Cloudy, 27??C</p>
                        <p>Cloudy, 25??C</p>
                        <p>Light Rain, 26??C</p>
                </div>
              </div>
              </div>
              </div>
           </Card>
              
         
         
    );      
    
};

export default Weather;
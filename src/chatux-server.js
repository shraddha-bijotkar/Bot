const express = require('express');

const app = express();

const port = 8080;

if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
}


// set mddielware for CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});

//provide json api
app.set('json spaces', 2);
app.get('/chat', function (req, res) {

    //Get "text" parameter from request
    const userInputText = req.query.text;
    //get callback parameter for jsonp response
    const callback = req.query.callback;


    //create response object
    const response = {
        output: []
    };
    const menu = [];
    const star = [];
    star.push({label: '*', value: "*"});

    const msg = response.output;

    if (!userInputText) {

        //if inputText is empty
        msg.push({
            type: "text",
            value: "Hey, please say something."
        });

    } else {

        /*if (userInputText == "show buttons") {

            //show text and buttons
            msg.push({
                type: "text",
                value: "Ok, I'll show you buttons!",
                delayMs: 500 // wait(milliseconds)
            });

            const opts = [];
            opts.push({label: 'label1', value: 'value1'});
            opts.push({label: 'label2', value: 'value2'});
            opts.push({label: 'label3', value: 'value3'});

            msg.push({type: "option", options: opts});

        } else if (userInputText == "show image") {

            //show text and image
            msg.push({
                type: "text",
                value: "Ok, I'll show you an image!",
                delayMs: 500
            });

            msg.push({
                type: "image",
                value: " https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
            });

        } 
        */   
       
        if (userInputText == "Hi"|| userInputText=="Hello" || userInputText=="Hey" || userInputText=="hi" || userInputText=="hello" || userInputText=="*"){
            
           // if (userInputText){
            
            msg.push({
                type: "text",
                value: "Hello! How may I help you?",
                delayMs: 400 
            });
            msg.push({
                type: "text",
                value: "Choose any one",
            });
            //console.log(req.query.text);
           // menu();
           //function menu(){
        
            menu.push({label: 'IP', value:1});
            menu.push({label: 'Bitrix 24', value: 2});
            menu.push({label: 'LP1', value: 3});
            menu.push({label: 'LP2', value: 4});
            menu.push({label: 'LP3', value: 5});
            menu.push({label: 'Live project', value: 6});


            msg.push({
                type: "option",
                options: menu,
            });
        }
       
            if(0<userInputText<=50){

                //echo inputText
                //console.log(userInputText);
                if(userInputText==1){
                //alert(userInputText);

                    msg.push({
                        type: "text",
                        value: "Which of these?"
                    });
                    const IP = [];
                    IP.push({label: 'Workgroups', value: "workgroups"});
                    IP.push({label: 'Letters/Induction', value: "Letters/Induction"});
                    IP.push({label: 'Application', value: "Application"});
                    IP.push({label: 'College Related', value: "College Related"});
                    IP.push({label: '*', value: "*" });
    
                    msg.push({
                        type: "option",
                        options: IP
                    });
                    
                    }
                    if(userInputText=="workgroups"){
                        const workgroup = [];
                        workgroup.push({label: 'Q. How many workgroups will an intern be a part of?/ How many workgroups should I be in?', value: "w1"});
                        workgroup.push({label: 'Q. Not able to see the task as not part of the IP workgroup.', value: "w2"});
                        workgroup.push({label: 'Q. What is the job profile? Will we be able to work only in the tech we have chosen for the internship?', value: "w3"});
                        workgroup.push({label: 'Q) I am having trouble finding the workgroup ( no workgroup is visible)', value: "w4"});
                        workgroup.push({label: 'Q) I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page', value: "w5"});
                        workgroup.push({label: 'Q) I have not been added to the technology I preferred to work on? ', value: "w6"});

                        workgroup.push({label: '*', value: "*" });
                        
                        msg.push({
                            type: "option",
                            options: workgroup
                        }) 
                    
                    }
                        
                    
                    
                        if (userInputText=="w1"){
                            msg.push({
                                type: "text",
                                value: "A) Every intern should be a part of 2 workgroup " 
                            })
                            msg.push({
                                type: "text",
                                value: 
                                "1. 202003-IP: This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup2."
                            })
                            msg.push({
                                type: "text",
                                value:
                                "202003-IP-Technology: This is a technology-specific workgroup. You will be added to the technology you had enrolled for. For example 202003-IP-Python for students who enrolled for p. If anyone has not been added to any of these workgroups, kindly message Cloud Counselage HR  regarding the same over bitrix24 platform."
                            })
                            
                    
                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w2"){
                            msg.push({
                                type: "text",
                                value: "A) Please message ‘Cloud Counselage HR’ in Bitrix24." 
                            })
                    
                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w3"){
                            msg.push({
                                type: "text",
                                value: "A) Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies." 
                            })
                    
                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w4"){
                            msg.push({
                                type: "text",
                                value: "A) Please go through the mail from which you have accepted the invite and check the task section as well." 
                            })
                    
                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w5"){
                            msg.push({
                                type: "text",
                                value: "A) Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName." 
                            })
                            msg.push({
                                type: "text",
                                value: "Ex 202003-IP-DevOps. In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups “202003-IP” which is a general workgroup and the other one is “202003-IP-Technology” which is a technology-specific workgroup." 
                            })
                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w6"){
                            msg.push({
                                type: "text",
                                value: "A) Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page." 
                            })
                    
                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        else if(userInputText=="w7"){
                            msg.push({
                                type: "text",
                                value: "A) We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies." 
                            })
                    
                            msg.push({
                                type: "option",
                                options: star
                            })
                        }
                        
                        if(userInputText=="Letters/Induction"){
                            const Letters = [];
                            Letters.push({label: 'Q) When will we get a joining letter? ', value: "L1"});
                            Letters.push({label: 'Q) When will we get an internship completion letter? ', value: "L2"});
                            Letters.push({label: 'Q) I could not attend the induction last time, can I get an online induction again?/ I want some points said in the introduction, where can I get them.', value: "L3"});
                            Letters.push({label: 'Q) Can I just finish the task that you have just uploaded as I have attended the live induction session on 22nd of march', value: "L4"});
                            Letters.push({label: 'Q) I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?', value: "L5"});
                            Letters.push({label: 'Q) I did not get my appointment letter yet.', value: "L6"});
                          
                            Letters.push({label: '*', value: "*" });
                            
                            msg.push({
                                type: "option",
                                options: Letters
                            }) 
                        
                        }
                            
                        
                        
                            if (userInputText=="L1"){
                                msg.push({
                                    type: "text",
                                    value: "A) Joining letter to all the interns will be provided on or before the 31st of March 2020." 
                                })
                                
                                

                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L2"){
                                msg.push({
                                    type: "text",
                                    value: "A) This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project." 
                                })
                        
                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L3"){
                                msg.push({
                                    type: "text",
                                    value: "A) We have created a separate page with a pre-recorded induction, please visit it; https://www.cloudcounselage.co.in/ipinduction" 
                                })
                        
                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L4"){
                                msg.push({
                                    type: "text",
                                    value: "A) Yes. Although, you can always revisit the induction so that you can review what has been said in it." 
                                })
                        
                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L5"){
                                msg.push({
                                    type: "text",
                                    value: "A) We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system." 
                                })
                        
                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            else if(userInputText=="L6"){
                                msg.push({
                                    type: "text",
                                    value: "A) If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you'll get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping 'Cloud Counselage HR' in B24." 
                                })
                        
                                msg.push({
                                    type: "option",
                                    options: star
                                })
                            }
                            if(userInputText=="Application"){
                                const Application = [];
                                Application.push({label: "Q) One of my friends had applied for the IP but she didn't receive any further updates.", value: "a1"});
                                Application.push({label: "Q) What are the company policies for IP interns?", value: "a2"});
                                Application.push({label: "Q) Can we extend this internship? ", value: "a3"});
                                Application.push({label: "Q) Can we visit the office? How many times do we have to visit the office for this internship?", value: "a4"});
                                Application.push({label: "Q) Can we do another internship with IP?", value: "a5"});
                                Application.push({label: "Q) Can my friends still apply for the Internship Program (IP) - Maharashtra? Can we create awareness about this internship? Can we be the representative for Cloud Counselage in our college?", value: "a6"});
                              
                                Letters.push({label: '*', value: "*" });
                                
                                msg.push({
                                    type: "option",
                                    options: Application
                                }) 
                            
                            }
                                
                            
                            
                                if (userInputText=="a1"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Please ask them to send a mail to hrsupport@cloudcounselage.in and wait till 30th April 2020 for a reply." 
                                    })
                                    
                                    
    
                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="a2"){
                                    msg.push({
                                        type: "text",
                                        value: "A) The company policies will be published on www.cloudcounselage.co.in/ippolicies" 
                                    })
                            
                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="a3"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’." 
                                    })
                            
                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="L4"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Yes. Although, you can always revisit the induction so that you can review what has been said in it." 
                                    })
                            
                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="L5"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP." 
                                    })
                            
                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                else if(userInputText=="L6"){
                                    msg.push({
                                        type: "text",
                                        value: "A) Yes, your friends can apply till the 30th of March 2020; https://www.cloudcounselage.com/ipmaharashtra/. To be a student representative of Cloud Counselage, please contact Cloud Counselage HR." 
                                    })
                            
                                    msg.push({
                                        type: "option",
                                        options: star
                                    })
                                }
                                if(userInputText=="College Related"){
                                    const CollegeR = [];
                                    CollegeR.push({label: "Q) What to do when our university exams start?", value: "cr1"});
                                    CollegeR.push({label: " Q) Is it okay to mention this internship as ongoing for college records?", value: "cr2"});
                                    
                                    CollegeR.push({label: '*', value: "*" });
                                    
                                    msg.push({
                                        type: "option",
                                        options: CollegeR
                                    }) 
                                
                                }
                                    
                                
                                
                                    if (userInputText=="cr1"){
                                        msg.push({
                                            type: "text",
                                            value: "A) We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first." 
                                        })
                                        
                                        
        
                                        msg.push({
                                            type: "option",
                                            options: star
                                        })
                                    }
                                    else if(userInputText=="cr2"){
                                        msg.push({
                                            type: "text",
                                            value: "A) Yes, we'll provide every intern a joining letter as soon as all interns are inducted." 
                                        })
                                
                                        msg.push({
                                            type: "option",
                                            options: star
                                        })
                                    }
                                    if(userInputText==2){
                                        //alert(userInputText);
                        
                                            msg.push({
                                                type: "text",
                                                value: "Which of these?"
                                            });
                                            const Bitrix24 = [];
                                            Bitrix24.push({label: 'Log in', value: "Log in"});
                                            Bitrix24.push({label: 'Tasks/Work report', value: "Tasks/Work report"});
                                            Bitrix24.push({label: 'Clock in/out', value: "Clock in/out"});
                                            Bitrix24.push({label: '*', value: "*" });
                            
                                            msg.push({
                                                type: "option",
                                                options: Bitrix24
                                            });
                                            
                                            }
                                            if(userInputText=="Tasks/Work report"){
                                                const TaskR = [];
                                                TaskR.push({label: " Q) I am not able to see my tasks.", value: "TaskR1"});
                                                TaskR.push({label: " Q) Not able to see the task as not part of the IP workgroup.", value: "TaskR2"});
                                                TaskR.push({label: "  Q) What do we do in the work report? ", value: "TaskR3"});
                                                TaskR.push({label: " Q) My Efficiency is 0% what should I do?", value: "TaskR4"});
                                                TaskR.push({label: "Q) When will my review on social media update task be done?", value: "TaskR5"});
                                                TaskR.push({label: "Q) I am trying to complete social media tasks. I completed that day and clicked finish but it didn't show finished in the task menu. What should I do?", value: "TaskR6"});
                                        
                                                TaskR.push({label: '*', value: "*" });
                                                
                                                msg.push({
                                                    type: "option",
                                                    options: TaskR
                                                }) 
                                            
                                            }
                                            if (userInputText=="TaskR1"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Please remove the default In Progress from your filter of the task section and try." 
                                                })
                                                
                                                
                
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR2"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Please message ‘Cloud Counselage HR’ in Bitrix24" 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR3"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on send to supervisor." 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR4"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started. Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis" 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR5"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) We will review this task in May 2020." 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="TaskR6"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Our team will verify and then only your task shall be accepted as completed. Please wait till the verification's complete." 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            if(userInputText=="Log in"){
                                                const Login = [];
                                                Login.push({label: " Q) I m not able to access my Bitrix24 account?", value: "Log1"});
                                                Login.push({label: " Q) Can we be online after 1 hr in a day?", value: "Log2"});
                                                Login.push({label: " Q) By when will we receive access to Bitrix24? ", value: "Log3"});
                                                Login.push({label: "Q) I am not able to view a page/ I am logged in the training and still the website asks me to login", value: "Log4"});
                                                
                                                Login.push({label: '*', value: "*" });
                                                
                                                msg.push({
                                                    type: "option",
                                                    options: Login
                                                }) 
                                            
                                            }
                                            if (userInputText=="Log1"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’ In case the problem persists, please write a mail to hrsupport@cloudcounselage.in" 
                                                })
                                                
                                                
                
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Log2"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Yes, you can be." 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Log3"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) If you have submitted the ‘New Joinee Form’ after the 1st of March, please wait till the 31st of March to receive your access." 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Log4"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) This could be because of some issue in the cookies or extension in your browser. Please try again with a different browser or open the tab with incognito mode.Also, you don't need to record your results, the quizzes are only for your knowledge check and not a metric to score you." 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            if(userInputText=="Clock in/out"){
                                                const Clock = [];
                                                Clock.push({label: "  Q) I forgot to clock in for a few days, will this affect my internship?", value: "Clock1"});
                                                Clock.push({label: "  Q) In my work time I can see one exclamation mark?/ What does the remaining time mean?", value: "Clock2"});
                                                Clock.push({label: " Q) Is it necessary to clock-in if I am done with my tasks? ", value: "Clock3"});
                                                Clock.push({label: " Q) Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed?", value: "Clock4"});
                                                
                                                Clock.push({label: '*', value: "*" });
                                                
                                                msg.push({
                                                    type: "option",
                                                    options: Clock
                                                }) 
                                            
                                            }
                                            if (userInputText=="Clock1"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now." 
                                                })
                                                
                                                
                
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Clock2"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) It is showing the remaining time because it's configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week." 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Clock3"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important." 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }
                                            else if(userInputText=="Clock4"){
                                                msg.push({
                                                    type: "text",
                                                    value: "A) If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours.However, you should keep a track of all the updates of the internship being posted on the groups" 
                                                })
                                        
                                                msg.push({
                                                    type: "option",
                                                    options: star
                                                })
                                            }



                                       
                }
          
        } 
            
        
    
      
      

    if (callback) {
        //generate response for JSONP
        const responseText = callback + "(" + JSON.stringify(response) + ")";

        //Set content-type to "application/javascript"
        res.set('Content-Type', 'application/javascript');
        res.send(responseText)

    } else {
        //generate response for JSON

        res.json(response);
    }


});


app.listen(port, () => {
    console.log('chat server started on port:' + port);
});


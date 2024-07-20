import { background, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import PersonalInfo from './Pages/PersonalInfo';
import CreateGig from './Pages/CreateGig';
import PublishGig from './Pages/PublishGig';
import Range from './Pages/Range';
import { BackIcon2 } from '@/Assets';
import { useRouter } from 'next/router';
// import './App.css';

function UserDetails() {
    return <PersonalInfo />;
}

function Payment() {
    return <CreateGig />;
}

function Transportation() {
    return <Range />;
}

function Confirmation() {
    return <PublishGig />;
}

function Gig() {
    const [activeStep, setActiveStep] = useState(0);
    const router = useRouter();

    const steps = [
        { title: 'Personal Info' },
        { title: 'Create Gig' },
        { title: 'Range' },
        { title: 'Publish' },
    ];

    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <UserDetails />;
            case 1: return <Payment />;
            case 2: return <Transportation />;
            case 3: return <Confirmation />;
            default: return null;
        }
    }

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                {activeStep > 0 &&
                <div  onClick={() => setActiveStep(activeStep - 1)}>
                    <BackIcon2 />
                </div>

                }

                <Stepper
                    steps={steps}
                    activeStep={activeStep}
                    activeColor="#F18341"
                    completeColor="#F18341"
                    defaultColor="#bdbdbd"
                    completeBarColor="#F18341"
                    defaultBarColor="#e0e0e0"
                    activeTitleColor="#F18341"
                    completeTitleColor="#F18341"
                    defaultTitleColor="#bdbdbd"
                    circleFontSize={0}
                    size={20}
                />

            </div>
            <div style={{ padding: '20px', height: "85vh", overflowY: "scroll" }}>
                {getSectionComponent()}
                <div>

                    {activeStep < steps.length - 1 &&
                        <Button variant="default" style={{ background: "#000", color: "#fff", width: "90%", bottom: "5px", position: "absolute", margin: "auto" }} onClick={() => setActiveStep(activeStep + 1)}>Save & Continue</Button>
                    }

                </div>
            </div>
        </div>
    );
}

export default Gig;

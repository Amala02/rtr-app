import React from "react";
import "./Home-style.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    return (
        <div className="home-wrap">
        
           
           <div class="particles">
        <Particles id="ts-particles" init={particlesInit} options={{
             "fullScreen": {
                "enable": false,
                "zIndex": 1
            },
            "particles": {
                "number": {
                    "value": 10,
                    "density": {
                        "enable": false,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#092552", "#322b59", "#4f477a", "#c8aff0", "#aa80ed", "#9054f0", "#7428ed", "#3d0696", "#c880d1", "#b846c7"]
                },
                "shape": {
                    "type": "star",
                    "options": {
                        "sides": 5,
                        "color":"white"
                    }
                },
                "opacity": {
                    "value": 0.9,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 1,
                        "size_max":2,
                        "sync": false
                    }
                },
                "rotate": {
                    "value": 0,
                    "random": true,
                    "direction": "clockwise",
                    "animation": {
                        "enable": true,
                        "speed": 5,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 600,
                    "color": ["#092552", "#322b59", "#4f477a", "#c8aff0", "#aa80ed", "#9054f0", "#7428ed", "#3d0696", "#c880d1", "#b846c7"],
                        "opacity": 1,
                    "width": 2.5
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": ["grab"]
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "background": {
                "color": "#111",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }}
       
        />
        </div>
            <div class="home-content">
                <h1 className="home-header">Read the Room</h1>
            </div>
        </div>
    );

    
  
}


export default Home;
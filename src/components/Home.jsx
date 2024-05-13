import React,{useRef} from 'react'
import { motion, animate } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import myImage from '../assets/face.png';

const Home = () => {

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        },
    };

    const clientCount = useRef(null);

    const projectCount = useRef(null);

    const animationClientCount = ()=>{
        animate(0,500,{
            duration:1,
            onUpdate: (v)=>(clientCount.current.textContent = v.toFixed())
        })
    }

    const animationProjectCount = ()=>{
        animate(0,50,{
            duration:1,
            onUpdate: (v)=>(projectCount.current.textContent = v.toFixed())
        })
    }

    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I am <br /> Shivang Verma
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara",
                    }} />

                    <div>
                        <a href="mailto:shivangverma2003@gmail.com">
                            Hire Me
                        </a>
                        <a href="#work">Projects <BsArrowUpRight /></a>
                    </div>

                    <article>
                        <p>
                            <motion.span ref={clientCount} whileInView={animationClientCount}></motion.span>+
                        </p>
                        <span>Friends Worldwide</span>
                    </article>

                    <aside>
                    <article>
                        <p>
                            <motion.span ref={projectCount} whileInView={animationProjectCount}></motion.span>+
                        </p>
                        <span>Projects Done</span>
                    </article>

                    <article data-special>
                        <p>
                            Conatct
                        </p>
                        <span>shivangverma2003@gmail.com</span>
                    </article>
                    </aside>
                </div>
            </section>

            <section>
                    <img src={myImage} alt="shivang" />
            </section>

            <BsChevronDown />
        </div>
    )
}

export default Home
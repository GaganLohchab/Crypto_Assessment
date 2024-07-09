import React, { useState } from 'react';
import '../css/Academy.css';
import { FcCollapse } from "react-icons/fc";

const Academy = () => {
    const [isTaskListVisible, setIsTaskListVisible] = useState(false);

    const toggleTaskListVisibility = () => {
        setIsTaskListVisible(!isTaskListVisible);
    };

    return (
        <>
        <div className='Academyy bg-zinc-950'>
        <div className="Academy bg-black">
                <img
                    className="Academy_logo h-28 w-56"
                    src="/academy-animated-logo.gif"
                    alt="intract-academy-logo"
                />
                <div className='Abody mt-24'>
                    <div className='paragraph text-xl text-zinc-500'>
                        <p>
                            <span>Intract users </span>
                            have together made more than
                            <span> $100 million</span> in web3.<br></br>
                            Join them and
                            <span> learn how to earn crypto!</span>
                        </p>
                    </div>
                    <div className='btns'>
                        <button className="btn btn-sm w-52 h-9 custom-height custom-radius flex items-center space-x-2" id='StartedButton'>
                            <span>Get Started</span>
                            <img src="/right-arrow.svg" alt="Angle Top Icon"></img>
                        </button>
                    </div>
                    <div className="body w-full h-full ">
                        <div className="card card-side bg-base-100 shadow-xl" style={{ width: '530px' }} onClick={toggleTaskListVisibility}>
                            <figure>
                                <img
                                    src="/card_image1.png"
                                    alt="Logo"
                                    className="image h-52 rounded-2xl mr-2 p-5 border-1 border-slate-700 bg-transparent"
                                />
                            </figure>
                            <div className="card-body">
                                <div className='collapse'><FcCollapse /></div>
                                <h2 className="card-title text-2xl text-white">Basics of crypto</h2>
                                <p>The safest and easiest place to start your crypto journey!</p>
                                <div className="space text-gray-600">
                                    <span>--------------------------------</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <div className="_reward_count_1uq5j_169 mt-7">
                                        <img src="/xp-icon.svg" alt="" width="18" height="16" />1490 XPs
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isTaskListVisible && (
                            <div className="task-list p-4 rounded-lg mt-4">
                                <ul>
                                    <li className="task-item">Task 1: Introduction to Crypto</li>
                                    <li className="task-item">Task 2: Setting up a Wallet</li>
                                    <li className="task-item">Task 3: Understanding Blockchain</li>
                                    <li className="task-item">Task 4: Buying Your First Crypto</li>
                                    <li className="task-item">Task 5: Staying Safe in Crypto</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default Academy;

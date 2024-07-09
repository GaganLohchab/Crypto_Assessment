import React, { useState, useEffect } from 'react';
import '../css/Header.css';

const Header = () => {
    const [selectedLink, setSelectedLink] = useState(null); // State to track selected link index
    const [isSearchExpanded, setIsSearchExpanded] = useState(false); // State to track search bar expansion
    const [isTransparent, setIsTransparent] = useState(false); // State to track header transparency

    const handleLinkClick = (index) => {
        setSelectedLink(index); // Update selected link state
    };

    const handleSearchFocus = () => {
        setIsSearchExpanded(true); // Expand search bar on focus
    };

    const handleSearchBlur = () => {
        setIsSearchExpanded(false); // Collapse search bar on blur
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsTransparent(true);
        } else {
            setIsTransparent(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar bg-base-100 ${isTransparent ? 'transparent' : 'bg-black'}`}>
            <div className="flex-1 flex items-center space-x-8">
                <a className="name text-3xl font-bold text-white">intract.</a>
                <div className="links flex space-x-12 pl-5">
                    <a
                        className={`link link-hover ${selectedLink === 0 ? 'selected-link' : ''}`}
                        onClick={() => handleLinkClick(0)}
                    >
                        Campass
                    </a>
                    <a
                        className={`link link-hover ${selectedLink === 1 ? 'selected-link' : ''}`}
                        onClick={() => handleLinkClick(1)}
                    >
                        Explore
                    </a>
                    <a
                        className={`link link-hover ${selectedLink === 2 ? 'selected-link' : ''}`}
                        onClick={() => handleLinkClick(2)}
                    >
                        Academy
                    </a>
                    <a
                        className={`link link-hover ${selectedLink === 3 ? 'selected-link' : ''}`}
                        onClick={() => handleLinkClick(3)}
                    >
                        NFTs
                    </a>
                    <a
                        className={`link link-hover ${selectedLink === 4 ? 'selected-link' : ''}`}
                        onClick={() => handleLinkClick(4)}
                    >
                        For Projects
                    </a>
                </div>
            </div>
            <div className="form-control">
                <div className={`searchbar-container ${isSearchExpanded ? 'expanded' : ''}`}>
                    <input
                        type="text"
                        placeholder="🔍 Search for ecosystems, trending quests etc.,"
                        className="input"
                        onFocus={handleSearchFocus}
                        onBlur={handleSearchBlur}
                    />
                </div>
            </div>
            <img
                src="/logo.svg"
                alt="Logo"
                className="w-10 h-10 mr-2 p-1 rounded-full border-2 border-orange-500 bg-black"
            />
            <div className="btn btn-sm bg-white text-black hover:bg-gray-300 w-32">
                Sign In
            </div>
        </div>
    );
};

export default Header;

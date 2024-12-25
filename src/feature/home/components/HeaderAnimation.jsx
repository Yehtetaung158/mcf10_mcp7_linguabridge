import React, { useEffect, useState } from 'react';

const HeaderAnimation = () => {
    const languages = ['English', 'French', 'Spanish', 'German', 'Japanese', 'Chinese'];
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [reverseLanguage, setReverseLanguage] = useState(languages);
    // console.log(reverseLanguage)

    // Rotate languages every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
            // setReverseLanguage((prevLanguages) => prevLanguages.reverse());
        }, 2000);
        return () => clearInterval(interval);
    }, [languages.length]);

    return (
       <>
       <span className="relative overflow-hidden  w-full inline-block ml-2 h-14 max-md:h-6">
            <span
                className="absolute transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentIndex * 1.5}em)` }}
            >
                {languages.map((lang, i) => (
                    <span
                        key={i} 
                        className="block h-[1.5em] text-cyan-500"
                    >
                        {lang}
                    </span>
                ))}
            </span>
        </span>
       </>
    );
};

export default HeaderAnimation;

import React from "react";

const LanguageBtn = ({ setSelectedLanguage, selectedLanguage, language }) => {
  return (
    <button
      className={`lg:w-[120px] ${
        selectedLanguage === language
          ? "bg-cyan-500 text-white rounded-lg border px-6 py-3 flex justify-center items-center text-ps_font_size"
          : "text-cyan-800 px-6 py-3 flex justify-center items-center"
      }`}
      onClick={() => setSelectedLanguage(language)}
    >
      {language}
    </button>
  );
};

export default LanguageBtn;

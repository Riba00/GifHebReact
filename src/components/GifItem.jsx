import React, { useState } from "react";
import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  const [buttonText, setButtonText] = useState("Copy URL");

  const copyURL = () => {
    navigator.clipboard.writeText(url).then(() => {
        alert("URL copied to clipboard!");
      setButtonText("Copied!");
      setTimeout(() => {
        setButtonText("Copy URL");
      }, 2000);
    });
  };

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <button id="copyURLButton" onClick={copyURL}>
        {buttonText}
      </button>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

GifItem.defaultProps = {
  title: "No title",
};

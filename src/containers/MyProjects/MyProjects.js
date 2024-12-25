import React, {useContext, useState} from "react";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import Modal from "react-modal";
import StyleContext from "../../contexts/StyleContext";
import "./MyProjects.scss";

export default function MyProjects() {
  const {isDark} = useContext(StyleContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = videoUrl => {
    setVideoSrc(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoSrc("");
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      />
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => (
                          <span
                            key={i}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() =>
                              link.name === "See Video Demo"
                                ? openModal(link.url)
                                : window.open(link.url, "_blank").focus()
                            }
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video Modal Starts here*/}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="video-modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            <iframe
              className="video-box"
              src={videoSrc}
              title="Video Demo"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
        {/* Video Modal Ends here*/}
      </div>
    </Fade>
  );
}

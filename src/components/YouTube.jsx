import { useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FiArrowUpRight, FiPlay, FiX } from 'react-icons/fi'
import { featuredVideos, youtube } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function VideoCard({ video, onPlay }) {
  return (
    <button type="button" className="youtube-card reveal" onClick={() => onPlay(video)}>
      <div className="youtube-card__thumb">
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
        />
        <span className="youtube-card__play" aria-hidden>
          <FiPlay />
        </span>
      </div>
      <div className="youtube-card__body">
        <h3>{video.title}</h3>
        {video.description && <p>{video.description}</p>}
      </div>
    </button>
  )
}

export default function YouTube() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section className="section section--alt" id="youtube">
      <div className="container">
        <SectionHeading
          label="YouTube"
          title="Creative work on camera"
          description="Video edits and content from my channel—alongside the systems I build in code."
        />

        <div className="youtube__channel reveal">
          <div className="youtube__channel-mark" aria-hidden>
            <FaYoutube />
          </div>
          <div className="youtube__channel-content">
            <p className="youtube__channel-handle">@{youtube.handle}</p>
            <h3>{youtube.title}</h3>
            <p className="youtube__channel-desc">{youtube.description}</p>
          </div>
          <a
            href={youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary youtube__channel-cta"
          >
            Visit channel
            <FiArrowUpRight aria-hidden />
          </a>
        </div>

        {featuredVideos.length > 0 && (
          <div className="youtube__grid">
            {featuredVideos.map((video, i) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={setActiveVideo}
                style={{ '--reveal-delay': `${i * 80}ms` }}
              />
            ))}
          </div>
        )}

        <p className="youtube__browse reveal">
          <a href={`${youtube.url}/videos`} target="_blank" rel="noopener noreferrer">
            Browse all uploads on YouTube
            <FiArrowUpRight aria-hidden />
          </a>
        </p>
      </div>

      {activeVideo && (
        <div
          className="youtube-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing ${activeVideo.title}`}
          onClick={() => setActiveVideo(null)}
        >
          <div className="youtube-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="youtube-modal__close"
              aria-label="Close video"
              onClick={() => setActiveVideo(null)}
            >
              <FiX />
            </button>
            <div className="youtube-modal__embed">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="youtube-modal__meta">
              <h3>{activeVideo.title}</h3>
              {activeVideo.description && <p>{activeVideo.description}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

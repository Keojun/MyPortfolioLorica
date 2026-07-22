import { useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FiArrowUpRight, FiExternalLink, FiPlay } from 'react-icons/fi'
import { featuredVideos, youtube } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function VideoEmbed({ video, featured = false }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <article className={`youtube-embed reveal${featured ? ' youtube-embed--featured' : ''}`}>
      <div className="youtube-embed__player">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="youtube-embed__poster"
            onClick={() => setLoaded(true)}
            aria-label={`Play video: ${video.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
            />
            <span className="youtube-embed__play" aria-hidden>
              <FiPlay />
            </span>
            <span className="youtube-embed__poster-label">Click to load preview</span>
          </button>
        )}
      </div>
      <div className="youtube-embed__meta">
        <h3>{video.title}</h3>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-embed__link"
        >
          Watch on YouTube
          <FiExternalLink aria-hidden />
        </a>
      </div>
    </article>
  )
}

export default function YouTube() {
  const spotlight = featuredVideos.find((video) => video.featured) ?? featuredVideos[0]
  const previews = featuredVideos.filter((video) => video.id !== spotlight?.id)

  return (
    <section className="section section--alt" id="youtube">
      <div className="container">
        <SectionHeading
          label="YouTube"
          title="Latest from my channel"
          description="Click a thumbnail to load the preview—keeps the page fast while still letting you watch inline."
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
            Subscribe on YouTube
            <FiArrowUpRight aria-hidden />
          </a>
        </div>

        {spotlight && (
          <div className="youtube__spotlight">
            <VideoEmbed video={spotlight} featured />
          </div>
        )}

        {previews.length > 0 && (
          <div className="youtube__grid">
            {previews.map((video) => (
              <VideoEmbed key={video.id} video={video} />
            ))}
          </div>
        )}

        <p className="youtube__browse reveal">
          <a href={`${youtube.url}/videos`} target="_blank" rel="noopener noreferrer">
            See all uploads on YouTube
            <FiArrowUpRight aria-hidden />
          </a>
        </p>
      </div>
    </section>
  )
}

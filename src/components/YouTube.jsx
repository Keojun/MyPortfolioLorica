import { FaYoutube } from 'react-icons/fa'
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi'
import { featuredVideos, youtube } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function VideoEmbed({ video, featured = false }) {
  return (
    <article
      className={`youtube-embed reveal${featured ? ' youtube-embed--featured' : ''}`}
    >
      <div className="youtube-embed__player">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
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
          description="Embedded previews from @Keojun—Roblox gameplay, creative edits, and personal uploads."
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

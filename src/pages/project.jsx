import React, { useState, useEffect } from 'react';
import ProjDescription from '../components/pure/projDescription';
import ProjDetails from '../components/pure/projDetails';
import ProjMediaItem from '../components/pure/projMediaItem';
import ProjTitle from '../components/pure/projTitle';
import pagesData from '../pagesData';
import '../styles/project.css'



import { Helmet } from 'react-helmet';


const Project = ({ projectId }) => {

  
  // DEJO AQUI LO DEL LIGHTBPOX POR AHORA CUIDADO
 // const [openLightbox, setOpenLightbox] = React.useState(false);

  const project = pagesData.find((element) => element.id === projectId);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
    console.log('matches', matches);
  });

  // {matches ? ():()}

  return (
    <section className='container text-left px-0 overflow-hidden'>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.title}</title>
        {/* <link rel="canonical" href="http://mysite.com/projects/{project.title}" /> */}
      </Helmet>

      <div className='proj-header d-flex row mb-4 align-items-bottom'>
        <ProjTitle title={project.title} />
        <ProjDetails details={project.details} />
      </div>

      {matches ? (
        /* INICIO DEL PROYECTO DE DESKTOP*/
        <div className='proj-content row row-cols-2 g-4'>
          {project.featured ?
            (
              <div className='proj-featured' >
                <ProjMediaItem item={project.featured} />
              </div>
            ) : null}

          <div className='proj-desc'>
            <ProjDescription descriptions={project.description} />
          </div>

          {project.media.map((item, index) =>
          (
            <div className={`proj-media-${item.type}, ${item.size}`}
              key={index}>
              <ProjMediaItem item={item} />
            </div>
          ))
          }
        </div>

        

      ) : (
        /* INICIO DEL PROYECTO DE MOBILE*/
        <div className='proj-content row gy-4'>
          {project.featured ?
            (
              <div className='proj-featured'>
                <ProjMediaItem item={project.featured} />
              </div>
            ) : null}
          {project.description ? (
            <div className='proj-desc'>
              <ProjDescription descriptions={project.description} />
            </div>
          ) : null
          }
          {project.media.map((item, index) =>
          (
            <div className={`proj-media-${item.type}`}
              key={index}>
              <ProjMediaItem item={item} />
            </div>
          ))
          }
          <div className='mb-4'>
          </div>
        </div>

      )}

    </section>
  );
}

export default Project;

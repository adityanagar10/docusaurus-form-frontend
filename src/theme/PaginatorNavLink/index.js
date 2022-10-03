import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { useNavigate } from 'react-router-dom';
export default function PaginatorNavLink(props) {
  const {permalink, title, subLabel, isNext} = props;
  const { actions, state } = useStateMachine({ updateAction });

  const handlePageNext = () => {
    if(state.currentPage < state.currentThirdLevelNavPages.length - 1){
      actions.updateAction({...state,currentPage: state.currentPage+1})
    }
  }

  const handlePagePrev = () => {
    if(-1 < state.currentPage){
      actions.updateAction({...state, currentPage: state.currentPage-1})
    }
  }

  console.log(state.currentThirdLevelNavPages && state.currentThirdLevelNavPages.length !== 0 || state.currentPage !== state.currentThirdLevelNavPages.length -1 )

  return (
    <>
    {
      state.currentThirdLevelNavPages.length > 0 ? <>
      <Link
      className={clsx(
        'pagination-nav__link',
        'pagination-nav__link--next'
      )}
      onClick = {handlePageNext}
      >
      {
        state.currentThirdLevelNavPages && state.currentPage !== state.currentThirdLevelNavPages.length -1  ?<div className="pagination-nav__label">Next Page</div> : <div className="pagination-nav__label"><Link to={state.nextThirdLevelNav}>{title}</Link></div>
      }
    </Link>
    {
      state.currentPage !== 0 ? <Link
      className={clsx(
        'pagination-nav__link',
        'pagination-nav__link--prev',
      )}
      onClick = {handlePagePrev}
      >
      {subLabel && <div className="pagination-nav__sublabel">Prev</div>}
      <div className="pagination-nav__label">Previous page</div>
    </Link> : <></>
    }
      </> : <>
      <Link
      className={clsx(
        'pagination-nav__link',
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
      )}
      to={permalink}>
      {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
      <div className="pagination-nav__label">{title}</div>
    </Link>
      </>
      
    }
    </>
  );
}

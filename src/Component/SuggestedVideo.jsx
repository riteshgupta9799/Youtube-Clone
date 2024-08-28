import { abbreviateNumber } from 'js-abbreviation-number';
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Time from '../Loader/Time';

const SuggestedVideo = ({video}) => {
    console.log(video);
  return (
    <div className=''>
        <Link to={`/video/${video?.videoId}`}>
        <div className='flex mb-3'>
          {/* channel thumnail $ duration */}
          <div className='relative h-24 lg:h-20 xl:h-24 xl:w-40 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:min-w-[168px] hover:rounded-none duration-200 overflow-hidden'>
            <img className='h-full w-full' src={video?.thumbnails[0]?.url} alt="" />
          {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo  & titile*/}
        <div className='flex mt-3 items-start space-x-2'>
        <div className='flex items-start'>
            {/* <div className='flex h-9 w-9 rounded-full overflow-hidden'>
              <img className='h-full w-full rounded-full overflow-hidden' src={video?.author?.avatar[0]?.url} alt="" />
            </div> */}
          </div>
          <div>
            <span className='text-sm font-semibold line-clamp-2'>{video?.title}</span>
            <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-600'>{video?.author?.title}
            { (<BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />)}</span>
            {/* views and month */}
            <div className='flex text-gray-600 text-[12px] font-semibold'>
              <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>
              <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1'>.</span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>

        </div>
      </Link>
    </div>
  )
}

export default SuggestedVideo

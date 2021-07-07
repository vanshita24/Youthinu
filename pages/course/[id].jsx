import Main from '~/layouts/main';
import {
  XIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/react/outline';
import { useEffect, useRef, useState } from 'react';
import markdownToHtml from '../../lib/markdownToHtml';
import data from '../../mock/courses.json';
import dynamic from 'next/dynamic';

const Player = dynamic(import('../../components/Player'), { ssr: false });

export default function Course({ course }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [videoURL, setVideoURL] = useState(null);
  const [activeResourceID, setActiveResourceID] = useState(null);

  const onResourceClick = (url, _id) => {
    setVideoURL(url);
    setActiveResourceID(_id);
  };

  const closeSideBar = () => setShowSidebar(false);
  console.log('videoURL', videoURL);
  return (
    <Main className='flex h-full w-full relative' title={course?.name}>
      <div className='flex-grow flex flex-col ustify-start'>
        <div className='bg-gray-800 flex justify-center relative overflow-x-hidden'>
          {videoURL && (
            <Player
              controls
              manifestUrl={`${process.env.NEXT_PUBLIC_VIDEOS_ENDPOINT}${videoURL}`}
              preload='none'
              posterUrl='/videos/poster.jpg'
            />
          )}
          {!showSidebar ? (
            <button
              className='absolute top-1/2  right-0 p-2 font-semibold text-gray-900 bg-brand-green-light opacity-60 hover:opacity-100 h-10 w-auto flex items-center transform-gpu  translate-x-40 hover:translate-x-0'
              onClick={() => setShowSidebar(true)}>
              <ArrowCircleLeftIcon
                onClick={closeSideBar}
                className='h-5 w-auto mr-6  text-gray-900'
                aria-hidden='true'></ArrowCircleLeftIcon>
              Open course content
            </button>
          ) : null}
        </div>
        <div className='flex-grow p-4 '>
          <div>
            <h4 className='text-lg text-gray-900 font-semibold underline'>
              Overview
            </h4>
            <article
              className='prose lg:prose-xl mt-2'
              dangerouslySetInnerHTML={{ __html: course?.overview }}
            />
          </div>
        </div>
      </div>
      <CourseSideBar
        sections={course?.sections}
        onResourceClicked={onResourceClick}
        activeResourceID={activeResourceID}
        showSideBar={showSidebar}
        closeSideBar={closeSideBar}
      />
    </Main>
  );
}

const CourseSideBar = ({
  sections,
  onResourceClicked,
  activeResourceID,
  showSideBar,
  closeSideBar,
}) => {
  return (
    <div
      className={`absolute right-0 top-0 h-full xl:static w-[20rem] bg-white  border-l-2 border-gray-300 shadow-sm ${
        !showSideBar ? 'hidden' : ''
      }`}>
      <div className=' shadow-sm h-14 flex items-center justify-between border-gray-200 border-b-2 px-4'>
        <h4 className='text-lg text-gray-900 font-semibold underline'>
          Course Content
        </h4>
        <XIcon
          onClick={closeSideBar}
          className='h-5 w-auto text-gray-600 hover:text-gray-900 cursor-pointer transform-gpu hover:scale-125'
          aria-hidden='true'
        />
      </div>
      {/* section list */}
      <div>
        {sections?.map((section) => (
          <Section
            key={section._id}
            data={section}
            onResourceClicked={onResourceClicked}
            activeResourceID={activeResourceID}
          />
        ))}
      </div>
    </div>
  );
};

const Section = ({ data, onResourceClicked, activeResourceID }) => {
  const [showResources, setShowResources] = useState(false);

  return (
    <div className='border-gray-200  border-b-2'>
      <div
        className='px-4 py-2  bg-gray-50 text-base text-gray-900 font-semibold flex justify-between items-center  cursor-pointer'
        onClick={() => setShowResources(!showResources)}>
        {data?.name}
        {showResources ? (
          <ChevronDoubleUpIcon className='h-4 w-auto text-gray-600 hover:text-gray-900 transform-gpu hover:scale-125' />
        ) : (
          <ChevronDoubleDownIcon className='h-4 w-auto text-gray-600 hover:text-gray-900 cursor-pointer transform-gpu hover:scale-125' />
        )}
      </div>
      {showResources ? (
        <ResourceList
          data={data?.resources}
          onClick={onResourceClicked}
          activeResourceID={activeResourceID}
        />
      ) : null}
    </div>
  );
};

const ResourceList = ({ data, onClick, activeResourceID }) => {
  return (
    <ul className='text-sm font-medium text-gray-700'>
      {data.map((resource) => (
        <Resource
          key={resource?._id}
          isActive={activeResourceID === resource?._id}
          onClick={() => onClick(resource?.uri, resource?._id)}>
          {resource?.name}
        </Resource>
      ))}
    </ul>
  );
};

const Resource = ({ children, isActive = false, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
        isActive ? 'bg-gray-100 ' : ''
      }`}>
      {children}
    </li>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //Database Call
  const { id } = params;
  const index = data.findIndex((element) => element._id === id);

  if (!data[index]) {
    return {
      notFound: true,
    };
  }
  const course = data[index];
  const overview = await markdownToHtml(course.overview || '');
  return {
    props: { course: { ...data[index], overview: overview } },
  };
}

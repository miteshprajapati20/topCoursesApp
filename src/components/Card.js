import React from 'react';
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify'; // Add this import

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    //pehle se like hua pada he
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning('like removed');
    } else {
    //pehle se like nahi he ye course
    //insert karna h ye course liked courses me

      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        //non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success('liked successfully');
    }
  }

  return (
    <div className='bg-slate-700  w-[300px] rounded-md overflow-hidden '>
      <div className='relative'>
        <img src={course.image.url} alt='' />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          <button className='absolute'>
            {
              likedCourses.includes(course.id) ? (<FcLike className='' onClick={clickHandler}  fontSize='1.75rem'/>) : ( <FcLikePlaceholder onClick={clickHandler}  className='' fontSize='1.75rem'/>) 
            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
          }
        </p>
      </div>
    </div>
  );
};

export default Card;

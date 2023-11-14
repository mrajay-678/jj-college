import React, { memo } from 'react';

const CardList = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <MemoizedCard key={item.id} item={item} />
      ))}
    </>
  );
};

// Memoize the Card component to prevent unnecessary re-renders
const Card = ({ item }) => {
    let imageSrc = require(`../assest/${item.img}`);
  return (
    <>
    <div className='course-inner'>
        <img src={`${imageSrc}`} alt="course" className='w-100' />
        <h2>{item.cName}</h2>
        <span className='h3'>{item.author}</span>
        <p>{item.Disc}</p>
        <div className='price mt-3'>{item.price}</div>
    </div>
    </>
  );
};

const MemoizedCard = memo(Card);

const Course = () => {
    const courseData = [
        {
            id: 1,
            cName : "Leader Skill",
            Disc: "The path to the image is constructed using template literals",
            author: "AJAY TIWARI",
            type: "Pass",
            img: "courses-12.jpg",
            price: "$50.99"
        },
        {
            id: 2,
            cName : "Leader Skill",
            Disc: "The path to the image is constructed using template literals",
            author: "AJAY TIWARI",
            type: "Pass",
            img: "courses-12.jpg",
            price: "$50.99"
        },
        {
            id: 3   ,
            cName : "Leader Skill",
            Disc: "The path to the image is constructed using template literals",
            author: "AJAY TIWARI",
            type: "Pass",
            img: "courses-12.jpg",
            price: "$50.99"
        },
    ]

  return (
    <section className=' section-padding m-5'>
    <h1 className='px-5'>Course</h1>
    <div  className='course-outer'>
        <CardList data={courseData} />
    </div>
    </section>
  );
};

export default Course;

// src/components/CoursesPage.js
import React, { useState, useEffect } from 'react';
import { database, auth } from '../firebase';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const user = auth.currentUser;
      if (user) {
        const coursesSnapshot = await database.ref(`courses/${user.email}`).once('value');
        const coursesList = [];
        coursesSnapshot.forEach(course => {
          coursesList.push(course.val());
        });
        setCourses(coursesList);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>الكورسات المتاحة</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;

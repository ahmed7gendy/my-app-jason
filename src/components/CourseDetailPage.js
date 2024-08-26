// src/components/CourseDetailPage.js
import React, { useState, useEffect } from 'react';
import { database, storage } from '../firebase';

const CourseDetailPage = ({ match }) => {
  const [course, setCourse] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      const courseSnapshot = await database.ref(`courses/${match.params.id}`).once('value');
      setCourse(courseSnapshot.val());

      const questionsSnapshot = await database.ref(`questions/${match.params.id}`).once('value');
      const questionsList = [];
      questionsSnapshot.forEach(question => {
        questionsList.push(question.val());
      });
      setQuestions(questionsList);
    };
    fetchCourse();
  }, [match.params.id]);

  return (
    <div>
      <h1>{course?.name}</h1>
      <video controls src={course?.videoUrl} />
      {questions.map(question => (
        <div key={question.id}>
          <p>{question.text}</p>
          {question.answers.map(answer => (
            <button key={answer}>{answer}</button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseDetailPage;

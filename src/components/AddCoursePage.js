// src/components/AddCoursePage.js
import React, { useState } from 'react';
import { database, storage } from '../firebase';

const AddCoursePage = () => {
  const [courseName, setCourseName] = useState('');
  const [video, setVideo] = useState(null);
  const [questions, setQuestions] = useState([]);

  const handleAddCourse = async () => {
    const videoRef = storage.ref(`courses/${courseName}/${video.name}`);
    await videoRef.put(video);
    const videoUrl = await videoRef.getDownloadURL();

    await database.ref(`courses/${courseName}`).set({
      name: courseName,
      videoUrl
    });

    questions.forEach(async (question) => {
      await database.ref(`questions/${courseName}/${question.id}`).set(question);
    });
  };

  return (
    <div>
      <h1>إضافة كورس جديد</h1>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="اسم الكورس"
      />
      <input
        type="file"
        onChange={(e) => setVideo(e.target.files[0])}
      />
      <button onClick={handleAddCourse}>إضافة كورس</button>
    </div>
  );
};

export default AddCoursePage;

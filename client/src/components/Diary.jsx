import { useEffect, useState } from "react";
import { deleteDiary, fetchDiary } from "../services/apiService";
import { Link } from "react-router-dom";

function Diary() {
  const [diaries, setDiaries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDiary = async () => {
      setIsLoading(true);
      try {
        const diaryData = await fetchDiary();
        setIsLoading(false);
        setDiaries(diaryData);
      } catch (error) {
        console.error("Error fetching diary:", error);
      }
    };
    getDiary();
  }, [diaries]);

  return (
    <div>
      {!isLoading ? (
        "Loading"
      ) : diaries.length > 0 ? (
        diaries.map((diary) => (
          <div className="diary" key={diary._id}>
            <span>
              <h1>Title: {diary.title}</h1>
              <p>{diary.date}</p>
            </span>
            <p>Content: {diary.content}</p>
            <Link to={`/update/${diary._id}`}>Update</Link>
            <button onClick={() => deleteDiary(diary._id)}>Delete</button>
          </div>
        ))
      ) : (
        <h3>No Diary Found</h3>
      )}
    </div>
  );
}

export default Diary;

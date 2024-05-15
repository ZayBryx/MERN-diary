import { useState } from "react";
import { createDiary } from "../services/apiService";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const diary = await createDiary({ title, content, date });
      setIsLoading(true);
      if (!diary) {
        console.log("Failed");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input type="submit" value="Add Diary" disabled={isLoading} />
      </form>
    </div>
  );
}

export default Create;

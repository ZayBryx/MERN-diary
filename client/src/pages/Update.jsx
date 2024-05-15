import { useEffect, useState } from "react";
import { fetchOneDiary, updateDiary } from "../services/apiService";
import { useParams, useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

function Update() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  // const [diary, setDiary] = useState({});

  useEffect(() => {
    const getOneDiary = async () => {
      try {
        const { title, content, date } = await fetchOneDiary(id);

        setTitle(title);
        setContent(content);
        setDate(date);
      } catch (error) {
        console.error(error);
      }
    };

    getOneDiary();
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    try {
      const diary = await updateDiary({ title, content, date, id });
      if (!diary) {
        return navigate("/update");
      }
      navigate("/");
    } catch (error) {
      console.error(error);
      throw new error();
    }
  };
  return (
    <div>
      <form onSubmit={update}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="date"
          name="date"
          value={formatDate(date)}
          onChange={(e) => setDate(e.target.value)}
        />
        <input type="submit" value="UPDATE" />
      </form>
    </div>
  );
}

export default Update;

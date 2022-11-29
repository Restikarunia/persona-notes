import React from "react";
import { useSearchParams } from 'react-router-dom';
import PropTypes from "prop-types";
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";
import {deleteNote, getNotes} from "../utils/api";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() =>{
        return searchParams.get('keyword') || ''
    });

    React.useEffect(() =>{
        getNotes().then(({data}) =>{
            setNotes(data);
        });
    }, []);

 async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler (keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  return (
    <section>
      <NoteSearch keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
    </section>
  )
}

export default HomePage;

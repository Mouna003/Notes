import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('/api/notes');
        setNotes(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="mb-4">Notes</h2>
      {notes.map(note => (
        <Card key={note._id} className="mb-3">
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
              {note.content.length > 100 
                ? `${note.content.substring(0, 100)}...` 
                : note.content}
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">
                {new Date(note.createdAt).toLocaleDateString()}
              </small>
              <div>
                <Button as={Link} to={`/notes/${note._id}`} variant="info" size="sm" className="me-2">
                  View
                </Button>
                <Button as={Link} to={`/notes/${note._id}/edit`} variant="warning" size="sm" className="me-2">
                  Edit
                </Button>
                <Button onClick={() => handleDelete(note._id)} variant="danger" size="sm">
                  Delete
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
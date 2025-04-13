import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

export default function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`/api/notes/${id}`);
        setNote(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNote();
  }, [id]);

  if (!note) return <div>Loading...</div>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            Created: {new Date(note.createdAt).toLocaleDateString()}
          </small>
          <div>
            <Button as={Link} to={`/notes/${note._id}/edit`} variant="warning" className="me-2">
              Edit
            </Button>
            <Button as={Link} to="/notes" variant="secondary">
              Back
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
import { useState, useEffect } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface VideoNotesProps {
  lessonId: string;
}

export default function VideoNotes({ lessonId }: VideoNotesProps) {
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const key = `lesson-notes-${lessonId}`;
    const savedNotes = localStorage.getItem(key);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [lessonId]);

  const handleSave = () => {
    localStorage.setItem(`lesson-notes-${lessonId}`, notes);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">Your Notes</h3>
        {saved && (
          <span className="text-green-600 text-sm font-semibold">Saved!</span>
        )}
      </div>
      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Take notes while watching the video..."
        className="min-h-[200px] mb-4"
      />
      <Button onClick={handleSave} className="w-full">
        Save Notes
      </Button>
    </div>
  );
}

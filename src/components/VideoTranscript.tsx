import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface VideoTranscriptProps {
  transcript: string;
}

export default function VideoTranscript({ transcript }: VideoTranscriptProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Video Transcript
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>
      
      <div className={`prose max-w-none ${isExpanded ? '' : 'max-h-48 overflow-hidden relative'}`}>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {transcript}
        </p>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
    </Card>
  );
}

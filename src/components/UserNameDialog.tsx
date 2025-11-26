import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

interface UserNameDialogProps {
  open: boolean;
  onSubmit: (name: string) => void;
}

export default function UserNameDialog({ open, onSubmit }: UserNameDialogProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to Financial Freedom Academy!</DialogTitle>
          <DialogDescription>
            Enter your name to personalize your certificates
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <Button type="submit" className="w-full" disabled={!name.trim()}>
            Get Started
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

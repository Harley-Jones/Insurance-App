import { useState } from 'react';
import { Certificate } from '../types/education';
import { Button } from './ui/button';
import { Share2, Linkedin, Twitter, Facebook, Download } from 'lucide-react';
import { generateShareableImage, getShareMessages } from '../utils/socialShareGenerator';
import { toast } from 'sonner';
import { useGamification } from '../contexts/GamificationContext';
import { POINT_VALUES } from '../data/gamificationData';


interface SocialShareProps {
  certificate: Certificate;
}

export default function SocialShare({ certificate }: SocialShareProps) {
  const { addPoints } = useGamification();
  const [isSharing, setIsSharing] = useState(false);


  const handleShare = async (platform: 'linkedin' | 'twitter' | 'facebook') => {
    setIsSharing(true);
    const messages = getShareMessages(certificate);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}&summary=${encodeURIComponent(messages.linkedin)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(messages.twitter)}&url=${encodeURIComponent(window.location.origin)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}&quote=${encodeURIComponent(messages.facebook)}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    addPoints(POINT_VALUES.SHARE_ACHIEVEMENT, 'Shared achievement on social media!');
    setIsSharing(false);
    toast.success(`Sharing to ${platform}!`);
  };


  const handleDownloadImage = async () => {
    try {
      const imageUrl = await generateShareableImage(certificate);
      const link = document.createElement('a');
      link.download = `${certificate.moduleTitle.replace(/\s+/g, '_')}_Certificate.png`;
      link.href = imageUrl;
      link.click();
      toast.success('Certificate image downloaded!');
    } catch (error) {
      toast.error('Failed to generate image');
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <Button
        onClick={() => handleShare('linkedin')}
        disabled={isSharing}
        variant="outline"
        size="sm"
        className="flex-1 min-w-[120px]"
      >
        <Linkedin className="w-4 h-4 mr-2" />
        LinkedIn
      </Button>
      <Button
        onClick={() => handleShare('twitter')}
        disabled={isSharing}
        variant="outline"
        size="sm"
        className="flex-1 min-w-[120px]"
      >
        <Twitter className="w-4 h-4 mr-2" />
        Twitter
      </Button>
      <Button
        onClick={() => handleShare('facebook')}
        disabled={isSharing}
        variant="outline"
        size="sm"
        className="flex-1 min-w-[120px]"
      >
        <Facebook className="w-4 h-4 mr-2" />
        Facebook
      </Button>
      <Button
        onClick={handleDownloadImage}
        variant="outline"
        size="sm"
        className="flex-1 min-w-[120px]"
      >
        <Download className="w-4 h-4 mr-2" />
        Image
      </Button>
    </div>
  );
}

import { Certificate } from '../types/education';

export const generateShareableImage = (certificate: Certificate): Promise<string> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d')!;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#2962FF');
    gradient.addColorStop(1, '#0D47A1');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // Border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 8;
    ctx.strokeRect(30, 30, 1140, 570);

    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Completion', 600, 120);

    // Subtitle
    ctx.font = '28px Arial';
    ctx.fillText('Financial Freedom Academy', 600, 170);

    // Name
    ctx.font = 'bold 48px Arial';
    ctx.fillText(certificate.userName, 600, 280);

    // Module
    ctx.font = '32px Arial';
    ctx.fillText(certificate.moduleTitle, 600, 350);

    // Score
    ctx.font = 'bold 36px Arial';
    ctx.fillStyle = '#4CAF50';
    ctx.fillText(`Score: ${certificate.score}%`, 600, 420);

    // Date
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '24px Arial';
    const date = new Date(certificate.completionDate).toLocaleDateString();
    ctx.fillText(`Completed: ${date}`, 600, 500);

    resolve(canvas.toDataURL('image/png'));
  });
};

export const getShareMessages = (certificate: Certificate) => {
  const baseMessage = `I just completed "${certificate.moduleTitle}" with a score of ${certificate.score}%!`;
  const hashtags = '#FinancialFreedom #InsuranceEducation #FinancialLiteracy #Achievement';
  
  return {
    linkedin: `${baseMessage} Proud to expand my financial knowledge through the Financial Freedom Academy. ${hashtags}`,
    twitter: `${baseMessage} 🎓 ${hashtags}`,
    facebook: `${baseMessage} Excited to continue my journey in financial education!`
  };
};

import jsPDF from 'jspdf';
import { Certificate } from '../types/education';

export const generateCertificatePDF = (certificate: Certificate) => {
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();

  // Border
  pdf.setDrawColor(41, 98, 255);
  pdf.setLineWidth(3);
  pdf.rect(10, 10, width - 20, height - 20);
  
  pdf.setLineWidth(0.5);
  pdf.rect(15, 15, width - 30, height - 30);

  // Title
  pdf.setFontSize(40);
  pdf.setTextColor(41, 98, 255);
  pdf.text('Certificate of Completion', width / 2, 40, { align: 'center' });

  // Subtitle
  pdf.setFontSize(16);
  pdf.setTextColor(100, 100, 100);
  pdf.text('Financial Freedom Academy', width / 2, 55, { align: 'center' });

  // Name
  pdf.setFontSize(14);
  pdf.setTextColor(50, 50, 50);
  pdf.text('This certifies that', width / 2, 80, { align: 'center' });
  
  pdf.setFontSize(28);
  pdf.setTextColor(0, 0, 0);
  pdf.text(certificate.userName, width / 2, 95, { align: 'center' });

  // Module
  pdf.setFontSize(14);
  pdf.setTextColor(50, 50, 50);
  pdf.text('has successfully completed', width / 2, 110, { align: 'center' });
  
  pdf.setFontSize(22);
  pdf.setTextColor(41, 98, 255);
  pdf.text(certificate.moduleTitle, width / 2, 125, { align: 'center' });

  // Score
  pdf.setFontSize(16);
  pdf.setTextColor(34, 197, 94);
  pdf.text(`Score: ${certificate.score}%`, width / 2, 140, { align: 'center' });

  // Date
  pdf.setFontSize(12);
  pdf.setTextColor(100, 100, 100);
  const date = new Date(certificate.completionDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  pdf.text(`Completed on ${date}`, width / 2, 160, { align: 'center' });

  // Footer
  pdf.setFontSize(10);
  pdf.text('Financial Freedom Academy - Insurance Education Platform', width / 2, height - 25, { align: 'center' });

  return pdf;
};

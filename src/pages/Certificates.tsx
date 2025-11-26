import { Certificate } from '../types/education';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { generateCertificatePDF } from '../utils/certificateGenerator';
import { Award, Download, Calendar, Target, Share2 } from 'lucide-react';
import SocialShare from '../components/SocialShare';
import { useState, useEffect } from 'react';
import { useGamification } from '../contexts/GamificationContext';
import { POINT_VALUES } from '../data/gamificationData';


interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  const { addPoints, gamification } = useGamification();
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const [awardedCerts, setAwardedCerts] = useState<Set<string>>(new Set());

  useEffect(() => {
    certificates.forEach(cert => {
      if (!awardedCerts.has(cert.moduleId)) {
        addPoints(POINT_VALUES.CERTIFICATE_EARN, `Certificate earned: ${cert.moduleTitle}`);
        setAwardedCerts(prev => new Set([...prev, cert.moduleId]));
      }
    });
  }, [certificates.length]);


  const handleDownload = (certificate: Certificate) => {
    const pdf = generateCertificatePDF(certificate);
    pdf.save(`${certificate.moduleTitle.replace(/\s+/g, '_')}_Certificate.pdf`);
  };

  const toggleShare = (certId: string) => {
    setExpandedCert(expandedCert === certId ? null : certId);
  };


  if (certificates.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center py-16">
          <Award className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">No Certificates Yet</h2>
          <p className="text-gray-600 text-lg">
            Complete modules and pass quizzes to earn certificates!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Certificates</h1>
        <p className="text-gray-600">Download and share your achievements</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <Card key={cert.moduleId} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <Award className="w-12 h-12 text-blue-600" />
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                cert.score >= 90 ? 'bg-green-100 text-green-700' :
                cert.score >= 80 ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {cert.score}%
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.moduleTitle}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(cert.completionDate).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Target className="w-4 h-4 mr-2" />
                Score: {cert.score}%
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                onClick={() => handleDownload(cert)}
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>

              <Button 
                onClick={() => toggleShare(cert.moduleId)}
                variant="outline"
                className="w-full"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Achievement
              </Button>

              {expandedCert === cert.moduleId && (
                <div className="pt-2 border-t">
                  <SocialShare certificate={cert} />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

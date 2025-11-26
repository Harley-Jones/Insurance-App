import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { stateInsuranceData } from '@/data/stateInsuranceData';
import { ExternalLink, Phone, Search } from 'lucide-react';

export const StateInsuranceDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const filteredStates = stateInsuranceData.filter(state =>
    state.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.abbreviation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedStateData = stateInsuranceData.find(s => s.state === selectedState);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">State Insurance Department Directory</h1>
        <p className="text-lg text-muted-foreground">
          Find your state's insurance department contact information, verify agent licenses, 
          file complaints, and learn about your consumer rights.
        </p>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search by state name or abbreviation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {filteredStates.map((state) => (
            <Card 
              key={state.abbreviation}
              className="cursor-pointer hover:border-primary transition-colors"
              onClick={() => setSelectedState(state.state)}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{state.state}</h3>
                    <p className="text-sm text-muted-foreground">{state.department}</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">{state.abbreviation}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedStateData && (
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>{selectedStateData.state} Insurance Department</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">{selectedStateData.department}</h4>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${selectedStateData.phone}`} className="hover:underline">
                    {selectedStateData.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href={selectedStateData.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Website
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href={selectedStateData.licenseVerification} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Agent License
                  </a>
                </Button>
                <Button asChild variant="destructive" className="w-full justify-start">
                  <a href={selectedStateData.complaintForm} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    File a Complaint
                  </a>
                </Button>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Free Look Period</h4>
                <p className="text-sm">{selectedStateData.freeLookPeriod}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Your Consumer Rights</h4>
                <ul className="text-sm space-y-1">
                  {selectedStateData.keyRights.map((right, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
